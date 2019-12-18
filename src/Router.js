import React, {
    useContext,
    lazy,
    Suspense,
  } from 'react';
  import {
    Router,
    Route,
    Switch,
    withRouter
  } from 'react-router-dom';
  import { AuthRoute, NonauthRoute } from 'route-types/PrivateRoutes';
  import { Loader } from 'components';
  import authContext from 'contexts/AuthContext';

  import PropTypes from 'prop-types';
  import history from './history';

  // pages
  const Home = lazy(() => import('./pages/Home'));
  const Dashboard = lazy(() => import('./pages/Dashboard/index'));
  const ErrorPage = lazy(() => import('./pages/Error'));

  function Scroll(props) {
    React.useEffect(() => {
      window.scrollTo(0, 0);
    }, [props.location]);

    return props.children;
  }

  Scroll.propTypes = {
    location: PropTypes.object,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ])
  };

  const ScrollToTop = withRouter(Scroll);

  const RouterComponent = () => {

    const { isLoggedIn } = useContext(authContext);

    return (

        <Router history={history}>
        <ScrollToTop>
          <Switch>
            <NonauthRoute
              exact
              path="/"
              component={Home}
              isAuthenticated={isLoggedIn}
            />

            <AuthRoute
              path="/dashboard"
              component={Dashboard}
              isAuthenticated={isLoggedIn}
            />

            <Route
              render={routeProps => (
                <Suspense fallback={<Loader />}>
                  <ErrorPage {...routeProps} />
                </Suspense>
              )}
            />
          </Switch>
        </ScrollToTop>
      </Router>
    );
  }

  export default RouterComponent;

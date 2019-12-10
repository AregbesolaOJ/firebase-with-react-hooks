import React, {
    lazy,
    Suspense,
  } from 'react';
  import {
    Router,
    Route,
    Switch,
    withRouter
  } from 'react-router-dom';
  import PropTypes from 'prop-types';
  import history from './history';
  
  // pages
  const Home = lazy(() => import('./pages/Home'));
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
    return (
      <Router history={history}>
        <ScrollToTop>
          <Switch>
            <Route
              exact
              path="/"
              render={routeProps => (
                <Suspense fallback={<p>Loading...</p>}>
                  <Home {...routeProps} />
                </Suspense>
              )}
            />
            <Route
              exact
              path="/dashboard"
              render={routeProps => (
                <Suspense fallback={<p>Loading...</p>}>
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
  
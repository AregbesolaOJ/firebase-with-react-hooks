import React, { Suspense } from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Loader } from 'components';

export const AuthRoute = ({
  component: Component,
  isAuthenticated,
  ...rest
}) => (
  <Route
    {...rest}
    render={props => {
      if (isAuthenticated) {
        return (
          <Suspense fallback={<Loader />}>
            <Component {...props} />{' '}
          </Suspense>
        );
      }
      return (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location.pathname }
          }}
        />
      );
    }}
  />
);

export const NonauthRoute = ({
  component: Component,
  isAuthenticated,
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated ? (
        <Redirect
          to={
            props.location.state ? props.location.state.from : '/dashboard'
          }
        />
      ) : (
        <Suspense fallback={<Loader />}>
          <Component {...props} />
        </Suspense>
      )
    }
  />
);

AuthRoute.propTypes = {
  location: PropTypes.object,
  component: PropTypes.object,
  isAuthenticated: PropTypes.bool,
};

NonauthRoute.propTypes = {
  component: PropTypes.object,
  isAuthenticated: PropTypes.bool,
  location: PropTypes.object
};

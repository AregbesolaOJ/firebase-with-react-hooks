import React, { Suspense } from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

export const AuthRoute = ({
  component: Component,
  isAuthenticated,
  accessGranted,
  ...rest
}) => (
  <Route
    {...rest}
    render={props => {
      if (isAuthenticated && accessGranted) {
        return (
          <Suspense fallback={<p>Loading...</p>}>
            <Component {...props} />{' '}
          </Suspense>
        );
      }
      if (isAuthenticated) {
        return (
          <Redirect
            to={{
              pathname: '/select-branch',
              state: { from: props.location.pathname }
            }}
          />
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
            props.location.state ? props.location.state.from : '/select-branch'
          }
        />
      ) : (
        <Suspense fallback={<p>Loading...</p>}>
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
  accessGranted: PropTypes.bool
};

NonauthRoute.propTypes = {
  component: PropTypes.object,
  isAuthenticated: PropTypes.bool,
  location: PropTypes.object
};

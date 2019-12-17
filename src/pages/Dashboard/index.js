import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import {
  Loader,
} from 'components';

const AllUsers = lazy(() => import('./AllUsers'));
const User = lazy(() => import('./User'));
const Create = lazy(() => import('./Create'));
const Edit = lazy(() => import('./Edit'));
const ErrorPage = lazy(() => import('../Error'));

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-content">
        <Switch>
          <Route
            path="/dashboard/"
            exact
            render={routeProps => (
              <Suspense fallback={<Loader />}>
                <AllUsers {...routeProps} />
              </Suspense>
            )}
          />

          <Route
            path="/dashboard/user/:id"
            render={routeProps => (
              <Suspense fallback={<Loader />}>
                <User {...routeProps} />
              </Suspense>
            )}
          />

          <Route
            path="/dashboard/create"
            render={routeProps => (
              <Suspense fallback={<Loader />}>
                <Create {...routeProps} />
              </Suspense>
            )}
          />

          <Route
            path="/dashboard/edit/:id"
            render={routeProps => (
              <Suspense fallback={<Loader />}>
                <Edit {...routeProps} />
              </Suspense>
            )}
          />

          <Route
            render={routeProps => (
              <Suspense fallback={<Loader />}>
                <ErrorPage {...routeProps} />
              </Suspense>
            )}
          />
        </Switch>
      </div>
    </div>
  );
};

export default Dashboard;

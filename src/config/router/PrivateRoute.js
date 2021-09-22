import React from 'react';
import { Route } from 'react-router-dom';
import { MainLayout } from '../../layout';

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        return (
          <>
            <MainLayout>
              <Component {...props} />
            </MainLayout>
          </>
        );
      }}
    />
  );
};

export default PrivateRoute;

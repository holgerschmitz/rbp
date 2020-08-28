import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { authService } from './auth';


export default ({component: Component, ...rest}) => {
  const authenticated = authService.useAuthenticated();

  console.log('PROUTE', authenticated);
  if (authenticated === undefined) return <div />;

  return (
    <Route
      {...rest}
      render={(props) => authenticated === true
        ? <Component {...props} />
        : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
    />
  );
}

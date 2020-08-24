import React from 'react';
import { Redirect } from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react';
import OktaSignInWidget from './OktaSignInWidget';

export default () => {
  const { authState, authService } = useOktaAuth();

  const onSuccess = function(res) {
    if (res.status === 'SUCCESS') {
      return authService.redirect({
        sessionToken: res.session.token
      });
    }
  }

  const onError = function(err) {
    console.log('error logging in', err);
  }

  return authState.isAuthenticated ?
    <Redirect to={{ pathname: '/' }}/> :
    <OktaSignInWidget
      baseUrl='https://dev-322018.oktapreview.com'
      onSuccess={onSuccess}
      onError={onError}/>;
}

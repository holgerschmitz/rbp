import React from 'react';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import Private from './Private';
import { useHistory } from "react-router";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { LoginCallback, SecureRoute, Security } from '@okta/okta-react';

function SecuredApp() {
  const history = useHistory();

  const onAuthRequired = function() {
    history.push('/login')
  }

  return (
    <Security issuer='https://dev-322018.oktapreview.com/oauth2/default'
              clientId='0oanr1wquftUEJTWX0h7'
              redirectUri={window.location.origin + '/callback'}
              pkce={true}
              onAuthRequired={onAuthRequired} >
      <Header />
      <Route path='/' exact={true} component={Home}/>
      <Route path='/login' component={Login}/>
      <SecureRoute path='/private' component={Private}/>
      <Route path='/callback' component={LoginCallback}/>
    </Security>
  );
}

export default SecuredApp;

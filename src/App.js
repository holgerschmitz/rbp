import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Private from './Private';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { LoginCallback, SecureRoute, Security } from '@okta/okta-react';

function App() {

  return (
    <div className="App">
      <div className="page">
        <div className="content">
          <Router>
            <Security issuer='https://dev-322018.oktapreview.com/oauth2/default'
                      clientId='0oanr1wquftUEJTWX0h7'
                      redirectUri={window.location.origin + '/callback'}
                   pkce={true}>
               <Header />
               <Route path='/' exact={true} component={Home}/>
               <SecureRoute path='/private' exact={true} component={Private}/>
              <Route path='/callback' component={LoginCallback}/>
            </Security>
          </Router>

        </div>
      </div>
    </div>
  );
}

export default App;

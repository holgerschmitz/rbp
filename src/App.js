import React from 'react';
import './App.css';
import SecuredApp from './SecuredApp';
import Home from './Home';
import Login from './Login';
import Private from './Private';
import { BrowserRouter as Router, withRouter, Route } from 'react-router-dom';
import { LoginCallback, SecureRoute, Security } from '@okta/okta-react';

function App() {

  return (
    <div className="App">
      <div className="page">
        <div className="content">
          <Router>
            <SecuredApp />
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;

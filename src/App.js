import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import Private from './Private';
import PrivateRoute from './PrivateRoute';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className="page">
        <div className="content">
          <Router>
            <Header />
            <Route path='/' exact={true} component={Home}/>
            <Route path='/login' exact={true} component={Login}/>
            <PrivateRoute path='/private' component={Private}/>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;

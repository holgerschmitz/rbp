import React from 'react';
import { Link } from 'react-router-dom';

import { authService } from './auth';

export default () => {
  const authenticated = authService.useAuthenticated();

  const login = () => { authService.login('/'); }
  const logout = () => { authService.logout('/'); }

  const userText = authenticated
    ? <button onClick={ logout }>Logout</button>
    : <button onClick={ login }>Sign In</button>;
  return (
    <header>
      <div>React Login</div>
      <ul className="menu"><li><Link to="/">Home</Link></li><li><Link to="/private">Private</Link></li></ul>
      { userText }
    </header>
  );
}

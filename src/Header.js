import React from 'react';
import { Link } from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react';

export default () => {
  const { authState, authService } = useOktaAuth();

  const login = () => { authService.login('/'); }
  const logout = () => { authService.logout('/'); }

  const userText = authState.isAuthenticated
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

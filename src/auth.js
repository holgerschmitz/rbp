
import { useState, useEffect } from 'react';

import { OktaAuth } from '@okta/okta-auth-js';

class AuthService {
  constructor() {
    this.authClient = new OktaAuth({
      issuer: 'https://dev-322018.oktapreview.com/oauth2/default',
      clientId: '0oanr1wquftUEJTWX0h7',
      pkce: true
    });
    this.authenticated = false;
    this.isAuthenticated();
  }

  async isAuthenticated() {
    this.authenticated = await this.authClient.session.exists();
    return this.authenticated;
  }

  useAuthenticated() {
    const [authenticated, setAuthenticated] = useState();

    useEffect(() => {
      if (authenticated === undefined) {
        this.isAuthenticated().then(auth => {
          setAuthenticated(auth);
        });
      }
    });

    return authenticated;
  }

  login(email, password) {
    this.authClient.signIn({
      username: email,
      password: password
    })
    .then((transaction) => {
      console.log('SIGNED IN', transaction);
      if (transaction.status === 'SUCCESS') {
        this.authClient.session.setCookieAndRedirect(transaction.sessionToken);
      } else {
        throw new Error('We cannot handle the ' + transaction.status + ' status');
      }
    })
    .catch((err) => {
      console.error(err);
    });
  }

  logout() {
    this.authClient.signOut();
  }
}

export const authService = new AuthService();

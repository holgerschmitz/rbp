import React from 'react';
import { Redirect } from 'react-router-dom';
import { authService } from './auth';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false,
      email: '',
      password: ''
    };

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.signIn = this.signIn.bind(this);
  }

  componentDidMount() {
    authService.isAuthenticated().then(auth => {
      this.setState({authenticated: auth});
    })
  }

  handleEmailChange(event) {
    this.setState({email: event.target.value});
  }

  handlePasswordChange(event) {
    this.setState({password: event.target.value});
  }

  signIn(event) {
    event.preventDefault();
    authService.login(this.state.email, this.state.password);
  }

  render() {
    return this.state.authenticated ?
      <Redirect to={{ pathname: '/private' }}/> :
      <form onSubmit={this.signIn} className="login-form">
        <h2>Log In</h2>
        <p>Please login to continue</p>
        <label className="full-width-input">
          Email
          <input type="text" placeholder="Email" value={this.state.email} onChange={this.handleEmailChange} required />
        </label>
        <label className="full-width-input">
          Password
          <input type="password" placeholder="Password" value={this.state.password} onChange={this.handlePasswordChange} required />
        </label>
        <button className="button">Login</button>
      </form>;
  }
}

export default Login;

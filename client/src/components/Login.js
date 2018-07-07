import React, { Component } from 'react';
// import Password from './Password';

class Login extends Component {
  // <Password securePW={this.props.securePW} />

  render() {
    return (
      <div className="login">
        <form action="submit">
          <input id="email" type="text" placeholder="Email Address" autoComplete='off' />
          <input id="password" type="text" placeholder="Password" autoComplete='off' />
          <button className="login-btn" onClick={this.props.handleLogin} type="submit">LOG IN</button>
          <button className="signup-btn" onClick={this.props.showSignUp}>SIGNUP</button>
        </form>
      </div>
    )
  }
}

export default Login;
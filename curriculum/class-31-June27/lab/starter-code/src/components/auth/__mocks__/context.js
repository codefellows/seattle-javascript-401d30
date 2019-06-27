import React from 'react';
import jwt from 'jsonwebtoken';

export const LoginContext = React.createContext();

class LoginProvider extends React.Component {
  constructor(props) {
    super(props);
    // Yes, setting state from props is an anti-pattern.
    // But this is a mock, we're matching the external API, so bite me.
    let token = props.token && jwt.sign(props.token, props.secret);
    this.state = {
      loggedIn: !!props.loggedIn,
      token: token,
      user: { capabilities: ['create','read','update','delete'] }
    };
  }

  render() {
    return (
      <LoginContext.Provider value={this.state}>
        {this.props.children}
      </LoginContext.Provider>
    );
  }
}

export default LoginProvider;

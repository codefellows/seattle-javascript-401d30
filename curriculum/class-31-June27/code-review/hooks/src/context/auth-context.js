import React from 'react';

export const AuthContext = React.createContext();

export default class AuthContextProvider extends React.Component {

  constructor(props) {
    super(props);

    this.state = {};

    this.state.loggedIn = false;
    this.state.token = null;
    //-----------------------------------------------------------------------------
    this.state.login = this.login;
    this.state.logout = this.logout;
  }

  // Vinicio - you can use this function to pre-login your user
  login = token => {
    this.setState({
      token,
      loggedIn: !!token,
    });
  };

  logout = () => {
    this.setState({
      token: null,
      loggedIn: false,
    });
  };

  render() {
    return (
      <AuthContext.Provider value={this.state}>
        { this.props.children }
      </AuthContext.Provider>
    );
  }
}

import React from 'react';
import cookie from 'react-cookies';
import jwt from 'jsonwebtoken';

export const LoginContext = React.createContext();

const SECRET = process.env.REACT_APP_SECRET || 'changeit';

const setLoginState = token => {
  let loggedIn = false;
  let user = {};
  try{
    user = jwt.verify(token, SECRET);
    loggedIn = true;
  } catch(e) {
    loggedIn = false;
    token = null;
  }
  return {user,loggedIn,token};
};

class LoginProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: this.login,
      logout: this.logout,
    };
  }

  login = (loginToken) => {
    cookie.save('auth', loginToken);
    let {user,loggedIn,token} = setLoginState(loginToken);
    this.setState({user,loggedIn,token});
  };

  logout = () => {
    cookie.remove('auth');
    this.setState({user:{},loggedIn:false,token:null});
  };

  static getDerivedStateFromProps(props, state) {
    const qs = new URLSearchParams(document.location.search);
    const cookieToken = cookie.load('auth');
    let loginToken = qs.get('token') || cookieToken || null;
    let {user,loggedIn,token} = setLoginState(loginToken);
    return {...state, user, loggedIn, token };
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

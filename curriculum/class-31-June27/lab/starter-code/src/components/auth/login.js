import superagent from 'superagent';
import React from 'react';
import { LoginContext } from './context.js';

const API = process.env.REACT_APP_API;

const If = props => {
  return !!props.condition ? props.children : null;
};

class Login extends React.Component {
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e, loginMethodFromContext) => {
    e.preventDefault();
    superagent
    .post(`${API}/signin`)
    .auth(this.state.username, this.state.password)
    .then(response => {
      let token = response.text;
      loginMethodFromContext(token);
    })
    .catch(console.error);
  };

  render() {
    return (
      <LoginContext.Consumer>
        {context => {
          return (
            <>
              <If condition={context.loggedIn}>
                <button onClick={context.logout}>
                  Log Out
                </button>
              </If>
              <If condition={!context.loggedIn}>
                <div>
                  <form onSubmit={e => this.handleSubmit(e, context.login)}>
                    <input
                      placeholder="username"
                      name="username"
                      onChange={this.handleChange}
                    />
                    <input
                      placeholder="password"
                      name="password"
                      type="password"
                      onChange={this.handleChange}
                    />
                    <input type="submit" value="login" />
                  </form>
                </div>
              </If>
            </>
          );
        }}
      </LoginContext.Consumer>
    );
  }
}

export default Login;

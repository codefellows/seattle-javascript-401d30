import React from 'react';
import PropTypes from 'prop-types';

import { LoginContext } from './context.js';

const If = props => {
  return props.condition ? props.children : null;
};

console.log('auth loaded');

class Auth extends React.Component {
  render() {
    console.log("AUTH RENDER");
    return (
      <LoginContext.Consumer>
        {context => {
          console.log(context);
          let okToRender =
            context.loggedIn &&
            (this.props.capability
              ? context.user.capabilities && context.user.capabilities.includes(this.props.capability)
              : true);

          return <If condition={okToRender}>{this.props.children}</If>;
        }}
      </LoginContext.Consumer>
    );
  }
}

Auth.propTypes = {
  capability: PropTypes.string.isRequired,
};

export default Auth;

import React from 'react';
import jsonWebToken from 'jsonwebtoken';
import {AuthContext} from "../context/auth-context";

const If = props => {
  return !!props.condition ? props.children : null;
};

export default class ACLAuth extends React.Component {
  static contextType = AuthContext;

  render() {
    let shouldComponentRender = false;

    try {
      let userFromToken = null;
      if(this.context.token) {
        // 1 - Decrypt the token (this means I need access to my secret) (DANGER! DANGER! DANGER! HORROR)
        userFromToken = jsonWebToken.verify(this.context.token, process.env.REACT_APP_SECRET);
      }

      if(userFromToken !== null){
        // Check if the capability we are looking for is in the token
        if (this.props.capability) {
          shouldComponentRender = userFromToken.capabilities.includes(this.props.capability);
        } else {
          // Vinicio - if we reach this line, we don't care about capabilities, only about logged in
          shouldComponentRender = true;
        }
      }
    }
    catch (exception) {
      console.error(exception);
    }

    return(
      <If condition={shouldComponentRender}>
        <>
          { this.props.children }
        </>
      </If>
    );
  }
}

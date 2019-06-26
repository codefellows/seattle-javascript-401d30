import React from 'react';
import AuthContextProvider from "./components/context/auth-context";
import Signup from "./components/signup/signup";
import ACLAuth from "./components/acl-auth/ACLAuth";


export default class App extends React.Component {
  render(){
    return (
      <AuthContextProvider>
        <Signup/>
        <ACLAuth>
          <p>
            This will show up as soon as I'm logged in because there is no capability
          </p>
          <p>
            KALIIIIIIIIIIIIIIIIIIIIIIIIIIIIII
          </p>
        </ACLAuth>
        <ACLAuth capability="admin">
          <p>
            Sekret information ;)
          </p>
        </ACLAuth>
      </AuthContextProvider>
    );
  }
}


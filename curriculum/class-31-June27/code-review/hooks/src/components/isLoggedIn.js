import React from 'react';
import { useContext } from 'react';
import {AuthContext} from "../context/auth-context";

export default function IsLoggedIn() {
  // Vinicio - using functions to set context o_O
  const context = useContext(AuthContext);
  return(
    <>
      <p> I'm going to tell you if you are logged in: {context.loggedIn.toString()}</p>
      <button type="button" onClick={() => context.login("ey I am a real token :)")}>
        Simulate Login
      </button>
    </>
  );
}

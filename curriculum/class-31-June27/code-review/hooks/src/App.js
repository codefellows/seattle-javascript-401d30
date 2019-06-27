import React from 'react';
import './App.css';
import Counter from "./components/counter/counter";
import CounterReducer from './components/counterReducer/counterReducer';
import AuthContextProvider from "./context/auth-context";
import IsLoggedIn from "./components/isLoggedIn";

function App() {
  return (
    <>
      <AuthContextProvider>
        <IsLoggedIn/>
      </AuthContextProvider>
      <Counter/>
      <CounterReducer/>
    </>
  );
}

export default App;

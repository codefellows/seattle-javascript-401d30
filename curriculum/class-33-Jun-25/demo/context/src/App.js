import React from 'react';
import PersonContext from './components/context/person-context';
import Person from './components/person/person';
import Display from "./components/display/display";
import Wrapper from "./components/wrapper/wrapper";
import Cat from "./components/cat/cat";
//import Person from './components/person/person-old';

function App() {
  return (
    <PersonContext>
      <Person/>
      {/*<Display/>*/}
      <Wrapper/>
    </PersonContext>
  );
}

export default App;

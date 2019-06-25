import React from 'react';
import CatContext from '../context/cat-context'
import Display from "../display/display";
import Cat from "../cat/cat";

function Wrapper() {
  return (
    <CatContext>
      <p> I'm inside Cat Context ;) :3</p>
      <Display/>
      <Cat/>
    </CatContext>
  );
}

export default Wrapper;

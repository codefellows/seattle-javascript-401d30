import React from 'react';
import { useReducer } from 'react';

// function reducer(state, action) {
//  const {type,payload} = action;
//
// }

const initialState = {count: 0};

// My types are going to be: 'INCREMENT' and 'DECREMENT'
function reducer(state, {type, payload}) {
  switch(type) {
    case 'INCREMENT':
      return {count: state.count + 1};
    case 'DECREMENT':
      return {count: state.count - 1};
    default:
      return state;
  }
}

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h2>The Counter is: {state.count}</h2>
      <button type="button" onClick={() => dispatch({type: 'INCREMENT', payload: null})}>
        Increase
      </button>
      <button type="button" onClick={() => dispatch({type: 'DECREMENT', payload: null})}>
        Decrement
      </button>
    </>
  );
};

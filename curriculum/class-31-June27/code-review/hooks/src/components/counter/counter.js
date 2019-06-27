import React from 'react';
import { useState } from 'react';
import useIsCute from "../hooks/isCute";

// Vinicio - We are functional developers!!!!!!!!!

export default function Counter() {

  // Vinicio - useState returns an array [value, updateFunction]
  const [clicks, setClicks] = useState(10);
  // this.state.clicks = 0
  const isGingerCute = useIsCute('Ginger');

  return (
    <>
      <h1>{isGingerCute}</h1>
      <h2>The Counter is: {clicks}</h2>
      {/*this.setState{clicks: clicks + 1}*/}
      <button type="button" onClick={() => setClicks(clicks + 1)}>
        {/*Be careful with big function definitions in the render return*/}
        Update CLicks
      </button>
    </>
  );
};

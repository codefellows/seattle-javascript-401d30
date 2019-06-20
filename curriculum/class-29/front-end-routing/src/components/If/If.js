import React from 'react';


export default props => {
  if (props.condition) {
    return props.children;
  }
  return null; // Vinicio - null means no rendering
};
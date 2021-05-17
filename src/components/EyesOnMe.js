// Code EyesOnMe Component Here

import React from 'react';

function EyesOnMe() {
  function buttonFocus() {
    console.log("Good!");
  }
  function buttonBlur() {
      console.log("Hey! Eyes on me!");
  }
  return (
    <button onFocus={buttonFocus} onBlur={buttonBlur}>Eyes on me</button>
  )
}
export default EyesOnMe;
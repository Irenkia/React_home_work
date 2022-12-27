import React, { useState } from "react";

function Button() {
  const [count, setCount] = useState(0);
  function changeCount() {
    setCount(count + 1);
    console.log(count);
  }
  return (
    <button onClick={changeCount}>Please click; clecked {count} times</button>
  );
}

export default Button;

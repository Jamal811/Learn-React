import React, { useState } from "react";

const UseHook = (initialVal = 0) => {
  const [couunt, setCount] = useState(initialVal);

  const Increment = () => {
    setCount(couunt + 1);
  };
  const Decrement = () => {
    setCount(couunt - 1);
  };
  const Restart = () => {
    setCount(0);
  };
  return { couunt, Increment, Decrement, Restart };
};

export default UseHook;

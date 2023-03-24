import React from "react";
import Child from "./Child";

const Parent = () => {
  return (
    <div>
      <Child message="Hello, world!" author="John Doe" />
    </div>
  );
};

export default Parent;

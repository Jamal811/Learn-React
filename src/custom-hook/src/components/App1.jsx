import React from "react";
import "../components/App.css";
import UseHook from "../Hooks/UseHook";
const App1 = () => {
  const { couunt, Increment, Decrement, Restart } = UseHook();
  return (
    <div className="App">
      <h1>{couunt} </h1>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
      <button onClick={Restart}>Restart</button>
    </div>
  );
};

export default App1;

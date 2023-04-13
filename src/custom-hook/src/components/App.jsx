import "./App.css";
import { useToggle } from "../Hooks/useToggle";
function App() {
  // const [isVisible, toggle] = useToggle();
  // const { state, toggle } = useToggle();
  const { state: isVisible, toggle } = useToggle();
  return (
    <div className="App">
      <button onClick={toggle}>{isVisible ? "Hide" : "Show"}</button>
      <div>{isVisible && <h1>Hidden Text</h1>}</div>
    </div>
  );
}

export default App;

//before custom hook code
// import { useState } from "react";
// function App() {
//   const [isVisible, setIsVisible] = useState(false);
//   return (
//     <div className="App">
//       <button onClick={() => setIsVisible((prev) => !prev)}>
//         {isVisible ? "Hide" : "Show"}
//       </button>
//       {isVisible && <h1>Hidden Text</h1>}
//     </div>
//   );
// }

// export default App;

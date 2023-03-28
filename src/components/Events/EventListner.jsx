import React, { useState } from "react";
import "./Event.css";

const EventListner = () => {
  const color = "#8e44ad";
  const [bg, setBg] = useState(color);
  const [name, setName] = useState("Click Me");
  const bgChange = () => {
    let newBg = "#34495e";
    setBg(newBg);
    setName("OUCHH!! ");
  };
  const bgBack = () => {
    setBg(color);
    setName("heyyy  ");
  };

  return (
    <div style={{ backgroundColor: bg }}>
      <button onClick={bgChange} onDoubleClick={bgBack}>
        {name}
      </button>
    </div>
  );
};

export default EventListner;

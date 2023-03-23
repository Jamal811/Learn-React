import React from "react";
import shah from "../assets/shah.jpg";

const Jsx = () => {
  const shahobj = {
    name: "Jamal shah",
    theme: {
      backgroundColor: "black",
      color: "#8A2BE2",
    },
    fontSize: {
      fontSize: "20px",
    },
  };

  return (
    <div style={shahobj.theme}>
      <h1>{shahobj.name}</h1>
      <img
        style={{ width: 200, height: 200, borderRadius: 100 }}
        src={shah}
        alt="shah"
      />
      <ul style={shahobj.fontSize}>
        <li>frontend</li>
        <li>wed devoloper </li>
        <li>react/nextjs</li>
      </ul>
    </div>
  );
};

export default Jsx;

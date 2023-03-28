import React, { useState } from "react";
import MediaCard from "../MediaCard";
import "./rendering.css";
import { Typography, Button } from "@mui/material";

const ConditionalRendering = () => {
  const [isshown, setIsShown] = useState(false);
  const Toggle = () => {
    setIsShown((isshown) => !isshown);
  };
  return (
    <div className="app">
      <Button variant="contained" onClick={Toggle}>
        Toogle
      </Button>
      {isshown && <MediaCard />}
    </div>
  );
};

export default ConditionalRendering;

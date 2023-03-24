import React, { useState } from "react";
import { Button, Typography, Box } from "@mui/material";

const ClickButton = () => {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="50vh"
    >
      <div className="mt-2">
        <Typography variant="h5">Count: {count}</Typography>
        <Button variant="contained" onClick={handleClick}>
          Increment Count
        </Button>
      </div>
    </Box>
  );
};

export default ClickButton;

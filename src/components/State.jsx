import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";

const State = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <Box>
      <Typography variant="h3">Welcome to my counter app</Typography>
      <Typography variant="h5">The count is: {count}</Typography>
      <Button variant="contained" onClick={decrement}>
        -
      </Button>
      <Button variant="contained" onClick={increment}>
        +
      </Button>
    </Box>
  );
};

export default State;

import React from "react";
import { Box, typography } from "@mui/system";

function Child(props) {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="50vh"
    >
      <typography variant="h5">{props.message}</typography>
      <typography variant="h5">{props.author}</typography>
    </Box>
  );
}
export default Child;

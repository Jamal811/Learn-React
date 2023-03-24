import React from "react";
import { Box, Typography } from "@mui/material";

const ItemDescription = ({ name, description }) => {
  return (
    <Box>
      <Typography variant="h4">{name}</Typography>
      <Typography variant="h5">{description}</Typography>
    </Box>
  );
};

export default ItemDescription;

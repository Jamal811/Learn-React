import React from "react";
import { Box, Typography } from "@mui/material";
import ItemDescription from "./ItemDescription";

const Product = ({ name, description, price }) => {
  return (
    <Box>
      <ItemDescription name={name} description={description} />
      <Typography variant="h6">${price}</Typography>
    </Box>
  );
};

export default Product;

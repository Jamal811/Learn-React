import { Box, Typography } from "@mui/material";
import React from "react";
import "./Jokes.css";
const Jokes = ({ joke }) => {
  const { id, joke: text, rating } = joke;

  // Round the rating to the nearest 0.5
  const roundedRating = Math.round(rating * 2) / 2;

  // Create an array of stars based on the rating
  const stars = Array.from({ length: roundedRating }, (_, index) => (
    <span key={index} role="img" aria-label="star">
      ⭐️
    </span>
  ));

  return (
    <div className="joke-list">
      <Typography variant="h5" color="initial">
        {text}
      </Typography>

      <Typography variant="h5" color="initial">
        Rating: {stars} ({rating})
      </Typography>
    </div>
  );
};
export default Jokes;

import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import shah from "../assets/shah.jpg";

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 345, mt: 2 }}>
      <CardMedia sx={{ height: 300 }} image={shah} title="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Jamal shah
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {" "}
          Final year student of software engineering and a passionate frontend
          web developer
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

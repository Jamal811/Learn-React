import React from "react";
import MediaCard from "./components/MediaCard";
import Navbar from "./components/Navbar";
import { Grid } from "@mui/material";
import Jsx from "./components/Jsx";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Jsx />
      {/* <Grid container spacing={3}>
        <Grid item xs={3}>
          <MediaCard />
        </Grid>
        <Grid item xs={3}>
          <MediaCard />
        </Grid>
        <Grid item xs={3}>
          <MediaCard />
        </Grid>
        <Grid item xs={3}>
          <MediaCard />
        </Grid>
      </Grid> */}
    </div>
  );
}

export default App;

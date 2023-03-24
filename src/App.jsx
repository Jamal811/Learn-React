import React from "react";
import MediaCard from "./components/MediaCard";
import Navbar from "./components/Navbar";
import { Grid } from "@mui/material";
import Jsx from "./components/Jsx";
import ClickButton from "./components/ClickButton";
import Parent from "./components/Parent";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ClickButton />
      <Parent />
      {/* <Jsx /> */}
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

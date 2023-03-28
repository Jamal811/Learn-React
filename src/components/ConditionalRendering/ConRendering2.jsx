import React, { useState } from "react";
import "./rendering.css";
import { Typography, Button } from "@mui/material";

const User = { name: String } | null;
const ConRendering2 = () => {
  const [user, setUser] = useState(User);
  const load = () => setUser({ name: "Jamal" });
  const clear = () => setUser(null);

  return (
    <div className="app">
      <div display="flex" justifyContent="space-between">
        <Button variant="contained" onClick={load} sx={{ marginRight: "1px" }}>
          Load
        </Button>
        <Button variant="contained" onClick={clear}>
          CLear
        </Button>
      </div>
      {user && (
        <Typography variant="body1" color="initial">
          {user.name}
        </Typography>
      )}
    </div>
  );
};

export default ConRendering2;

import React from "react";
import { getAuth, signOut } from "firebase/auth";
import { auth } from "../firebase";
import { Box, Typography, Button, Toolbar, AppBar } from "@mui/material";

export const Home = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Banking
          </Typography>
          <Button
            color="inherit"
            onClick={() => {
              signOut(auth).then(() => {
                window.location.reload();
              });
            }}
          >
            Logout
          </Button>
          <Button color="inherit">History</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

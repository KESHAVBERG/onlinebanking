import React, { useState } from "react";
import { getAuth, signOut } from "firebase/auth";
import { collection, addDoc, setDoc } from "firebase/firestore"; 

import { auth, db } from "../firebase";
import { Box, Typography, Button, Toolbar, AppBar, Stack } from "@mui/material";

import { CssTextField, Btns } from './Login'



export const Home = ({user}) => {
  const [name, setName]= useState("");
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");

  async function addAmount(e){
    e.preventDefault();
    try{
      // const userRef = setDoc(collectio)
      console.log(user.uid)
    }catch(e){
      console.log(e)
    }
  }

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

      <Box sx={{}} display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        height="100vh">
        <Stack spacing={2}>
          <CssTextField label="name" className="inputRounded" onChange={(e)=>{setName(e.target.value)}}/>
          <CssTextField label="email" className="inputRounded" onChange={(e)=>{setEmail(e.target.value)}} />
          <CssTextField label="amount" className="inputRounded" onChange={(e)=>{setAmount(e.target.value)}}/>
          <Btns sx={{backgroundcolor:"blue"}} onClick={addAmount}>Send</Btns>

        </Stack>

      </Box>
    </Box>
  );
};

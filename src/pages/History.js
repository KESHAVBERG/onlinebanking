import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { doc, getDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase';

export const History = () => {
  const [currentUser, setCurrentUser] = useState("");
  const user = auth.currentUser;

  console.log(user)
  if (user !== null) {
    const uid = user.uid;
    console.log(uid)
    setCurrentUser(uid)
  }
  
  return (
    <Box 
    display="flex"
    justifyContent="center"
    alignItems="center"
    minHeight="100vh"
    height="100vh">

            <Typography style={{fontWeight:"bold"}}>Your Transaction History</Typography>
    </Box>
  )
}

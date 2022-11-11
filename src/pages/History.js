import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { doc, getDoc, collection, useC } from "firebase/firestore";
import { getAuth} from "firebase/auth";
import { auth, db } from '../firebase';
import { async } from '@firebase/util';

export const History = ({user}) => {
  const [currentUser, setCurrentUser] = useState(null)

  
async function getData(){
 

}

  useEffect(() =>{
    if(user!=null){
      setCurrentUser(user)
    }},[user])   



  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      height="100vh">

      <Typography style={{ fontWeight: "bold" }}>Your Transaction History</Typography>
    </Box>
  )
}

import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { doc, getDoc, collection } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth, db } from '../firebase';

export const History = () => {
  const user = auth.currentUser;


  async function getData() {
    if (user !== null) {
      const uid = user.uid;
      const docRef = collection(db, "users", uid, "amount")
      const docSnap = await getDoc(docRef)
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    }
  }

  useEffect(() => {
    getData()
  }, [])

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

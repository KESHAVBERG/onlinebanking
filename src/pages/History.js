import {
  Box,
  Typography,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { doc, getDocs, collection, QuerySnapshot } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { auth, db } from "../firebase";
import { async } from "@firebase/util";

export const History = ({ user }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (user != null) {
      setCurrentUser(user);
      getData();
    }
  }, [user]);

  async function getData() {
    console.log(user.uid);
    const docSnap = await getDocs(
      collection(db, "users", user.uid, "amount")
    ).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({ ...doc.data() }));
      setData(newData);
      console.log(data);
    });
  }
  console.log(data);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      height="100vh"
    >
      <Stack>
        <Typography style={{ fontWeight: "bold" }}>
          Your Transaction History
        </Typography>
        {/* <table>
      <tr>  
                <th>Name</th>  
                <th>Email</th>
                <th>amount</th>  
            </tr>
            {
              data?.map((e,i)=>(
                <tr data-index={i}>  
                <td>{e.name}</td>  
                <td>{e.email}</td>  
                <td>{e.amount}</td>  
              </tr>
              ))

            }  
      </table> */}
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left">Name</TableCell>
                <TableCell align="left">email</TableCell>
                <TableCell align="left">amount</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                data?.map((e,i)=>{
                 return (
                    <TableRow key={i}>
                      <TableCell align="left">{e.name}</TableCell>
                      <TableCell align="left">{e.email}</TableCell>
                      <TableCell align="left">{e.amount}</TableCell>

                    </TableRow>
                 )
                })
              }
            </TableBody>
          </Table>
        </TableContainer>
      </Stack>
    </Box>
  );
};

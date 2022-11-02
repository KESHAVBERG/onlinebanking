import React, {useState} from "react";
import '../css/formfiled.css'
import { Box, Typography, TextField, Stack, Button } from "@mui/material";
import { styled } from '@mui/material/styles';
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export const CssTextField = styled(TextField)({
  width: '300px',
  '& label.Mui-focused': {
    color: 'green',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'green',
  },
  '& .MuiOutlinedInput-root': {
    // '& fieldset': {
    //   borderColor: 'white',
    // },
    '&:hover fieldset': {
      borderColor: 'yellow',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'green',
    },
  },
});

export const Btns = styled(Button)({
  fontSize: 16,
  padding: '6px 12px',
  border: '1px solid',
  borderRadius: '30px',
  lineHeight: 1.5,
  backgroundColor: '#89CFF0',
  borderColor: '#89CFF0',
  color: "white",
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#89CFF0',
    borderColor: '#005cbf',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
  },
});
export const Login = () => {
  const [emailRef, setEmailRef] = useState('');
  const [passwordRef, setPasswordRef] = useState('');
  const [error, setError] = useState('');

  async function login(e) {
    e.preventDefault();
    console.log(emailRef);
    await signInWithEmailAndPassword(auth, emailRef, passwordRef).then(user => {
        console.log(user);
    }).catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
        console.log(errorMessage)
    });
}

  return (
    <Box
      sx={{ background: "linear-gradient(to right bottom, #36EAEF, #6B0AC9)" }}
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      height="100vh"
    >
      <Stack spacing={1}>
        <Typography sx={{ color: "white", alignItems: "center", pl: { lg: "30px", md: "20px", xs: "10px" } }} fontSize="30px" fontWeight="bold">
          Online banking
        </Typography>
        <CssTextField label="email" className="inputRounded" onChange={(e) => { setEmailRef(e.target.value) }}  id="custom-css-outlined-input" />

        <CssTextField label="password" className="inputRounded" onChange={(e) => { setPasswordRef(e.target.value) }}  id="custom-css-outlined-input" />

        <Btns onClick={login}> Login </Btns>

        <Link to="/register" style={{ display: 'contents' }}>
          <Btns sx={{ mt: "7px" }} > Register </Btns>
        </Link>

        <p>{error.replace("Firebase:","")}</p>

      </Stack>
    </Box>
  );
};

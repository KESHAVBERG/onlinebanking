import React, { useRef, useState } from 'react'
import '../css/formfiled.css'
import { Box, Typography, TextField, Stack, Button } from "@mui/material";
import { styled } from '@mui/material/styles';
import { Link, useNavigate } from "react-router-dom";
import { CssTextField, Btns } from './Login'

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';

export const Register = () => {

    const [emailRef, setEmailRef] = useState('');
    const [passwordRef, setPasswordRef] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const navigateToLogin= () => {
      // 👇️ navigate to /contacts
      navigate('/');
    };

    async function registerUser(e) {
        e.preventDefault();
        console.log(emailRef);
        await createUserWithEmailAndPassword(auth, emailRef, passwordRef).then(user => {
            console.log(user);
            navigateToLogin();
        }).catch((error) => {
            const errorCode = error.code;
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
                <CssTextField onChange={(e) => { setEmailRef(e.target.value) }} label="email" className="inputRounded" id="custom-css-outlined-input" />

                <CssTextField onChange={(e) => { setPasswordRef(e.target.value) }} label="password" className="inputRounded" id="custom-css-outlined-input" type="password" />

                <Btns onClick={registerUser}> Register </Btns>

                <Link to="/" style={{ display: 'contents' }}>
                    <Btns sx={{ mt: "7px" }} > Login </Btns>
                </Link>
                <p>{error.replace("Firebase:","")}</p>
            </Stack>
        </Box>)
}

import React from "react";
import '../css/formfiled.css'
import { Box, Typography, TextField, Stack, FormControl } from "@mui/material";
import {styled } from '@mui/material/styles';

const CssTextField = styled(TextField)({
  width:'300px',
  '& label.Mui-focused': {
    color: 'green',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'green',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'white',
    },
    '&:hover fieldset': {
      borderColor: 'yellow',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'green',
    },
  },
});


export const Login = () => {

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
        <Typography sx={{ color: "white", alignItems:"center", pl:{lg:"30px", md:"20px", xs:"10px"} }} fontSize="30px" fontWeight="bold">
          Online banking
        </Typography>
        <CssTextField label="email" className="inputRounded" id="custom-css-outlined-input" />

        <CssTextField label="password" className="inputRounded" id="custom-css-outlined-input" />
      </Stack>
    </Box>
  );
};

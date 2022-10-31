import React from "react";

import { Box, Typography } from "@mui/material";

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
      <Typography sx={{color:"white"}} fontSize="30px" fontWeight="bold">Online banking</Typography>
    </Box>
  );
};

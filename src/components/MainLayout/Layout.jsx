import React from "react";
import { Box } from "@mui/material";
import Header from "./Header/Header";


const Layout = ({ children }) => {
  return (
    <Box sx={{ width: "100%" }}>
      <Header />
      {children}
      
    </Box>
  );
};

export default Layout;
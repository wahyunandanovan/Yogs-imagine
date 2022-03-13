import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Navbar from "../screens/Home/Navbar";
import Footer from "../screens/Home/Footer";

export default function ContainerHome({ children, ...props }) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Box>
        <Navbar />
        <Box {...props}>{children}</Box>
        <Footer />
      </Box>
    </React.Fragment>
  );
}

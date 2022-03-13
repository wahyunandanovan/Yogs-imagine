import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Navbar from "../screens/Home/Navbar";
import Footer from "../screens/Home/Footer";
import ScrollTop from "./ScrollTop";
import KeyboardArrowUp from "@mui/icons-material/KeyboardArrowUp";
import { Fab } from "@mui/material";
import { Link } from "react-scroll";

export default function ContainerHome({ children, ...props }) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Box>
        <Navbar />
        <Box {...props}>{children}</Box>
        <Footer />
        <ScrollTop>
          <Link to="home" smooth="true" duration="1200">
            <Fab color="primary" size="small" aria-label="scroll back to top">
              <KeyboardArrowUp />
            </Fab>
          </Link>
        </ScrollTop>
      </Box>
    </React.Fragment>
  );
}

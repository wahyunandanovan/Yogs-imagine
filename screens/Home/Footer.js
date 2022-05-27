import React from "react";
import PropTypes from "prop-types";
import { Typography, Box, Divider } from "@mui/material";
import ContainerSection from "../../Components/ContainerSection";

function Footer(props) {
  return (
    <Box mt="160px" px={3}>
      <Divider fontWeight="bold">Yogs Imagine</Divider>
      <Box pt={3} pb={3} textAlign="center">
        <Typography color="gray" fontSize="10px">
          Copyright-2022
        </Typography>
      </Box>
    </Box>
  );
}

Footer.propTypes = {};

export default Footer;

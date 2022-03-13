import React from "react";
import PropTypes from "prop-types";
import { Typography, Box, Divider } from "@mui/material";
import ContainerSection from "../../Components/ContainerSection";

function Footer(props) {
  return (
    <ContainerSection>
      <Box px={3}>
        <Divider fontWeight="bold">Yogs Imagine</Divider>
        <Box pt={3} height="80px" textAlign="center">
          <Typography color="gray" fontSize="10px">
            Copyright-2022
          </Typography>
        </Box>
      </Box>
    </ContainerSection>
  );
}

Footer.propTypes = {};

export default Footer;

import { Container, Typography, Box, Button } from "@mui/material";
import React from "react";
import { ArrowRight } from "@mui/icons-material";

function Hero(props) {
  return (
    <Box
      id="home"
      sx={{
        backgroundImage: 'url("/bg.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
        marginTop: "50px",
      }}
    >
      <Box
        sx={{
          backgroundImage:
            "linear-gradient(87.28deg, #5c5c5c -5.88%, #dddddd 61.06%, #ffffff 105.21%)",
          opacity: "0.66",
          position: "absolute",
          mixBlendMode: "multiply",
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      ></Box>

      <Container>
        <Box
          py={16}
          zIndex={1}
          sx={{
            textAlign: {
              sm: "left",
              xs: "center",
              md: "left",
              lg: "left",
              xl: "left",
            },
          }}
          position="relative"
        >
          <Typography
            color="white"
            sx={{
              fontSize: {
                sm: "40px",
                xs: "20px",
                md: "58px",
                lg: "58px",
                xl: "20px",
              },
            }}
            fontWeight="bold"
            maxWidth="650px"
          >
            Yogs Imagine
          </Typography>
          <Typography
            color="white"
            sx={{
              fontSize: {
                sm: "30px",
                xs: "10px",
                md: "38px",
                lg: "38px",
                xl: "20px",
              },
            }}
            fontWeight="bold"
          >
            Photograph
          </Typography>
          <Box mt={4}>
            <Box href="/signin">
              <Button
                href="https://api.whatsapp.com/send?phone=6285975240034"
                sx={{ backgroundColor: "#1976d2", color: "white" }}
                size="large"
              >
                Hubungi saya <ArrowRight ml={1} />
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Hero;

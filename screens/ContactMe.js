import * as React from "react";
import ContainerSection from "../Components/ContainerSection";
import Typography from "@mui/material/Typography";
import { SocialIcon } from "react-social-icons";
import { Container, Grid, Avatar } from "@mui/material";
import { Box } from "@mui/system";

export default function About() {
  return (
    <ContainerSection title={"Hubungi saya"}>
      <Grid
        id="about"
        container
        sx={{ display: { md: "flex", xs: "grid", alignItems: "center" } }}
      >
        <Grid item md={6}>
          <Box>
            <Typography variant="h6" fontWeight="semi-bold">
              Alamat :
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Dusun Sugihwaras,RT 009 RW 001,Desa Dabadan,Kecamatan
              Patianrowo,Kab Nganjuk,Provinsi Jawa Timur.
            </Typography>
            <Typography mt={1} variant="h6" fontWeight="semi-bold">
              Nomor Handphone :
            </Typography>
            <Typography variant="body2" color="text.secondary">
              085975240034
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          md={6}
          display="block"
          justifyContent="center"
          margin="auto"
          sx={{ paddingTop: { xs: "25px", md: "0px" } }}
        >
          <Box>
            <Typography variant="h6" fontWeight="semi-bold">
              Media Sosial :
            </Typography>
          </Box>
          <Box display="flex" gap="5px">
            <Box>
              <SocialIcon url="https://facebook.com/jaketrent" />
            </Box>
            <Box>
              <SocialIcon url="https://instagram.com/yogs.imagine/" />
            </Box>
            <Box>
              <SocialIcon url="https://api.whatsapp.com/send?phone=6285975240034" />
            </Box>
            <Box>
              <SocialIcon url="https://mail.google.com/mail/u/0/#inbox" />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ContainerSection>
  );
}

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
        id="contact-me"
        container
        sx={{ display: { md: "flex", xs: "grid" } }}
      >
        <Grid
          item
          md={6}
          xs={12}
          display="block"
          sx={{ paddingTop: { xs: "25px", md: "0px" } }}
        >
          <Box>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.1947184946424!2d112.0720536262114!3d-7.56238477196913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e784794d6bbb4c1%3A0xd30aa6ae881491e6!2sNasi%20Tumpang%20Pecel%20Bu%20Khoiriyah!5e0!3m2!1sid!2sid!4v1647661682452!5m2!1sid!2sid"
              height="450"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </Box>
        </Grid>
        <Grid item md={6}>
          <Box>
            <Typography variant="h6" fontWeight="semi-bold">
              Media Sosial :
            </Typography>
          </Box>
          <Box mt={1} display="flex" gap="5px">
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
          <Box mt={2}>
            <Typography variant="h6" fontWeight="semi-bold">
              Alamat :
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Dusun Sugihwaras,RT 018 RW 005,Desa Babadan,Kecamatan
              Patianrowo,Kab Nganjuk,Provinsi Jawa Timur.
            </Typography>
            <Typography mt={2} variant="h6" fontWeight="semi-bold">
              Nomor Handphone :
            </Typography>
            <Typography variant="body2" color="text.secondary">
              085975240034
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </ContainerSection>
  );
}

import * as React from "react";
import ContainerSection from "../../Components/ContainerSection";
import Typography from "@mui/material/Typography";
import { Container, Grid, Avatar } from "@mui/material";
import { Box } from "@mui/system";

export default function About() {
  return (
    <ContainerSection title={"Tentang saya"}>
      <Grid
        id="about"
        container
        sx={{ display: { md: "flex", xs: "grid", alignItems: "center" } }}
      >
        <Grid item md={6}>
          <Box>
            <Typography variant="body2" color="text.secondary">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          md={6}
          display="flex"
          justifyContent="center"
          margin="auto"
          sx={{ paddingTop: { xs: "25px", md: "0px" } }}
        >
          <Avatar
            alt="Remy Sharp"
            src="/ogik.jpg"
            sx={{ width: 200, height: 200 }}
          />
        </Grid>
      </Grid>
    </ContainerSection>
  );
}

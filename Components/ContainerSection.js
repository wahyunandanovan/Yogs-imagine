import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";

export default function ContainerSection({ children, title, ...props }) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container sx={{ margin: "auto", padding: "80px 25px" }}>
        <Box>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            fontWeight="bold"
          >
            {title}
          </Typography>
        </Box>
        <Box {...props}>{children}</Box>
      </Container>
    </React.Fragment>
  );
}

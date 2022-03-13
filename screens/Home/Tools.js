import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import ContainerSection from "../../Components/ContainerSection";

const slideImages = [
  {
    url: "cam1.jpg",
    caption: "Canon Eos 1",
  },
  {
    url: "cam2.jpg",
    caption: "Canon Eos 2",
  },
  {
    url: "cam3.jpg",
    caption: "Canon Eos 3",
  },
];

function Tools(props) {
  return (
    <ContainerSection title="Tools">
      <Box id="tools" className="slide-container">
        <Slide>
          {slideImages.map((slideImage, index) => (
            <Box className="each-slide" key={index}>
              <Box
                height="500px"
                style={{
                  backgroundImage: `url(${slideImage.url})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              >
                <Typography color="white">{slideImage.caption}</Typography>
              </Box>
            </Box>
          ))}
        </Slide>
      </Box>
    </ContainerSection>
  );
}

export default Tools;

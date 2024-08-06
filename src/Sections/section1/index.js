import React, { useState } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import image from "../../assets/delivery.jpg";
import { theme } from "../../theme";
import Form from "./Form";

const StyledButton = styled(Button)(
  ({ theme, forcolor, backcolor, screenWidth }) => ({
    width: "max-content",
    margin:
      screenWidth > 1090 ? "15px auto !important" : "30px auto !important",
    borderRadius: "20px",
    backgroundColor: forcolor,
    "&:hover": {
      backgroundColor: backcolor,
    },
  })
);

const Section1 = ({ screenWidth }) => {
  const [open, setOpen] = useState(false);
  return (
    <Box bgcolor="white">
      <Stack
        direction="row"
        sx={{
          maxWidth: theme.width.container,
          margin: "auto",
        }}
        p={screenWidth > 620 ? 4 : 1}
        alignItems="center"
        justifyContent="center"
        flexWrap="wrap-reverse"
      >
        {/* Text */}
        <Stack
          spacing={screenWidth > 620 ? 2 : 1}
          sx={{
            width: screenWidth > 1090 ? "52%" : "85vw",
            color: theme.colors.text,
          }}
        >
          <Typography variant={screenWidth > 620 ? "h4" : "h6"}>
            For all your Gadgets
          </Typography>
          <Typography
            variant={screenWidth > 620 ? "h2" : "h4"}
            sx={{ fontWeight: "600" }}
          >
            Tech guardians
          </Typography>
          <Typography variant={screenWidth > 620 ? "h6" : "subtitle2"}>
            Home services can be booked through our platform using an
            easy-to-use website or call and it only takes a few seconds.
          </Typography>
          <StyledButton
            variant="contained"
            forcolor={theme.colors.blue}
            backcolor={theme.colors.blueHover}
            screenWidth={screenWidth}
            onClick={() => setOpen(true)}
          >
            Book Appointment
          </StyledButton>
          <Typography
            variant="overline"
            sx={{
              width: "max-content",
              margin: "auto !important",
              fontWeight: screenWidth > 620 ? "600" : "700",
            }}
          >
            No Hidden Charges. No Visiting Fee.
          </Typography>
        </Stack>
        {/* Image */}
        <img
          src={image}
          alt="handler"
          style={{
            width: screenWidth > 1090 ? "450px" : "70vw",
            margin: "20px",
          }}
        />
      </Stack>
      {/* Form for boooking appointment */}
      <Form open={open} setOpen={setOpen} screenWidth={screenWidth} />
    </Box>
  );
};

export default Section1;

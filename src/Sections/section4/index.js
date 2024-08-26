import { Box, Button, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";
import { theme } from "../../theme";
import { PhoneCall } from "phosphor-react";

const StyledButton = styled(Button)(({ theme, forcolor, backcolor }) => ({
  width: "max-content",
  margin: "auto",
  borderRadius: "20px",
  backgroundColor: forcolor,
  "&:hover": {
    backgroundColor: backcolor,
  },
}));

const Section4 = ({ screenWidth }) => {
  return (
    <Box bgcolor={theme.colors.blue} p={screenWidth > 850 ? 3 : 1}>
      <Stack
        sx={{
          maxWidth: theme.width.container,
          margin: "auto",
        }}
        p={screenWidth > 850 ? 5 : 2}
        spacing={5}
        alignItems="center"
      >
        {/* heading */}
        <Stack alignItems="center" spacing={2}>
          <Typography
            variant={screenWidth > 850 ? "h3" : "h4"}
            sx={{ fontWeight: "500", textAlign: "center" }}
            color="white"
          >
            Not certain what's causing the trouble?
          </Typography>
          <Typography
            variant={screenWidth > 850 ? "h6" : "body1"}
            sx={{ fontWeight: "500", textAlign: "center" }}
            color="white"
          >
            Reach out to our support staff to explain your issue or
            requirements.
          </Typography>
        </Stack>
        {/* Call now */}
        <StyledButton
          variant="contained"
          startIcon={<PhoneCall />}
          forcolor={theme.colors.reddish}
          backcolor={theme.colors.strawberryRed}
        >
          <a href="tel:+918586885226">Call Now</a>
        </StyledButton>
      </Stack>
    </Box>
  );
};

export default Section4;

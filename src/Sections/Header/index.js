import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { theme } from "../../theme";
import logo from "../../assets/logowebp.webp";
import { PhoneCall } from "phosphor-react";

const Header = ({ screenWidth }) => {
  return (
    <Box bgcolor="white">
      <Stack
        direction="row"
        sx={{ maxWidth: theme.width.container, margin: "auto" }}
        p={screenWidth > 600 ? 3 : 1.8}
        justifyContent="space-between"
        alignItems="center"
      >
        {/* Logo */}
        <Stack alignItems="center" justifyContent="center" spacing={1}>
          <img
            src={logo}
            alt="logo"
            style={{
              width: screenWidth > 800 ? "250px" : "28vw",
            }}
          />
          <Typography
            variant="overline"
            sx={{
              color: theme.colors.blueHover,
              fontWeight: "600",
              fontSize: screenWidth > 800 ? "12px" : "1.4vw",
            }}
          >
            Gadgets & Technology Cares
          </Typography>
        </Stack>
        {/* phone number */}
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          spacing={1}
          sx={{
            color: theme.colors.blue,
            height: "max-content",
            cursor: "pointer",
            transition: "80ms all ease-in-out",
            "&:hover": {
              color: theme.colors.blueHover,
            },
          }}
        >
          <PhoneCall size={screenWidth > 800 ? 32 : "7vw"} weight="duotone" />
          <Typography
            variant="h5"
            sx={{
              fontWeight: "600",
              fontSize: screenWidth > 600 ? "20px" : "4vw",
            }}
          >
            <a href="tel:+918586885226">+91 85868 85226</a>
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Header;

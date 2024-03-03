import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { theme } from "../../theme";

const Footer = ({screenWidth}) => {
  return (
    <Box bgcolor="#333">
      <Stack
        sx={{
          maxWidth: theme.width.container,
          margin: "auto",
          textAlign: "center",
          color: "whiteSmoke",
        }}
        p={screenWidth > 625 ? 3 : 2}
        alignItems="center"
        justifyContent="center"
      >
        {/* credits */}
        <Typography variant="subtitle2" width={screenWidth > 625 ? 600 : "90%"}>
          © Copyright 2024 Laptop controller | All Rights Reserved by Prateek Sharma
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;

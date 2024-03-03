import React from "react";
import { theme } from "../../theme";
import { Box, Grid, Stack, Typography } from "@mui/material";
import { bestAt } from "../../data";

const Section3 = ({ screenWidth }) => {
  return (
    <Box bgcolor="whiteSmoke" p={screenWidth > 570 ? 3 : 2}>
      <Stack
        sx={{
          maxWidth: theme.width.container,
          margin: "auto",
        }}
        p={screenWidth > 570 ? 4 : 1}
        spacing={4}
        direction={screenWidth > 1024 ? "row" : "column"}
        alignItems="center"
        justifyContent="space-between"
      >
        {/* heading */}
        <Typography
          variant={screenWidth > 570 ? "h3" : "h4"}
          sx={{
            fontWeight: "700",
            textAlign: screenWidth > 570 ? "left" : "center",
          }}
        >
          We are best at Laptop home Service!
        </Typography>
        {/* bestAt */}
        <Grid container>
          {bestAt.map((el) => {
            return (
              <Grid
                item
                xs={screenWidth > 490 ? 5.78 : 12}
                p={2}
                m={0.5}
                key={el.key}
                sx={{
                  backgroundColor:
                    el.colored || screenWidth < 490
                      ? theme.colors.blueHover
                      : "none",
                  borderRadius: "15px",
                  color:
                    el.colored || screenWidth < 490
                      ? "white"
                      : theme.colors.text,
                }}
              >
                <Typography
                  variant="body1"
                  sx={{ fontWeight: "700", marginBottom: "10px" }}
                >
                  {el.heading}
                </Typography>
                <Typography variant="subtitle2">{el.details}</Typography>
              </Grid>
            );
          })}
        </Grid>
      </Stack>
    </Box>
  );
};

export default Section3;

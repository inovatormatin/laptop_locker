import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { specialCard } from "../../data";
import { theme } from "../../theme";

const Section7 = ({screenWidth}) => {
  return (
    <Box bgcolor="whiteSmoke" p={screenWidth > 1140 ? 3 : 1}>
      <Stack
        sx={{
          maxWidth: theme.width.container,
          margin: "auto",
        }}
        p={screenWidth > 1140 ? 4 : 0}
        spacing={4}
        direction="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-evenly"
          sx={{ width: "100%" }}
          flexWrap='wrap'
        >
          {specialCard.map((el) => {
            return (
              <Stack
                key={el.index}
                sx={{
                  backgroundColor: el.bgColor,
                  color: el.color,
                  borderRadius: "10px",
                  height: screenWidth > 405 ? "130px" : "100%",
                  width: screenWidth > 405 ? "136px" : "100%",
                  margin: screenWidth > 1140 ? "10px" : "5px"
                }}
                p={3}
                spacing={2}
                justifyContent='space-between'
                alignItems={screenWidth > 405 ? "left" : "center"}
                direction={screenWidth > 405 ? "column" : "row"}
              >
                {el.icon}
                <Stack sx={{textAlign: screenWidth > 405 ? "left" : "right"}}>
                  <Typography variant="h4" sx={{fontWeight: "700"}}>{el.count}</Typography>
                  <Typography variant="body2" sx={{fontWeight: "600"}}>{el.title}</Typography>
                </Stack>
              </Stack>
            );
          })}
        </Stack>
      </Stack>
    </Box>
  );
};

export default Section7;

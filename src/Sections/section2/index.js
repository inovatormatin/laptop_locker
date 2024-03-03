import React, { useEffect, useState } from "react";
import { theme } from "../../theme";
import { Box, Grid, Stack, Typography } from "@mui/material";
import { list } from "../../data";

const Card = ({ title, icon, img, sz, screenWidth }) => {
  return (
    <Grid item xs={sz}>
      <Stack
        justifyContent="center"
        alignItems="center"
        p={screenWidth > 690 ? 3 :2}
        m={0.8}
        spacing={screenWidth > 690 ? 3 : 1}
        sx={{
          backgroundColor: "#f6f6f6",
          borderRadius: screenWidth > 690 ? "15px" : "10px",
          width: screenWidth > 690 ? "80%" : "75%",
          height: screenWidth > 690 ? "200px" : "100px" ,
        }}
      >
        {/* {icon} */}
        <img src={img} alt={title} style={{
          width: "50%",
          aspectRatio: "3/2",
          objectFit: "contain",
        }}/>
        <Typography
          variant= {screenWidth > 690 ? "h6" : "body1"}
          sx={{ textAlign: "center", fontWeight: "600" }}
        >
          {title}
        </Typography>
      </Stack>
    </Grid>
  );
};

const Section2 = ({screenWidth}) => {
  const [gridSize, setGridSize] = useState(4);
  useEffect(()=>{
    if(screenWidth > 960){
      setGridSize(4)
    }
    if(screenWidth < 960){
      setGridSize(6)
    }
    if(screenWidth < 690){
      setGridSize(6)
    }
  },[screenWidth])
  return (
    <Box bgcolor={theme.colors.blue} p={screenWidth > 690 ? 3 : 1}>
      <Stack
        sx={{
          maxWidth: theme.width.container,
          margin: "auto",
        }}
        p={screenWidth > 690 ? 5 : 1}
        spacing={5}
        alignItems="center"
        justifyContent="space-between"
      >
        <Stack alignItems="center" spacing={1.5}>
          {/* heading */}
          <Typography variant={screenWidth > 880 ? "h3" : "h4"} sx={{textAlign: "center"}} color="white">
            We bring the best services to you.
          </Typography>
          <Typography variant={screenWidth > 880 ? "h6" : "body1"} sx={{textAlign: "center"}} color="white">
            Best Doorstep Pick & Drop Facility With Top-notch Quality Services.
          </Typography>
        </Stack>
        <Grid container>
          {/* cards */}
          {list.map((el) => {
            return (
              <Card
                key={el.index}
                title={el.title}
                icon={el.icon}
                img={el.img}
                sz={gridSize}
                screenWidth={screenWidth}
              />
            );
          })}
        </Grid>
      </Stack>
    </Box>
  );
};

export default Section2;

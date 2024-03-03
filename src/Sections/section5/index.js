import React from 'react'
import { Avatar, Box, Grid, Stack, Typography } from '@mui/material'
import { theme } from '../../theme'
import { reviews } from '../../data'


const Section5 = ({screenWidth}) => {
  return (
    <Box bgcolor={theme.colors.grey} p={3}>
      <Stack
        sx={{
          maxWidth: theme.width.container,
          margin: "auto",
        }}
        p={screenWidth > 590 ? 4 : 0}
        spacing={screenWidth > 590 ? 5 : 2}
        alignItems='center'
        justifyContent='space-between'
      >
        {/* heading */}
        <Typography variant={screenWidth > 860 ? 'h3' : 'h4'} sx={{ fontWeight: "500", textAlign: 'center' }}>Read what our clients say.</Typography>
        {/* reviews */}
        <Grid container>
          {reviews.map(el => {
            return (
              <Grid
                item
                xs={screenWidth > 1000 ? 5.78 : 12}
                p={2}
                m={1}
                key={el.key}
                sx={{
                  backgroundColor: "whiteSmoke",
                  borderRadius: "15px",
                  fontWeight: "500"
                }}
              >
                <Stack direction='row' alignItems='center' spacing={2} sx={{ marginBottom: "13px" }}>
                  <Avatar />
                  <Typography variant='h6' sx={{  fontWeight: "600"}}>{el.by}</Typography>
                </Stack>
                <Typography variant='body1'>{el.comment}</Typography>
              </Grid>
            );
          })}
        </Grid>
      </Stack>
    </Box>
  )
}

export default Section5
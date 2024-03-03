import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { theme } from '../../theme'
import { PhoneCall } from 'phosphor-react'

const Section6 = ({screenWidth}) => {
  return (
    <Box bgcolor={theme.colors.blueHover} p={screenWidth > 370 ? 3 : 1}>
      <Stack
        sx={{
          maxWidth: theme.width.container,
          margin: "auto",
        }}
        p={screenWidth > 690 ? 5 : 2}
        spacing={2}
        alignItems='center'
        justifyContent='space-between'
      >
        {/* heading */}
        <Typography variant='h4' color='white' sx={{fontWeight: "700", textAlign: 'center'}}>Schedule A Free Home Visit</Typography>
        <Typography variant='body1' color='white' sx={{fontWeight: "500", width: screenWidth > 590 ? "550px" : "90%", textAlign: "center"}}>Just gives us a call, confirm your appointment and our executive will be at your door withing 2 hours</Typography>
        {/* Call now */}
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          spacing={1}
          sx={{
            color: "white",
            height: "max-content",
            cursor: "pointer",
            transition: "80ms all ease-in-out",
            "&:hover": {
              color: "whitesmoke",
            },
          }}
        >
          <PhoneCall size={22} weight="duotone"/>
          <Typography variant="h6" sx={{ fontWeight: "500" }}>
            +91 98980 12345
          </Typography>
        </Stack>
      </Stack>
    </Box>
  )
}

export default Section6
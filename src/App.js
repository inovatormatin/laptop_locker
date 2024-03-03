import React from 'react'
import { Header, Section1, Section2, Section3, Section4, Section5, Section6, Footer, Section7 } from "./Sections"
import { Stack } from '@mui/material'
import { useScreenWidth } from './context/useScreenWidth'

const App = () => {
  const screenWidth = useScreenWidth()
  return (
    <Stack sx={{backgroundColor: "whiteSmoke"}}>
      {/* Header */}
      <Header screenWidth={screenWidth}/>
      {/* section 1 - For all your Gadgets */}
      <Section1 screenWidth={screenWidth}/>
      {/* section 2 - We bring the best services to You */}
      <Section2 screenWidth={screenWidth}/>
      {/* section 3 - We are best at Laptop home Service! */}
      <Section3 screenWidth={screenWidth}/>
      {/* section 7 - We are best at Laptop home Service! */}
      <Section7 screenWidth={screenWidth}/>
      {/* section 4 - Don’t know whats the problem? */}
      <Section4 screenWidth={screenWidth}/>
      {/* section 5 - Read what our clients say */}
      <Section5 screenWidth={screenWidth}/>
      {/* section 6 - Schedule A Free Home Visit */}
      <Section6 screenWidth={screenWidth}/>
      {/* Footer */}
      <Footer screenWidth={screenWidth}/>
    </Stack>
  )
}

export default App
import React from 'react'

import Slideshow from './Slideshow'
import { Box, Container, Typography } from '@mui/material'
import italy from './Images/Italy.jpg'
import maldives from './Images/Maldives.jpg'
import tajMahal from './Images/TajMahal.jpg'
import dubai from './Images/Dhubai.jpg'
import england from './Images/England.jpg'
import goldenTemple from './Images/GoldenTemple.jpg'
import paris from './Images/Paris.jpg'
import russia from './Images/Russia.jpg'
const App = () => {

  const images = [
    tajMahal,
    italy,
    maldives,
    dubai,
    england,
    paris,
    russia,
    goldenTemple
  ]

  return (
    <Container maxWidth={false} sx={{display:'flex',flexWrap:'wrap'}}>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600&display=swap');
      </style>
      <Box height='100%' sx={{
        display: 'flex',
        justifyContent: 'space-evenly',
        paddingTop: '3%',
        flexWrap: { xs: 'wrap-reverse', md: 'nowrap' }
      }}>

        <Slideshow images={images} />
      </Box>
     
    </Container>

  )
}

export default App
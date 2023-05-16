import React from 'react'
import { Box, styled, Typography } from '@mui/material'
import bedroomsIcon from "../media/bedroomsIcon.png";
import bathroomsIcon from "../media/bathroomsIcon.png";
import spaceIcon from "../media/spaceIcon.png";

const House = ({img, price, address, bedrooms, bathrooms, space }) => {
  const HouseBox = styled(Box)(({ theme }) => ({
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
    maxWidth: '350px',
    backgroundColor: '#fff',
    margin: theme.spacing(2, 0, 2, 0),
    [theme.breakpoints.down('md')]:{
      margin:theme.spacing(2,0,2,0),
    },
    [theme.breakpoints.down('sm')]:{
      maxWidth: '300px',
    },
  }))
  const InfoBox = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  }))

  return (
    <HouseBox>
      <img src={img} alt="" style={{maxWidth:'100%'}}/>
      <Box sx={{padding:'1rem'}}>
        <Typography variant='body2' sx={{ fontWeight: '700' }}>${price}</Typography>
        <Typography variant='body2' sx={{ my: 2 }}>{address}</Typography>
        <Box sx={{ display:'flex', alignItems:'center', justifyContent:'space-between'}}>
          <InfoBox>
            <img src={bedroomsIcon} alt="" />
            <Typography variant='body2' sx={{mt:1}}>{bedrooms}</Typography>
          </InfoBox>
          <InfoBox>
            <img src={bathroomsIcon} alt="" />
            <Typography variant='body2' sx={{mt:1}}>{bathrooms}</Typography>
          </InfoBox>
          <InfoBox>
            <img src={spaceIcon} alt="" />
            <Typography variant='body2' sx={{mt:1}}>{space}</Typography>
          </InfoBox>
        </Box>
      </Box>
    </HouseBox>
  )
}

export default House

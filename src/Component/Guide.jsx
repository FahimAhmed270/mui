import React from 'react'
import { Box, Typography, styled } from '@mui/material'
import buyIcon from "../media/buy_icon.png";
import sellIcon from "../media/sell_icon.png";
import rentIcon from "../media/rent_icon.png";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import CustomButton from './CustomButton';

const Guide = () => {
    const CustomBox = styled(Box)(({theme}) => ({
        width: '50%',
        [theme.breakpoints.down('md')]:{
            width: '80%',
        },
    }))

    const GuidesBox = styled(Box)(({theme}) => ({
        width: '70%',
        display:'flex',
        gap:'20px',
        justifyContent:'space-around',
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(5),
        [theme.breakpoints.down('md')]:{
            gap:'0px',
            width: '100%',
        },
        [theme.breakpoints.down('sm')]:{
            flexDirection: 'column',
            width: '100%',
            gap:'0px',
        }
    }))

    const GuideBox = styled(Box)(({theme}) => ({
        display:'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: theme.spacing(5),

    }))
    
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            <div style={{ width: '5%', height: '5px', backgroundColor: '#000339', margin: '0 auto' }}></div>
            <Typography variant='h3' sx={{ fontSize: '35px', fontWeight: 'bold', color: '#000339', my: 3 }}>How it works?</Typography>
            <CustomBox variant='body2' sx={{
                fontSize:'16px', fontWeight:'500', color: '#5A6473', textAlign: 'center'
            }}>
                Everything you need to know when you want to buy, rent or sell - All
                in one place
            </CustomBox>
            <GuidesBox>
                <GuideBox>
                 <img src={buyIcon} alt="buy now" />
                 <Typography variant='body2' sx={{fontWeight:'500', fontSize:'20px', color:'#3B3c45', my:1}}> Buying Guides</Typography>
                 <Box sx={{cursor:'pointer', display:'flex', justifyContent:'center', alignItems:'center'}}>
                     <Typography
                     variant='body2'
                     sx={{fontWeight:'bold', fontSize:'14px',color:'#0689FF'}}
                     > How to buy</Typography>
                     <ArrowRightAltIcon style={{ color: "#0689FF" }} />
                 </Box>
                </GuideBox>
                <GuideBox>
                 <img src={buyIcon} alt="buy now" />
                 <Typography variant='body2' sx={{fontWeight:'500', fontSize:'20px', color:'#3B3c45', my:1}}> Renting Guides</Typography>
                 <Box sx={{cursor:'pointer', display:'flex', justifyContent:'center', alignItems:'center'}}>
                     <Typography
                     variant='body2'
                     sx={{fontWeight:'bold', fontSize:'14px',color:'#0689FF'}}
                     > How to rent</Typography>
                     <ArrowRightAltIcon style={{ color: "#0689FF" }} />
                 </Box>
                </GuideBox>
                <GuideBox>
                 <img src={buyIcon} alt="buy now" />
                 <Typography variant='body2' sx={{fontWeight:'500', fontSize:'20px', color:'#3B3c45', my:1}}> Selling Guides</Typography>
                 <Box sx={{cursor:'pointer', display:'flex', justifyContent:'center', alignItems:'center'}}>
                     <Typography
                     variant='body2'
                     sx={{fontWeight:'bold', fontSize:'14px',color:'#0689FF'}}
                     > How to sell</Typography>
                     <ArrowRightAltIcon style={{ color: "#0689FF" }} />
                 </Box>
                </GuideBox>
            </GuidesBox>
            <CustomButton backgroundColor='#0F1B4C' color='#fff' buttonText='See Full Guide' guideBtn='true'/>
        </Box>

    )
}

export default Guide

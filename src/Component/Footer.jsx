import React from 'react'
import { Box, styled, Typography } from '@mui/material'
import { Container } from '@mui/system'
import fbIcon from "../media/fbicon.png";
import twitterIcon from "../media/twittericon.png";
import linkedinIcon from "../media/linkedinicon.png";

const Footer = () => {
    const CustomContainer = styled(Container)(({ theme }) => ({
        display: 'flex',
        justifyContent: 'space-around',
        gap: theme.spacing(5),
        [theme.breakpoints.down('md')]:{
            flexDirection: 'column',
            textAlign:'center',
            gap: theme.spacing(3),
        }
    }))
    const FooterLink = styled('span')(({ theme }) => ({
        fontsize: '16px',
        color: "#7A7A7E",
        cursor: 'pointer',
        fontWeight: '400',
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '10px',
        '&:hover': {
            color: "#000",
        }
    }))
    const  IconBox = styled(Box)(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        [theme.breakpoints.down('md')]:{
            justifyContent:'center',
        }
    }))
   
    return (
        <Box sx={{ py: 8 }}>
            <CustomContainer>
                <Box>
                    <Typography sx={{
                        fontSize: '20px',
                        color: "#1C1C1D",
                        fontWeight: '700',
                        mb: 2,
                    }}>Products</Typography>

                    <FooterLink>Listing</FooterLink>
                    <FooterLink>Propertie</FooterLink>
                    <FooterLink>Agents</FooterLink>
                    <FooterLink>Blog</FooterLink>
                </Box>
                <Box>
                    <Typography sx={{
                        fontSize: '20px',
                        color: "#1C1C1D",
                        fontWeight: '700',
                        mb: 2,
                    }}>Resources</Typography>

                    <FooterLink>Our Homes</FooterLink>
                    <FooterLink>Stories</FooterLink>
                    <FooterLink>Video</FooterLink>
                    <FooterLink>Free Trial</FooterLink>
                </Box>
                <Box>
                    <Typography
                        sx={{
                            fontSize: "20px",
                            color: "#1C1C1D",
                            fontWeight: "700",
                            mb: 2,
                        }}>
                        Company</Typography>
                    <FooterLink>Partnerships</FooterLink>
                    <FooterLink>Terms of use</FooterLink>
                    <FooterLink>Privacy</FooterLink>
                    <FooterLink>Sitemap</FooterLink>
                </Box>
                <Box>
                    <Typography
                        sx={{
                            fontSize: "20px",
                            color: "#1C1C1D",
                            fontWeight: "700",
                            mb: 2,
                        }}>
                        Get in touch</Typography>
                    <Typography
                        sx={{
                            fontSize: "16px",
                            color: "#7A7A7E",
                            fontWeight: "500",
                            mb: 2,
                        }}>
                        You’ll find your next home, in any style you prefer.</Typography>
                        <IconBox>
                            <img src={fbIcon} alt=""  style={{ cursor:'pointer'}}/>
                            <img src={twitterIcon} alt=""  style={{ cursor:'pointer'}}/>
                            <img src={linkedinIcon} alt=""  style={{ cursor:'pointer'}}/>
                        </IconBox>
                </Box>
            </CustomContainer>

        </Box>
    )
}

export default Footer

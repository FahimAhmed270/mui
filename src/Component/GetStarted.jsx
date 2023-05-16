import React from 'react'
import { Box, styled, Typography, Container } from '@mui/material'
import CustomButton from "./CustomButton";
import homeIllustration from "../media/illustration.png";

const GetStarted = () => {
    const CustomBox = styled(Box)(({ theme }) => ({
        padding: theme.spacing(10, 0, 10, 0),
        margin: theme.spacing(0, 2, 0, 2),
        [theme.breakpoints.down('md')]: {
            padding: '0',
        }
    }))
    const CustomContainer = styled(Container)(({ theme }) => ({
        backgroundColor: '#17275F',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderRadius: '15px',
        height: '420px',
        [theme.breakpoints.down('md')]: {
            height: "auto",
            flexDirection: "column",
            alignItems: "center",
            padding: theme.spacing(3),
            width: "90%",
            gap:theme.spacing(5),
        },
        [theme.breakpoints.down('sm')]: {
            height: "auto",
        }
    }))

    const Heading = styled(Typography)(({ theme }) => ({
        fontSize: '35px',
        color: '#fff',
        fontWeight: '700',
        [theme.breakpoints.down('sm')]: {
            fontSize: '30px',
            textAlign: 'center',
        }
    }))
    const Para = styled(Typography)(({ theme }) => ({
        fontSize: '16px',
        color: '#ccc',
        fontWeight: '500',
        margin: theme.spacing(3, 0),
        [theme.breakpoints.down('md')]: {
            margin: theme.spacing(2, 0), 
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '14px',
            textAlign: 'center',
        }
    }))
    return (
        <CustomBox>
            <CustomContainer>
                <Box>
                    <Heading>Featured Properties</Heading>
                    <Para>Everything you need to know about houses!</Para>
                    <CustomButton
                        backgroundColor='#fff'
                        color="#17275F"
                        buttonText='Get Started Now'
                        getStartedBtn={true}
                    />
                </Box>
                <img src={homeIllustration} alt="image" style={{ maxWidth: '100%' }} />
            </CustomContainer>
        </CustomBox>
    )
}

export default GetStarted

import React from 'react'
import { Box, Container, styled, Typography } from '@mui/material'
import houseCard from "../media/houseCard.png";


const Details = () => {
    const ImgBox = styled(Box)(({ theme }) => ({
        width: '100%',
        [theme.breakpoints.down('md')]: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }
    }))

    const CustomBox = styled(Box)(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        gap: theme.spacing(10),
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
            textAlign: 'center',
        }
    }))

    const TextField = styled(Box)(({ theme }) => ({
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: theme.spacing(5),
        padding: theme.spacing(0, 5, 0, 5),
        [theme.breakpoints.down("sm")]: {
            flexDirection: 'column',
            gap: theme.spacing(3),
        },
    }))
    const Largetext = styled(Typography)(({ theme }) => ({
        fontSize: '64px',
        color: '#000',
        fontWeight: '700',
        [theme.breakpoints.down("md")]: {
            fontSize: "32px",
        },
    }))
    const SmallText = styled(Typography)(({ theme }) => ({
        fontSize: '18px',
        color: '#7B8087',
        fontWeight: '500',
        [theme.breakpoints.down("md")]: {
            fontSize: "14px",
        },
    }))

    const Divider = styled('div')(({ theme }) => ({
        width: '13%',
        height: '5px',
        backgroundColor: "#000339",
        [theme.breakpoints.down('md')]: {
            margin: '0 auto',
        },
    }))

    const DetailsHeading = styled(Typography)(({ theme }) => ({
        fontSize: '35px',
        color: '#000339',
        fontWeight: '700',
        marginTop: '24px',
        marginBottom: '24px',
        [theme.breakpoints.down('md')]: {
            fontSize: '30px',
            marginTop: '20px',
            marginBottom: '20px',
        },
    }))

    const Detailspara = styled(Typography)(({ theme }) => ({
        fontSize: "16px",
        color: "#5A6473",
        lineHeight: "27px",
        [theme.breakpoints.down('md')]: {
            lineHeight: "22px",
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: "14px",
            lineHeight: "22px",
        },
    }))



    return (
        <Box>
            <Container sx={{ py: 10 }}>
                <CustomBox>
                    <ImgBox>
                        <img src={houseCard} alt="" style={{ maxWidth: '100%' }} />
                    </ImgBox>
                    <Box>
                        <Divider />
                        <DetailsHeading>You've found a neighborhood you love.</DetailsHeading>
                        <Detailspara>When you own a home, you commit to living in one location for a
                            period of time. We are here to ensure that this will be a
                            memorable experience for you.</Detailspara>
                    </Box>
                </CustomBox>
                <TextField>
                    <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                        <Largetext>2500+</Largetext>
                        <SmallText>Homes for Sale</SmallText>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                        <Largetext>3000+</Largetext>
                        <SmallText>Properties Rented</SmallText>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', }}>
                        <Largetext>3500+</Largetext>
                        <SmallText>Homes Sold</SmallText>
                    </Box>
                </TextField>
            </Container>
        </Box>
    )
}

export default Details

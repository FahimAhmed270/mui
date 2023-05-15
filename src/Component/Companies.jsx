import styled from '@emotion/styled'
import { Box, Container } from '@mui/system'
import React from 'react'
import logoImg from "../media/logo.png";
import starsImg from "../media/Star.png";
import logosImg from "../media/logos.png";
import { Typography } from '@mui/material';

const Companies = () => {
    const CustomContainer = styled(Container)(({ theme }) => ({
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    }))

    const CustomBox = styled(Box)(({ theme }) => ({

    }))

    return (
        <Box sx={{ mt: 10 }}>
            <CustomContainer>
                <CustomBox>
                    <img src={logoImg} alt="logo-image" />
                    <Typography variant='body2' sx={{ color: "#7D8589", fontSize: '16px', fontWeight: 'bold', mt: 2 }}>
                        More than 45,000 trust Besnik
                    </Typography>
                </CustomBox>
                <Box>
                    <img src={starsImg} alt="" />
                    <Typography variant='body2' sx={{ color: "#7D8589", fontSize: '16px', fontWeight: 'bold', mt: 2 }}>
                    5-Star Rating (2k+ Reviews)
                    </Typography>
                </Box>
            </CustomContainer>
            <Container sx={{ display:'flex', flexDirection: 'column'}}>
                <img src={logosImg} alt="" />
            </Container>
        </Box>
    )
}

export default Companies

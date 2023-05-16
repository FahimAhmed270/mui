import React from 'react'
import { Box, styled, Typography, Container } from '@mui/material'
import { properties } from '../properties'
import House from './House';

const Properties = () => {

    const PropertiesTextBox = styled(Box)(({ theme }) => ({
        [theme.breakpoints.down("md")]: {
            textAlign: "center",
        },
    }));

    const PropertiesBox = styled(Box)(({ theme }) => ({
        display: "flex",
        justifyContent:'space-around',
        flexWrap: 'wrap',
        gap:theme.spacing(5),
        marginTop: theme.spacing(5),
        [theme.breakpoints.down("md")]: {
            gap:theme.spacing(3),
            // flexDirection:'column',
        },
        
    }));

    return (
        <Box sx={{ mt: 5, backgroundColor: '#F5FAFE', py: 5 }}>
            <Container>
                <PropertiesTextBox>
                    <Typography sx={{ color: '#000339', fontSize: '35px', fontWeight: 'bold' }}>Featured Properties</Typography>
                    <Typography sx={{ color: '#5A6473', fontSize: '16px', mt: 1 }}> Everything you need to know when looking for a new home!</Typography>
                </PropertiesTextBox>
                <PropertiesBox>
                    {properties.map((pro) => {
                        return (
                            <House key={pro.id} img={pro.img} price={pro.price} address={pro.address} bedrooms={pro.bedrooms} bathrooms={pro.bathrooms} space={pro.space}/>
                        )
                })}
                </PropertiesBox>
            </Container>
        </Box>

    )
}

export default Properties

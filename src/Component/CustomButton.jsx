import { styled } from '@mui/system'
import Button from '@mui/material/Button'
import React from 'react'

const CustomButton = ({ backgroundColor, color, buttonText, heroBtn, guideBtn, getStartedBtn }) => {
    const CustomButton = styled(Button)(({ theme }) => ({
        backgroundColor: backgroundColor,
        color: color,
        fontWeight: '700',
        fontSize: '14px',
        cursor: 'pointer',
        padding: ' 0.5rem 1.25rem',
        borderRadius: '7px',
        textTransform: 'none',
        display: 'block',
        border: '2px solid transparent',
        '&:hover': {
            backgroundColor: color,
            color: backgroundColor,
            borderColor: backgroundColor,
        },
        [theme.breakpoints.down("md")]: {
            margin: (heroBtn || getStartedBtn) && theme.spacing(0, 'auto', 0, 'auto'),
            width: (heroBtn || getStartedBtn) && '80%',
        },
        [theme.breakpoints.down('sm')]: {
            marginTop: guideBtn && theme.spacing(3),
            width: guideBtn && '80%',
        },
    }))

    return <CustomButton>{buttonText}</CustomButton>
}

export default CustomButton

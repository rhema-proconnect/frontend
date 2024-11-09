import { Box } from '@mui/material'
import React from 'react'
import Img from "../images/404.svg"

const Error = () => {
    return (
        <Box sx={{marginTop:25, marginLeft:60}}>
            <img src={Img} alt='alt' />
        </Box>
    )
}

export default Error
import { Box, Typography } from '@mui/material'
import React from 'react'
import Icon from "../../images/icon.svg"
import { Link } from 'react-router-dom';

function Copyright(props) {
    return (
        <Typography variant="body2" align="center" {...props}>
        {'Copyright © '}
        {/* <Link color="inherit" href="/"> */}
            EasyProconnect
        {/* </Link> */}
        {' '}
        {new Date().getFullYear()}
        {'.'}
        </Typography>
    );
}

const Footer = () => {
  return (
    <Box sx={{background:"#0c2238", color:"white", height:150, textAlign:"center"}}>
        <img src={Icon} style={{marginTop:20}} alt='logo' height={100}/>
        <Copyright />

        {/* <Box sx={{marginLeft:}}>
            
        </Box> */}
    </Box>
  )
}

export default Footer
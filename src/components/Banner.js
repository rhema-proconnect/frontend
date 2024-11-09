import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import React from 'react'
import { Button, Stack, Typography } from '@mui/material';
// import {ReactSVG} from "react-svg";
import Moov from "../images/moov.png"
import { Divider } from 'antd';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import '../i18n'; // Make sure i18n.js is imported
// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: 'white',
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//     ...theme.applyStyles('white', {
//       backgroundColor: '#1A2027',
//     }),
//   }));

const Banner = () => {
  const { userInfo } = useSelector((state) => state.auth)
  const { t, i18n } = useTranslation();


    return (
        <Box sx={{ width: '100%'}}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6}>
                <Box sx={{width:"70%", marginLeft:15, marginTop:5}}>
                <Typography variant="h3" sx={{fontFamily:'Poppins, sans-serif', fontWeight: "bold"}}>{t('opportunity')}</Typography>
                <Typography variant="h4" color="#f57d27" sx={{fontFamily:'Poppins, sans-serif', fontWeight: "bold"}}>{t('ressemble')}</Typography>
                <Typography variant="h7" sx={{fontFamily:'Poppins, sans-serif'}}>
                {/* {t('dedicated')} */}
                  Nous sommes dédiés à fournir des solutions de visibilité et de gestion de rendez-vous pour les professionnels de tous horizons. Notre mission est de simplifier la prise de rendez-vous et d'améliorer votre présence en ligne pour attirer plus de clients et opportunités.
                </Typography>
                <Divider />
                <Stack spacing={2} direction="row">
                  <Button href="/monosites" style={{background:"#0c7fac", color:"white", borderRadius:20}}>Allez aux Monosites</Button>
                  {userInfo ? (
                    <Button variant="outlined" style={{borderRadius:20}} href="/dash">Allez au Tableau de bord</Button>
                  ):(
                    <Button variant="outlined" style={{borderRadius:20}} href="/login">Connectez-vous</Button>
                  )}
                </Stack>
                </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box>
                    <img src={Moov} style={{width:"500px", marginTop:10}} />
                  </Box>
                </Grid>
            </Grid>
    </Box>
    )
}

export default Banner
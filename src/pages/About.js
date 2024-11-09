import { Box, Typography } from '@mui/material'
import React from 'react'
import Grid from '@mui/material/Grid';
import Img2 from "../images/dashboard.png"
import Img1 from "../images/catalogue.png"

const About = () => {

  return (
    <Box marginTop={5} marginLeft={7}>
        <Box paddingRight={10} paddingLeft={5} >
        <Box paddingTop={5} sx={{ borderRadius: "0.9rem", background:"#ebeff5"}}>
        <Typography marginLeft={55} sx={{fontFamily:'Poppins, sans-serif'}} variant="h4">About Pro-Connect</Typography>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
            <Box width={550} sx={{fontFamily:'Poppins, sans-serif'}} marginLeft={10} marginTop={20}>
                Bienvenue chez Pro-connect, votre partenaire en visibilité et gestion des rendez-vous. 
                Nous sommes une équipe passionnée par l’aide aux petites et moyennes entreprises pour leur croissance et leur réussite dans un monde de plus en plus numérique. 
                Notre mission est d’offrir des solutions simples et des moyens efficaces d’aider nos clients à attirer plus de clients 
                et à améliorer leur visibilité en ligne et de gérer efficacement leurs horaires. Avec une année d’expérience dans le domaine, 
                Nous comprenons les défis auxquels vous êtes confrontés en tant qu’entrepreneur et nous sommes là pour vous soutenir à chaque étape de votre croissance.
            </Box>
        </Grid>
        <Grid item xs={6}>
            <Box width={100} marginLeft={10} marginTop={10}>
                <img src={Img2} style={{width:"500px"}} />
            </Box>
        </Grid>
        <Grid item xs={6}>
            <Box width={100} marginLeft={3} marginTop={8}>
                <img src={Img1} style={{width:"500px"}} />
            </Box>
        </Grid>
        <Grid item xs={6}>
            <Box width={400} sx={{fontFamily:'Poppins, sans-serif'}} marginLeft={10} marginTop={15}>
                Prêt à attirer plus de clients et à optimiser votre emploi du temps ? Prenez rendez-vous dès aujourd’hui 
                et découvrez comment nous pouvons vous aider à atteindre vos objectifs. Ne laissez pas la gestion de votre emploi du temps vous ralentir. 
                Réservez dès maintenant votre consultation gratuite et découvrez comment notre équipe peut vous simplifier la vie au quotidien. 
                Prêt à augmenter votre visibilité en ligne et à attirer de nouveaux clients ? 
                Contactez-nous dès maintenant pour une évaluation gratuite de vos besoins en marketing et en gestion des rendez-vous.
            </Box>    
        </Grid>
        </Grid>
      </Box>
      </Box>
    </Box>
  )
}

export default About
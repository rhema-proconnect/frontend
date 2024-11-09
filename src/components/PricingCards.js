import React from 'react';
import { Card as Car, Col, Row, Button, Divider   } from 'antd';
import { Box, Typography, Stack, Chip, Badge } from '@mui/material'
import User from '../images/user.png'
import Company from '../images/entreprise.png'
import Student from '../images/student.png'
import Worker from '../images/appel.png'
import { Link } from 'react-router-dom';

const { Meta } = Car;

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://Proconnect.com/">
            Proconnect
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
        </Typography>
    );
}

export default function PricingCards({userData}) {
  return (
    <Box sx={{ typography: 'body1', marginTop:-6}}>
        <Row gutter={16}>
            <Col span={6}>
            <Car 
                // title={<img alt="example" src={User} height={50} width={50}/>}
                hoverable
                // style={{background:"#dae1e3", textAlign:"center"}}
            >
                <Meta
                    avatar={<img src={User} height={50} width={50} />}
                    title="Simple User"
                    // description="This is the description"
                />
                <Divider />
                <Typography sx={{fontFamily:'Poppins, sans-serif'}}>USER /UTILISATEUR</Typography>
                <Typography sx={{fontFamily:'Poppins, sans-serif'}}>Accès a Services :</Typography>
                <Typography sx={{fontFamily:'Poppins, sans-serif'}}>-Des étudiants professionnels des entreprises</Typography>
                <Typography sx={{fontFamily:'Poppins, sans-serif'}}>-Accès aux offres spéciales</Typography>
                <Typography sx={{fontFamily:'Poppins, sans-serif'}}>-Efficacité et fiabilité des services</Typography>
                <Typography sx={{fontFamily:'Poppins, sans-serif'}}>-Packaging familiale</Typography>
                <Typography sx={{fontFamily:'Poppins, sans-serif'}}>-Recherche de promiscute</Typography>
                <Typography sx={{fontFamily:'Poppins, sans-serif'}}>-Découverte de multitudes professionnels</Typography>
                <Typography sx={{fontFamily:'Poppins, sans-serif'}}>-Découverte de diverses activités </Typography>
                <Typography sx={{fontFamily:'Poppins, sans-serif'}}>-Economie des couts </Typography>
                <Typography sx={{fontFamily:'Poppins, sans-serif'}}>-Feedback client</Typography>
                <Typography sx={{fontFamily:'Poppins, sans-serif'}}>-Facilité d’utilisation</Typography>
                <Stack spacing={2} direction="row" marginLeft={-1.5}>
                    <Button variant="outlined" href='/credit' sx={{fontFamily:'Poppins, sans-serif'}}>Tarit Mensuel = 0$</Button>
                    <Button variant="outlined" sx={{fontFamily:'Poppins, sans-serif'}} href='/users' type="primary">Go to finish</Button>
                </Stack>
            </Car>
        </Col>
        <Col span={6}>
        <Car 
            // title={<img alt="example" src={Student} marginLeft={50} height={50} width={50}/>}
            hoverable >
                <Meta
                avatar={<img src={Student} height={50} width={50} />}
                title="Student"
            />
            <Divider />
        <Typography variant="outlined" sx={{fontFamily:'Poppins, sans-serif'}}>ETUDIANTS</Typography><br/>
            <Typography variant="outlined" sx={{fontFamily:'Poppins, sans-serif'}}>Accès a Services :</Typography>
            <Typography sx={{fontFamily:'Poppins, sans-serif'}}>-Augmentation de la Visibilité en ligne</Typography>
            <Typography sx={{fontFamily:'Poppins, sans-serif'}}>-Facilité de gestion des rendez-vous</Typography>
            <Typography sx={{fontFamily:'Poppins, sans-serif'}}>-Facilité d'utilisation</Typography>
            <Typography sx={{fontFamily:'Poppins, sans-serif'}}>-Augmentation des revenus</Typography>
            <Typography sx={{fontFamily:'Poppins, sans-serif'}}>-Feedback client</Typography>
            <Typography sx={{fontFamily:'Poppins, sans-serif'}}>-Promouvoir vos produits et services</Typography>
            <Typography sx={{fontFamily:'Poppins, sans-serif'}}>-Facilité de gestion des rendez-vous</Typography>
            <Typography sx={{fontFamily:'Poppins, sans-serif'}}>-Sécurité et conformité des données </Typography>
            <Stack spacing={2} direction="row" marginTop={7.5} marginLeft={-1.5}>
                <Button variant="outlined" href='/credit' sx={{fontFamily:'Poppins, sans-serif'}}>Tarit Mensuel = 0$</Button>
                <Button variant="outlined" href='/student' sx={{fontFamily:'Poppins, sans-serif'}} type="primary">Go to finish</Button>
            </Stack>    
        </Car>
        </Col>
        <Col span={6}>
        <Car 
            // title={<img alt="example" src={Worker} marginLeft={50} height={50} width={50}/>} 
            hoverable
        >
             <Meta
                avatar={<img src={Worker} height={50} width={50} />}
                title="Self Employee"
            />
            <Divider />
            <Typography sx={{fontFamily:'Poppins, sans-serif'}}>Self-employee</Typography>
            <Typography sx={{fontFamily:'Poppins, sans-serif'}}>Accès a Services :</Typography>
            <Typography sx={{fontFamily:'Poppins, sans-serif'}}>-Accès à une large gamme de services</Typography>
            <Typography sx={{fontFamily:'Poppins, sans-serif'}}>-Commodité et gain de temps</Typography>
            <Typography sx={{fontFamily:'Poppins, sans-serif'}}>-Réputation et confiance</Typography>
            <Typography sx={{fontFamily:'Poppins, sans-serif'}}>-Offres et promotions</Typography>
            <Typography sx={{fontFamily:'Poppins, sans-serif'}}>-Gestion simplifiée des réservations</Typography>
            <Typography sx={{fontFamily:'Poppins, sans-serif'}}>-Sécurité des paiements</Typography>
            <Typography sx={{fontFamily:'Poppins, sans-serif'}}>-Flexibilité et options</Typography>
            <Typography sx={{fontFamily:'Poppins, sans-serif'}}>-Flexibilité géographique </Typography>
            <Stack spacing={2} direction="row" marginTop={10} marginLeft={-1.5}>
                <Button variant="outlined" href='/credit' sx={{fontFamily:'Poppins, sans-serif'}}>Tarit Mensuel = 0$</Button>
                <Button variant="outlined" href='/s_employee' type="primary" sx={{fontFamily:'Poppins, sans-serif'}}>Go to finish</Button>
            </Stack>
        </Car>
        </Col>
        <Col span={6}>
        <Car 
            // title={<img alt="example" src={Company} marginLeft={50} height={50} width={50}/>} 
            hoverable
            style={{background:"#dae1e3"}}
        >
            <Meta
                avatar={<img src={Company} height={50} width={50} />}
                title="Company"
                // description="This is the description"
            />
            <Divider />
        <Typography sx={{fontFamily:'Poppins, sans-serif'}}>Continuez en tant qu'ENTREPRISES</Typography>
            <Typography sx={{fontFamily:'Poppins, sans-serif'}}>Accès a Services :</Typography><br/>
            <Typography sx={{fontFamily:'Poppins, sans-serif'}}>-Augmentation de la visibilité</Typography>
            <Typography sx={{fontFamily:'Poppins, sans-serif'}}>-Gestion efficace des Rendez- vous</Typography>
            <Typography sx={{fontFamily:'Poppins, sans-serif'}}>-Amélioration de la Relation client</Typography>
            <Typography sx={{fontFamily:'Poppins, sans-serif'}}>-Accroissement des revenus</Typography>
            <Typography sx={{fontFamily:'Poppins, sans-serif'}}>-Analyses et Rapports</Typography>
            <Typography sx={{fontFamily:'Poppins, sans-serif'}}>-Réduction des coûts</Typography>
            <Typography sx={{fontFamily:'Poppins, sans-serif'}}>-Expansion de la clientèle </Typography>
            <Typography sx={{fontFamily:'Poppins, sans-serif'}}>-Sécurité et conformité</Typography>
            <Stack spacing={2} direction="row" marginTop={13} marginLeft={-1.5}>
                <Button variant="outlined" href='/credit' sx={{fontFamily:'Poppins, sans-serif'}}>Tarit Mensuel = 0$</Button>
                <Button variant="outlined" sx={{fontFamily:'Poppins, sans-serif'}} href={`/company/${userData}`} type="primary">Go to finish</Button>
            </Stack>
        </Car>
        </Col>
        
      
    </Row>
    <Copyright sx={{ mt: 5 }} />
    </Box>

);
}
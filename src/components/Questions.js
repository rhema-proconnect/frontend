import { Box, Typography } from '@mui/material'
import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Fade from '@mui/material/Fade';

const Questions = () => {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpansion = () => {
        setExpanded((prevExpanded) => !prevExpanded);
    };
    return (
    <Box sx={{marginTop:10,width:"100%", background:"rgb(35, 56, 89, 0.6)"}}>
    <Box sx={{textAlign:"center", width:700, marginLeft:40, paddingTop:5,}}>
        <Typography variant="h4" sx={{fontFamily:'Poppins, sans-serif', fontWeight: "bold", color:"white"}}>Foire aux questions</Typography><br />
        <Typography  sx={{fontFamily:'Poppins, sans-serif', color:"white"}}>
        Répondez ici aux éventuelles questions de vos clients, 
        cela augmentera la taux de conversion ainsi que les demandes d’assistance ou de chat.
        </Typography><br />

        <Accordion
            expanded={expanded}
            onChange={handleExpansion}
            slots={{ transition: Fade }}
            slotProps={{ transition: { timeout: 400 } }}
            sx={[
            expanded
                ? {
                    '& .MuiAccordion-region': {
                    height: 'auto',
                    },
                    '& .MuiAccordionDetails-root': {
                    display: 'block',
                    },
                }
                : {
                    '& .MuiAccordion-region': {
                    height: 0,
                    },
                    '& .MuiAccordionDetails-root': {
                    display: 'none',
                    },
                },
                ]}
            >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography sx={{fontFamily:'Poppins, sans-serif', fontWeight: "bold"}}>Qu'est-ce que votre plateforme offre aux professionnels ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
                Notre plateforme offre aux professionnels un monosite personnalisé, 
                qui leur permet de présenter leurs services, d’augmenter leur visibilité en ligne, 
                de faciliter la prise de rendez-vous avec leurs clients et de recevoir des avis notés sur leurs prestations
            </Typography>
        </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
            >
                <Typography sx={{fontFamily:'Poppins, sans-serif', fontWeight: "bold"}}>Quels types de services peuvent être proposés sur votre plateforme ?</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Nous accueillons une variété de services professionnels, allant des services de bien-être (coaching, massages) 
                    aux services techniques (réparations, consultations) en passant par les services éducatifs (tutoring, formations). 
                    Toute prestation de service peut trouver sa place sur notre plateforme.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
            >
                <Typography sx={{fontFamily:'Poppins, sans-serif', fontWeight: "bold"}}>Comment les clients prennent-ils des rendez-vous avec moi ?</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Vos clients peuvent prendre rendez-vous directement sur votre monosite via un calendrier interactif. 
                    Vous pouvez définir vos disponibilités et accepter ou modifier les demandes de rendez-vous à tout moment.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
            >
                <Typography sx={{fontFamily:'Poppins, sans-serif', fontWeight: "bold"}}>Comment les notations des services fonctionnent-elles ?</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Après chaque prestation, vos clients ont la possibilité de laisser un avis et une notation sur votre service. 
                    Ces évaluations vous permettent d’améliorer votre visibilité sur la plateforme et de renforcer la confiance des futurs clients.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
            >
                <Typography sx={{fontFamily:'Poppins, sans-serif', fontWeight: "bold"}}>Comment puis-je améliorer ma visibilité sur la plateforme ?</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Vous pouvez améliorer votre visibilité en optimisant votre profil, en accumulant des avis positifs, 
                    en partageant votre monosite sur vos réseaux sociaux et en participant à nos campagnes de promotion internes.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
            >
                <Typography sx={{fontFamily:'Poppins, sans-serif', fontWeight: "bold"}}>Quels sont les avantages d'avoir un monosite sur votre plateforme par rapport à un site web classique ?</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Un monosite sur notre plateforme est clé en main, optimisé pour la prise de rendez-vous et conçu pour maximiser votre visibilité. 
                    Vous n'avez pas à vous soucier de la gestion technique, et vous bénéficiez de nos outils de marketing, de suivi de performances et de notations. 
                    C'est une solution tout-en-un, accessible à tous.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
            >
                <Typography sx={{fontFamily:'Poppins, sans-serif', fontWeight: "bold"}}>Quels sont les frais pour utiliser la plateforme ?</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                Nos tarifs varient en fonction du plan que vous choisissez. Nous proposons des options adaptées aux travailleurs autonomes, 
                aux petites entreprises et aux grandes structures. Consultez notre rebrique \"Tarifs\" pour plus de détails.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
            >
                <Typography sx={{fontFamily:'Poppins, sans-serif', fontWeight: "bold"}}>Puis-je intégrer mon monosite à mes autres outils (site web, réseaux sociaux) ?</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Oui, nous offrons des intégrations pour que vous puissiez facilement partager 
                    votre monosite sur vos réseaux sociaux ou l'incorporer à votre site web existant.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
            >
                <Typography sx={{fontFamily:'Poppins, sans-serif', fontWeight: "bold"}}>Comment assurer la satisfaction de mes clients sur votre plateforme ?</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Assurez-vous d'être réactif aux demandes de rendez-vous, de fournir un excellent service, et d'encourager vos clients à laisser des avis après chaque prestation. 
                    Une bonne communication et une transparence sur vos services sont des clés pour maximiser la satisfaction.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
            >
                <Typography sx={{fontFamily:'Poppins, sans-serif', fontWeight: "bold"}}>Comment puis-je suivre mes rendez-vous et mes performances sur la plateforme ?</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Vous avez accès à un tableau de bord intuitif où vous pouvez gérer vos rendez-vous, consulter vos statistiques de visibilité, 
                    et suivre vos évaluations clients. Tout est conçu pour vous offrir une vue d'ensemble de votre activité.
                </Typography>
            </AccordionDetails>
        </Accordion>
    </Box>
    </Box>
  )
}

export default Questions
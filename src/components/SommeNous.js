import { Box, Typography } from '@mui/material'
import { Col, Row, Card } from 'antd'
import React from 'react'
import One from "../images/1.png"
import Two from "../images/2.png"
import Three from "../images/3.png"
import Four from "../images/4.png"
import Five from "../images/5.png"
import Six from "../images/6.png"

const {Meta} = Card
const SommeNous = () => {
    return (
        <>
            <Box sx={{textAlign:"center", background:"#f5f6f7", marginTop:10, paddingTop:10}}>
                <Typography variant="h4" sx={{fontFamily:'Poppins, sans-serif', fontWeight: "bold"}}>Qui sommes nous?</Typography><br />
                <Box sx={{width:600, marginLeft:50}}>
                    <Typography variant="h7" sx={{fontFamily:'Poppins, sans-serif'}}>
                        Nous sommes dédiés à fournir des solutions de visibilité
                        et de gestion de rendez-vous pour les professionnels de tous horizons. 
                        Notre mission est de simplifier la prise de rendez-vous 
                        et d'améliorer votre présence en ligne pour attirer plus de clients et opportunités.
                    </Typography>
                </Box>
                <br />
                <Box>
                    <Row gutter={16}>
                        <Col span={8}>
                            <Card 
                                title={<img alt="example" src={One} height={150} width={150}/>} 
                                style={{textAlign:"center", background:"#f5f6f7"}}
                                bordered={false}
                            >
                                <Typography sx={{fontFamily:'Poppins, sans-serif', fontWeight: "bold"}}>Faites vous connaitre</Typography>
                                <Typography sx={{fontFamily:'Poppins, sans-serif'}}>Proconnect la platforme qui vous permet de vous mettre envaleur vous et votre entreprise</Typography>
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card 
                                title={<img alt="example" src={Two} height={125} width={150}/>} 
                                style={{textAlign:"center", background:"#f5f6f7"}}
                                bordered={false}
                                >
                                {/* <Meta
                                    // avatar={<img src={Company} height={50} width={50} />}
                                    title="Company"
                                    // description="This is the description"
                                /> */}
                                <Typography sx={{fontFamily:'Poppins, sans-serif', fontWeight: "bold"}}>Une vitrine pour tout acteurs économique</Typography>
                                <Typography sx={{fontFamily:'Poppins, sans-serif'}}>
                                    Mettez en avant vos services et compétences grâce à une plateforme conçue 
                                    pour booster votre visibilité professionnelle.
                                </Typography>
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card 
                                title={<img alt="example" src={Three} height={125} width={150}/>} 
                                style={{textAlign:"center", background:"#f5f6f7"}}
                                bordered={false}
                                >
                                <Typography sx={{fontFamily:'Poppins, sans-serif', fontWeight: "bold"}}>Créer vous un Branding</Typography>
                                <Typography sx={{fontFamily:'Poppins, sans-serif'}}>
                                    Développez une identité professionnelle unique et cohérente pour attirer 
                                    l'attention et gagner la confiance de vos clients.
                                </Typography>
                            </Card>
                        </Col>
                    </Row>
                </Box><br />
                <Box>
                    <Row gutter={16}>
                        <Col span={8}>
                            <Card 
                                title={<img alt="example" src={Four} height={150} width={170}/>} 
                                style={{textAlign:"center", background:"#f5f6f7"}}
                                bordered={false}
                            >
                                <Typography sx={{fontFamily:'Poppins, sans-serif', fontWeight: "bold"}}>Nous vous mettons en relation avec vos futres clients</Typography>
                                <Typography sx={{fontFamily:'Poppins, sans-serif'}}>
                                    Connectez-vous facilement à des clients potentiels et créez des opportunités 
                                    commerciales directement depuis notre plateforme.
                                </Typography>
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card 
                                title={<img alt="example" src={Five} height={150} width={150}/>} 
                                style={{textAlign:"center", background:"#f5f6f7"}}
                                bordered={false}
                                >
                                <Typography sx={{fontFamily:'Poppins, sans-serif', fontWeight: "bold"}}>Gérer vos rendez-vous avec les clients depuis Proconnect</Typography>
                                <Typography sx={{fontFamily:'Poppins, sans-serif'}}>
                                    Organisez vos rendez-vous, simplifiez la planification et optimisez votre 
                                    temps grâce à une interface intuitive et efficace
                                </Typography>
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card 
                                title={<img alt="example" src={Six} height={150} width={170}/>} 
                                style={{textAlign:"center", background:"#f5f6f7"}}
                                bordered={false}
                            >
                                <Typography sx={{fontFamily:'Poppins, sans-serif', fontWeight: "bold"}}>Ne ratez pas une occasion de vous faire des clients</Typography>
                                <Typography sx={{fontFamily:'Poppins, sans-serif'}}>
                                    Restez toujours disponible et augmentez vos opportunités en capturant 
                                    chaque demande de service sur la plateforme
                                </Typography>
                            </Card>
                        </Col>
                    </Row>
                </Box>

            </Box>
            {/* <br /> */}
            {/* <br /> */}
            {/* <Box sx={{textAlign:"center"}}>
                <Typography variant="h4" sx={{fontFamily:'Poppins, sans-serif', fontWeight: "bold"}}>Features</Typography><br />
                <Box sx={{width:600, marginLeft:50}}>
                    <Typography variant="h7" sx={{fontFamily:'Poppins, sans-serif'}}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Quidem laboriosam harum dolorem asperiores maiores rem reprehenderit corrupti minus veniam cupiditate quis obcaecati, 
                    sequi repudiandae placeat odit nihil? Ducimus, labore veritatis?
                    </Typography>
                </Box>
            </Box> */}
        </>
    )
}

export default SommeNous
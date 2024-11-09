import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
// const { Meta } = Card;
import { useDispatch, useSelector } from 'react-redux'
import { retrievePage } from '../feature/pageSlice';
// import { useTranslation } from "react-i18next";
import Test from '../components/Test';
import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import { Avatar, List, Space, Skeleton } from 'antd';
import translateText from '../service/translateService';
import { useTranslation } from "react-i18next";
import About from './About';
import Banner from '../components/Banner';
import Contact from './Contact';
import Footer from '../layouts/Footer/Footer';
import SommeNous from '../components/SommeNous';
import Questions from '../components/Questions';



const Home = () => {
    const { t } = useTranslation();
    // const { setLanguage } = useTranslation();
    // const [isLoading, setIsLoading] = useState(false);
    // const [loadingChart, setLoadingChart] = useState(false);
    // const Page = useSelector(state => state.page.page)
    // const [pageData, setPageData] = useState([])
    // const [search, setSearch] = useState('');


    const [translatedText, setTranslatedText] = useState('');
    const [language, setLanguage] = useState('en');

    const handleLanguageChange = async (event) => {
        const selectedLanguage = event.target.value;
        setLanguage(selectedLanguage);
    
        const textToTranslate = 
            'Welcome to our website!'
        // };
        const translated = await translateText(textToTranslate, selectedLanguage);
        setTranslatedText(translated);
    };

    return (
        <>
            <Box sx={{marginTop:"100px"}}>
            <Banner />
            {/* <Typography sx={{marginLeft: "190px", marginTop:"150px", fontSize: 25}}>{translatedText ||'welcome'}</Typography>
            <select value={language} onChange={handleLanguageChange}>
                <option value="en">English</option>
                <option value="fr">Français</option>
                <option value="es">Español</option>
                <option value="de">Deutsch</option>
            </select> */}
            {/* <h1>{translatedText1 ||'welcome to our'}</h1> */}
            
            <SommeNous /> 
            <About /> 
            <Questions />
            <Contact />
            </Box>
            <Footer /> 
        </>
    )
}

export default Home
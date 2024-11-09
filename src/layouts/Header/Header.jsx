// Joel Amovin
import React, { useState } from 'react'
import { Link,/*, useNavigate */
} from 'react-router-dom'
// import { useSelector/*, useDispatch */} from 'react-redux'
import "./header.css"
import Logo from '../../images/logo.png';
import Profil from "../../components/profil"
import { useSelector } from 'react-redux';
import { Typography, FormControl, Select, MenuItem } from "@mui/material";
// import { useTranslation } from 'react-i18next';
// import { useCookies } from 'react-cookie';
import i18next from "i18next";
// import FrenchImg from "./french.jpg"
// import EnglishImg from "./english.jpg"
import Notifications from '../../components/Notifications';
// import Button from '@mui/material/Button';
// import DeleteIcon from '@mui/icons-material/Delete';
// import LoginIcon from '@mui/icons-material/Login';
import { useMediaQuery} from '@mui/material';
import Icon from "../../images/icon.svg"
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { Button as Btn } from 'antd';
import { LoginOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import '../../i18n'; // Make sure i18n.js is imported
const lngs = [
  {
      code: "en",
      name: "English",
      country_code: "gb", 
      // img: EnglishImg
  },
  {
      code: "fr",
      name: "Francais",
      country_code: "fr",
      // img: FrenchImg
  },
  {
      code: "es",
      name: "Espash",
      country_code: "es",
      // img: FrenchImg
  },
];

function Header() {
  const { userInfo } = useSelector((state) => state.auth)
  const [selectedLanguage, setSelectedLanguage] = useState([])
  const isMobile = useMediaQuery('(max-width:600px)');
  const isTablet = useMediaQuery('(min-width:601px) and (max-width:900px)');
  const { t, i18n } = useTranslation();

  // const changeLanguage = (lng) => {
  //   i18n.changeLanguage(lng); // Change language dynamically
  // };

  // const { t } = useTranslation();
  // const [navs] = useState(data);

    // const [isLoading, setIsLoading] = useState(false);

    // const [cookies] = useCookies(["i18next"]);
    // const [selectedLanguage, setSelectedLanguage] = useState(
    //     () => cookies?.i18next || "en"
    // );

    const changeLng = (e) => {
        i18next.changeLanguage(e.target.value);
        setSelectedLanguage(e.target.value);
    };

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

  return  (
    <>
   {isMobile ? (
    <header className="fixed-header1">
      <div className='logo1'>
        <Link to='/'>
          <img src={Icon} width="50" alt="logo" height='50'/>
        </Link>
      </div>
      <div className={`nav-menu ${isOpen ? "active" : ""}`}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        {isOpen ? <MenuIcon size={24} /> : <MenuOpenIcon size={24} />}
      </div>
    </header>
  ): isTablet ? (
    <header className="fixed-header1">
    <div className='logo1'>
      <Link to='/'>
        <img src={Icon} width="50" alt="logo" height='50'/>
      </Link>
    </div>
    <div className={`nav-menu ${isOpen ? "active" : ""}`}>
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#services">Services</a>
      <a href="#contact">Contact</a>
    </div>
    <div className="hamburger" onClick={toggleMenu}>
      {isOpen ? <MenuIcon size={24} /> : <MenuOpenIcon size={24} />}
    </div>
  </header>
   ): (<header className="fixed-header">
        <div className='logo'>
          <Link to='/'>
            <img src={Logo} width="190" alt="logo" height='50'/>
          </Link>
        </div>
        <ul className="nav-links">
          <Link to="/" className="dashbord">
            <li>{t('home')}</li>
          </Link>
          <Link to="/monosites" className="dashbord">
            <li>Monosites</li>
          </Link>
          <Link to="/about" className="dashbord">
            <li>{t('about')}</li>
          </Link>
          <Link to="/contact" className="dashbord">
            <li>{t('contact')}</li>
          </Link>
          </ul>
          <ul className="nav-link">
          {userInfo ? (
            <>
              <Link to="/dash" className="dashbord">
                <li>{t('dashbord')}</li>
              </Link>
              <Notifications />
              <Profil />
            </>
          ) : (
            <Link to="/login" className="planstrategique">
              <Btn style={{background:"#0c7fac", color:"white", borderRadius:20, marginLeft:30}} icon={<LoginOutlined />} >
                {t('signin')}
              </Btn>
          </Link>
          )}
          {/* <FormControl>
            <Select
                labelId="language-label"
                id="language-select"
                value={selectedLanguage}
                onChange={changeLng}
                sx={{marginTop: -8, marginLeft: 10}}
            >
              {lngs.map((lng) => (
                  <MenuItem
                      value={lng.code}
                      key={lng.country_code}
                      disabled={selectedLanguage === lng.code}
                  >
                    <Typography className='code'>{lng.code}</Typography>
                  </MenuItem>
              ))}
            </Select>
          </FormControl> */}
          </ul>
          {/* <Box
                id="google_translate_element"
                sx={{
                    '.skiptranslate > span': {display: 'none'},
                }}
            /> */}
          {/* </Box> */}
          
                      {/* <img src={lng.img} height={20} width={20}/> */}
        
    </header>)
  }
  </>
  )
}

export default Header
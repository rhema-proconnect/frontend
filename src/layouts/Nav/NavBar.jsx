import { NavLink } from "react-router-dom"
import "./index.css"
import React, { useEffect, useState } from 'react'
import { Box, Typography } from "@mui/material"
import { useTranslation } from 'react-i18next';
import { useSelector } from "react-redux";
import {jwtDecode} from 'jwt-decode';
import { Badge } from "antd";


const NavBar = () => {
    const { t } = useTranslation();
    // const Cpny = useSelector(state => state.cpny.cpny)
    // const [count, setCount] = useState(Cpny.length)
    const { userInfo } = useSelector((state) => state.auth)
    const [userData, setUserData] = useState('')
    const Users = useSelector(state => state.user.users)
    const [show1, setShow1] = useState(true);
    const [show2, setShow2] = useState(true);

    // const increase = () => {
    //   console.log(Cpny.length + 1);
    //   // setCount(Cpny.length);
    // };

    useEffect(()  =>{
      const accessToken = userInfo; 
        const decodedPayload = jwtDecode(accessToken); 
        const data = (Users || []).find(user => user._id === decodedPayload._id);
        setUserData(data);
        // increase()
        setShow1(true)
      //eslint-disable-next-line react-hooks/exhaustive-deps
    },[Users])

  return (
    // <Box>
      <div className="vertical-navbar">
        {/* {userData.role ==! 'Support' || userData.role ==! 'Admin' || userData.role ==! 'Users' &&
          <NavLink to="/allPage" activeClassName="active-link">
            {t('pageMenu')}
          </NavLink>
        } */}
        {/* <NavLink to="/allPage" exact activeClassName="active-link">
          {t('pageMenu')}
        </NavLink> */}
        {/* {userData.role ==! 'Support'|| userData.role ==! 'Admin' || userData.role ==! 'Users' &&
        <NavLink to="/allService" activeClassName="active-link">
          {t('serviceMenu')}
        </NavLink>
        } */}
        {/* {userData.role ==! 'Support' || userData.role ==! 'Admin' || userData.role ==! 'Users' &&
        <NavLink to="/allApp" activeClassName="active-link">
          {t('appMenu')}
        </NavLink>
        } */}
        {userData.role === 'Support' &&
          <NavLink to="/profil/management" activeClassName="active-link" >
            <Typography sx={{fontFamily:'Poppins, sans-serif'}} onClick={() => setShow1(false)}>Company Validation </Typography>
          </NavLink>
        }
        {userData.role === 'Support' &&
          <NavLink to="/validPage" activeClassName="active-link">
              <Typography sx={{fontFamily:'Poppins, sans-serif'}}>Monosite Validation </Typography>
          </NavLink>
        }
        {userData.role === 'Support' &&
          <NavLink to="/simple_users" activeClassName="active-link">
              <Typography sx={{fontFamily:'Poppins, sans-serif'}}>User Validation </Typography>
          </NavLink>
        }
        {userData.role === 'Company' &&
          <NavLink to={`/allPage/${userData._id}`} activeClassName="active-link">
            Mes Monosites
          </NavLink>
        }
        {userData.role === 'Company' &&
          <NavLink to="/allService" activeClassName="active-link">
            Mes Services
          </NavLink>
        }
        {userData.role === 'Company' &&
          <NavLink to="/appointements" activeClassName="active-link">
            Mes Rendez-vous
          </NavLink>
        }
        {userData.role === 'Student' &&
          <NavLink to={`/allPage/${userData._id}`} activeClassName="active-link">
            Mes Monosites
          </NavLink>
        }
        {userData.role === 'Student' &&
          <NavLink to="/allService" activeClassName="active-link">
            Mes Services
          </NavLink>
        }
        {userData.role === 'Student' &&
          <NavLink to="/appointements" activeClassName="active-link">
            Mes Rendez-vous
          </NavLink>
        }
        {userData.role === 'Support' &&
          <NavLink to="/self_employee" activeClassName="active-link">
            Valid Self Employee
          </NavLink>
        }
        {userData.role === 'Support' &&
          <NavLink to="/student_list" activeClassName="active-link">
            Valid Student
          </NavLink>
        }
        {userData.role === 'Support' &&
          <NavLink to="/mailing" activeClassName="active-link">
            Mailing
          </NavLink>
        }
        {userData.role === 'Support' &&
          <NavLink to="/valid_student_page" activeClassName="active-link">
            Valid Student Monosite
          </NavLink>
        }
      </div>
    // </Box>
  )
}

export default NavBar
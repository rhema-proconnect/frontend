import { Box, Typography, Stack, Chip, Badge, Grid } from '@mui/material'
import React from 'react'
import { retrievePage } from '../feature/pageSlice'
import { retrieveUser } from '../feature/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useState } from 'react'
import {jwtDecode} from 'jwt-decode';
import NavBar from '../layouts/Nav/NavBar'
import { retrieveCpny } from '../feature/cpnySlice'
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import PricingCards from '../components/PricingCards'
import Dashs from '../components/Dashs'

const Board = () => {
    const dispatch = useDispatch()
    const Page = useSelector(state => state.page.page)
    const Users = useSelector(state => state.user.users)
    const Cpny = useSelector(state => state.cpny.cpny)
    const [pageData, setPageData] = useState([])
    const { userInfo } = useSelector((state) => state.auth)
    const [userData, setUserData] = useState('')
    const [cpnyId, setCpnyId] = useState('')
    
    useEffect(()=> {
        const accessToken = userInfo; 
        const decodedPayload = jwtDecode(accessToken);
        const data = (Users || []).find(srv =>srv?._id === decodedPayload?._id)
        const data1 = (Cpny || []).find(srv =>srv?.user === decodedPayload?._id)
        setPageData(Page)
        setUserData(data)
        setCpnyId(data1)
    }, [Page, Users, Cpny]);

    useEffect(()=> {
        dispatch(retrievePage())
        dispatch(retrieveUser())
        dispatch(retrieveCpny())
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    

    return (
        <>
        <Box sx={{ marginTop: 20,}}>
            {userData?.role === "Users" &&
                <PricingCards userData={userData._id}/>
            }
        </Box>
        {userData?.role === "Company" &&
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid xs={4}>
                            <NavBar />
                        </Grid>
                        <Grid xs={8}>
                        {/* <Item>xs=8</Item> */}
                            <Typography sx={{border:"1px solid black", marginTop:20}}>Bonjour Et bienvenu Chez Vous</Typography>
                        </Grid>
                    </Grid>
                    {/* <Dashs /> */}
                </Box>
        }
        {userData?.role === "Student" &&
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid xs={4}>
                            <NavBar />
                        </Grid>
                        <Grid xs={8}>
                        {/* <Item>xs=8</Item> */}
                            <Typography sx={{border:"1px solid black", marginTop:20}}>Bonjour Et bienvenu Chez Vous</Typography>
                        </Grid>
                    </Grid>
                    {/* <Dashs /> */}
                </Box>
        }
        {userData?.role === "Support" &&
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid xs={4}>
                            <NavBar />
                        </Grid>
                        <Grid xs={8}>
                        {/* <Item>xs=8</Item> */}
                            <Typography sx={{border:"1px solid black"}}>Bonjour Et bienvenu Chez Vous</Typography>
                        </Grid>
                    </Grid>
                {/* <Dashs /> */}
                </Box>
        }
        
        </>
    )
}

export default Board
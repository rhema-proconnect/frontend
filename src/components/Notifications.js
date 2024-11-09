import React, { useEffect, useState } from 'react'
// import NotificationsIcon from '@mui/icons-material/Notifications';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { IconButton, Menu, MenuItem, Badge, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import {retrieveApp} from "../feature/appSlice"
import {Link} from "react-router-dom"
import { retrieveUser } from '../feature/userSlice';
import {jwtDecode} from 'jwt-decode';
import "./index.css"
import { LocaldateDate, LocaldateHours } from '../utils/uuidv4';

const Notifications = () => {
    const dispatch = useDispatch()
    const [anchorEl, setAnchorEl] = useState(null);
    const App = useSelector(state => state.app.app)
    const Users = useSelector(state => state.user.users)
    const [appData, setAppData] = useState([])
    const [appDataClient, setAppDataClient] = useState([])
    const [appFilterData, setAppFilterData] = useState([])
    const [invisible, setInvisible] = useState(false);
    const { userInfo } = useSelector((state) => state.auth)
    const [userData, setUserData] = useState([])
    // const [dataValid, setDataValid] = useState([])

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        console.log("yoooo")
        setAnchorEl(event.currentTarget);
    };
    
    useEffect(()=> {
        const accessToken = userInfo; 
        const decodedPayload = jwtDecode(accessToken); 
        const data = (Users || []).filter(user => user._id === decodedPayload._id);
        setUserData(data);
        setAppData(App.filter(app =>app.user === userData._id))
        setAppDataClient(App.filter(app =>app.client === userData._id))
        const status = App.map(app => app.status)
        setAppFilterData(status)
        setInvisible(false)
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [App, Users]);

    useEffect(()=> {
        dispatch(retrieveApp())
        dispatch(retrieveUser())
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch]);
    
    const handleClose = () => {
        setAnchorEl(null);
        // setInvisible(true)
    };
    
    return (
        <>
            <IconButton 
                variant="outlined"
                sx={{marginTop: -7, height: "39px",width: "39px", color:"white"}}
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                size='large'
                // aria-label={notificationsLabel(100)}
            >
                <Badge color="error" variant={"dot"} invisible={invisible}>
                    <NotificationsNoneIcon />
                </Badge>
            </IconButton>
            {/* {userData.role === "Company" && */}
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{'aria-labelledby': 'basic-button'}}
            >
                {/* {
                    appData.length >0 ? appData.map(app => 
                    <Link to={`/validation/app/${app._id}`} className='noti'> */}
                        <MenuItem
                            onClick={handleClose}
                            sx={{
                                // backgroundColor: (app.status === false) && "#d8b8b1",
                                fontFamily:'Poppins, sans-serif',
                                textDecoration: "none",
                                opacity: "65%"
                            }}
                        >
                            New Appointement
                        </MenuItem>
                    {/* </Link> */}
                {/* ):<Typography sx={{fontFamily:'Poppins, sans-serif'}}>No Data</Typography>
            } */}
            </Menu>
            {/* } */}
            {/* {userData.role === "Users" &&
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{'aria-labelledby': 'basic-button'}}
                >
                    {
                        appDataClient.length >0 ? appDataClient.map(app =>
                            app.valid === true &&
                            <MenuItem
                                onClick={handleClose}
                                sx={{
                                    backgroundColor: (app.status === false) && "#d8b8b1",
                                    fontFamily:'Poppins, sans-serif',
                                    textDecoration: "none",
                                    opacity: "65%"
                                }}
                            >
                                Votre rendez-vous de {LocaldateDate(app.date)} entre {LocaldateHours(app.hourBegin)}-{LocaldateHours(app.hourEnd)} a ete accepter avec succes
                            </MenuItem>
                        ):<Typography sx={{fontFamily:'Poppins, sans-serif'}}>No Data</Typography>
                    }
                    {
                        appDataClient.length >0 ? appDataClient.map(app =>
                            app.notApprouve === true &&
                            // <Link to={`/validation/app/${app._id}`} className='noti'>
                            <MenuItem
                                onClick={handleClose}
                                sx={{
                                    backgroundColor: (app.status === false) && "#d8b8b1",
                                    fontFamily:'Poppins, sans-serif',
                                    textDecoration: "none",
                                    opacity: "65%"
                                }}
                            >
                                Votre rendez-vous de {LocaldateDate(app.date)} entre {LocaldateHours(app.hourBegin)}-{LocaldateHours(app.hourEnd)} a ete rejetter 
                            </MenuItem>
                        // </Link>
                        ):<Typography sx={{fontFamily:'Poppins, sans-serif'}}>No Data</Typography>
                    }
                </Menu>
            } */}
        </>
    )
}

export default Notifications
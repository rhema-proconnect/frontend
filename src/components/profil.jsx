import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logOut } from '../service/authService'
import { Typography } from '@mui/material';
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
// import { getUserInfo } from "../service/authService";
import { useEffect } from 'react';
import { useState } from 'react';
import {jwtDecode} from 'jwt-decode';
import { retrieveUser } from '../feature/userSlice'
import axiosInstance from '../service/axiosInstance';


const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));


function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
  };
}

export default function AccountMenu() {
  const dispatch = useDispatch()
  const { userInfo } = useSelector((state) => state.auth)
  const Users = useSelector(state => state.user.users)
  const navigate = useNavigate()
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [userData, setUserData] = useState([])

  
  // const dispatch = useDispatch()

  const handlePage = () => {
    navigate('/settings')
  }


  useEffect(() => {
    const accessToken = userInfo; 
    const decodedPayload = jwtDecode(accessToken); 
    axiosInstance.get("/auth/users/"+decodedPayload._id)
    .then(res =>{
      setUserData(res.data.data)
        // console.log(userData.email)
    })
    .catch(err => console.log(err))
    // console.log(userData);
    // console.log(userData.role);
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const onLogout = () => {
    logOut()
    // dispatch(reset())
    navigate('/login')
    
  }
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  useEffect(()=> {
    dispatch(retrieveUser())
    //eslint-disable-next-line react-hooks/exhaustive-deps
}, []);

  return (
    <React.Fragment>
      <Box>
        
        <Tooltip title="Paramètres du compte">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2, marginTop: "-95px" }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            
            <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                variant="dot"
            >
              <Avatar sx={{ width: 32, height: 32,  }} />
              {/* <Avatar sx={{ width: 32, height: 32,  }} {...stringAvatar(userData.username)}/> */}
            </StyledBadge>
          &nbsp;&nbsp;
           {/*  <Typography sx={{color:'white', fontFamily:'Poppins, sans-serif'}}>{userInfo.user.charAt(0).toUpperCase()+userInfo.user.slice(1).toLowerCase()}</Typography>  */}
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handlePage} >
        {/* {userData.map( user =>
          <Typography>
            {user.email}
        </Typography>
        )} */}
        <Typography sx={{fontFamily:'Poppins, sans-serif'}}>{userData.email}</Typography>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handlePage} sx={{fontFamily:'Poppins, sans-serif'}}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Paramètre
        </MenuItem>
        <MenuItem onClick={onLogout} sx={{fontFamily:'Poppins, sans-serif'}}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Déconnexion
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}

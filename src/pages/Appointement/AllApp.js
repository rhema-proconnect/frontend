import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { retrieveApp } from '../../feature/appSlice'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {jwtDecode} from 'jwt-decode';
import { retrieveUser } from '../../feature/userSlice';
import { Box, IconButton, Tooltip, Typography } from '@mui/material';
import { LocaldateDate, LocaldateHours } from '../../utils/uuidv4';
import InfoIcon from '@mui/icons-material/Info';
import DeleteIcon from '@mui/icons-material/Delete';
// import EditIcon from '@mui/icons-material/Edit';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import DetailApp from '../../components/DetailApp';
import axiosInstance from '../../service/axiosInstance';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

const AllApp = () => {
    const dispatch = useDispatch()
    const App = useSelector(state => state.app.app)
    const { userInfo } = useSelector((state) => state.auth)
    const [userData, setUserData] = useState([])
    const Users = useSelector(state => state.user.users)
    const [appData, setAppData] = useState([])
    const [appFilterData, setAppFilterData] = useState([])
    const [editingItem, setEditingItem] = useState(null);
    // const [status, setStatus] = useState(false);
    // const [valid, setIsValid] = useState(false);

    useEffect(()=> {
        const accessToken = userInfo; 
        const decodedPayload = jwtDecode(accessToken); 
        const data = (Users || []).find(user => user._id === decodedPayload._id);
        setUserData(data);
        setAppData(App.filter(app =>app.user === userData._id))
        const status = App.map(app => app.status)
        setAppFilterData(status)
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [App, Users]);
    
    useEffect(()  =>{
      dispatch(retrieveApp())
      dispatch(retrieveUser())
      //eslint-disable-next-line react-hooks/exhaustive-deps
    },[dispatch])

    const handleUpdateWithValid = async (id) =>{
      try {
        // Send PUT request to the server
        const response = await axiosInstance.put(`/app/${id}`, {
          status: true, valid: true
        });
      if (response.status === 200) {
        // If successful, update the state with the new data
        const updatedData = appData.map(item =>
          item._id === id ? { ...item, status: true, valid: true } : item
        );
        setAppData(updatedData);
        setEditingItem(null); // Exit edit mode
      } else {
        console.error('Failed to update the item:', response.status);
      }
    } catch (error) {
        // Handle errors
        console.error('Error updating item:', error);
      }
    }

    const handleUpdateWithNotValid = async (id) =>{
      try {
        // Send PUT request to the server
        const response = await axiosInstance.put(`/app/${id}`, {
          status: false, valid: false
        });
      if (response.status === 200) {
        // If successful, update the state with the new data
        const updatedData = appData.map(item =>
          item._id === id ? { ...item, status: false, valid: false } : item
        );
        setAppData(updatedData);
        setEditingItem(null); // Exit edit mode
      } else {
        console.error('Failed to update the item:', response.status);
      }
    } catch (error) {
        // Handle errors
        console.error('Error updating item:', error);
      }
    }

    const handleUpdateWithNotApprouve = async (id) =>{
      try {
        // Send PUT request to the server
        const response = await axiosInstance.put(`/app/${id}`, {
          notApprouve: true,
        });
      if (response.status === 200) {
        // If successful, update the state with the new data
        const updatedData = appData.map(item =>
          item._id === id ? { ...item, notApprouve: true } : item
        );
        setAppData(updatedData);
        setEditingItem(null); // Exit edit mode
      } else {
        console.error('Failed to update the item:', response.status);
      }
    } catch (error) {
        // Handle errors
        console.error('Error updating item:', error);
      }
    }
    const handleUpdateWithApprouve = async (id) =>{
      try {
        // Send PUT request to the server
        const response = await axiosInstance.put(`/app/${id}`, {
          notApprouve: false,
        });
      if (response.status === 200) {
        // If successful, update the state with the new data
        const updatedData = appData.map(item =>
          item._id === id ? { ...item, notApprouve: false } : item
        );
        setAppData(updatedData);
        setEditingItem(null); // Exit edit mode
      } else {
        console.error('Failed to update the item:', response.status);
      }
    } catch (error) {
        // Handle errors
        console.error('Error updating item:', error);
      }
    }

    const handleDelete = async (id) =>{
      try {
        const response = await axiosInstance.delete(`/app/${id}`);
        if (response.status === 200) {
          // If successful, update the state to remove the item
          const res = appData.filter(item => item._id !== id);
          setAppData(res)
        } else {
          console.error('Failed to delete the item:', response.status);
        }
        // message.success(response.data.message)
    } catch (error) {
        console.log(error);
    }
      // const res = axiosInstance.delete(`/app/${id}`)
      // console.log(res)
    }
    return (
        <Box sx={{marginTop: -70,marginLeft: 50, height:540}}>
            <Typography sx={{fontFamily:'Poppins, sans-serif', fontSize:"25px", textAlign:"center"}}>List of Appointements</Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                      <TableRow>
                          <StyledTableCell sx={{fontFamily:'Poppins, sans-serif'}}>Full Name</StyledTableCell>
                          <StyledTableCell sx={{fontFamily:'Poppins, sans-serif'}} align="center">Object</StyledTableCell>
                          <StyledTableCell sx={{fontFamily:'Poppins, sans-serif'}} align="center">Date</StyledTableCell>
                          <StyledTableCell sx={{fontFamily:'Poppins, sans-serif'}} align="center">Hour begin</StyledTableCell>
                          <StyledTableCell sx={{fontFamily:'Poppins, sans-serif'}} align="center">Hour End</StyledTableCell>
                          <StyledTableCell sx={{fontFamily:'Poppins, sans-serif'}} align="center">Detail</StyledTableCell>
                      </TableRow>
                    </TableHead> 
                    <TableBody>
                    {appData.length > 0 ? appData.map((row) => (
                        <StyledTableRow key={row._id}>
                            <StyledTableCell sx={{fontFamily:'Poppins, sans-serif'}} component="th" scope="row">
                                {row.name}
                            </StyledTableCell>
                            <StyledTableCell sx={{fontFamily:'Poppins, sans-serif'}} align="center">{row.objective}</StyledTableCell>
                            <StyledTableCell sx={{fontFamily:'Poppins, sans-serif'}} align="center">{LocaldateDate(row.date)}</StyledTableCell>
                            <StyledTableCell sx={{fontFamily:'Poppins, sans-serif'}} align="center">{LocaldateHours(row.hourBegin)}</StyledTableCell>
                            <StyledTableCell sx={{fontFamily:'Poppins, sans-serif'}} align="center">{LocaldateHours(row.hourEnd)}</StyledTableCell>
                            <StyledTableCell sx={{fontFamily:'Poppins, sans-serif'}} align="center">
                            <Tooltip title="More">
                              <IconButton aria-label="info" color='info'>
                                <DetailApp
                                  name={row.name}
                                  objectif={row.objective}
                                  date={LocaldateDate(row.date)}
                                  hourBegin1={LocaldateHours(row.hourBegin)}
                                  hourEnd1={LocaldateHours(row.hourEnd)}
                                  email={row.email}
                                  phone={row.phone}
                                />
                              </IconButton>
                            </Tooltip>
                            <Tooltip title="Valid">
                              {row.valid === false ?
                                row.notApprouve === false &&
                                <IconButton  onClick={(e) => handleUpdateWithValid(row._id)}  aria-label="info" >
                                  <ThumbUpAltIcon />
                                </IconButton>:
                                <IconButton color='info' onClick={(e) => handleUpdateWithNotValid(row._id)}  aria-label="info" >
                                <ThumbUpAltIcon />
                              </IconButton>
                              }
                            </Tooltip>
                            <Tooltip title="Reject">
                            {row.notApprouve === false ?
                              row.valid === false &&
                                <IconButton onClick={(e) => handleUpdateWithNotApprouve(row._id)}  aria-label="info" >
                                <ThumbDownOffAltIcon />
                              </IconButton>
                              :
                              <IconButton color='error' onClick={(e) => handleUpdateWithApprouve(row._id)}  aria-label="info" >
                                <ThumbDownOffAltIcon />
                              </IconButton>
                            }
                            </Tooltip>
                            <Tooltip title="Delete">
                              <IconButton  onClick={(e) => handleDelete(row._id)} aria-label="delete" color='error'>
                                <DeleteIcon />
                              </IconButton>
                            </Tooltip>
                            </StyledTableCell>
                            </StyledTableRow>
                    )):<>No data</>}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    )
}

export default AllApp
import React, { useEffect, useState } from 'react'
import { retrieveApp } from '../../feature/appSlice'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Button, IconButton, Tooltip, Typography } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch, useSelector } from 'react-redux';
import { retrieveService } from '../../feature/serviceSlice';
import {jwtDecode} from 'jwt-decode';
import { retrieveUser } from '../../feature/userSlice';
import NavBar from '../../layouts/Nav/NavBar';
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

const AllService = () => {
  const dispatch = useDispatch()
    const { userInfo } = useSelector((state) => state.auth)
    // const [userData, setUserData] = useState([])
    const Srvc = useSelector(state => state.srvc.srvc)

    // const Users = useSelector(state => state.user.users)
    const [servData, setServData] = useState([])


    useEffect(()  =>{
      const accessToken = userInfo; 
        const decodedPayload = jwtDecode(accessToken); 
        // const data = (Users || []).find(user => user._id === decodedPayload._id);
        // setUserData(data);
        setServData(Srvc.filter(srv =>srv.user === decodedPayload._id))
      // setServData(Srvc)
      //eslint-disable-next-line react-hooks/exhaustive-deps
    },[Srvc])

    useEffect(() =>{
      dispatch(retrieveService())
      //eslint-disable-next-line react-hooks/exhaustive-deps
    },[dispatch])

    // const handleDelete = async (id) => {
    //   // const res = await axiosInstance.delete(`/del/service/${id}`)
    //   // console.log(res.data) 
    // }

  return (
    <>
      <Box
        sx={{
          marginTop: -70,
          marginLeft: 50,
          height:540
        }}
      >
        <Button href="/addService">Add Service</Button>
        <Typography sx={{fontFamily:'Poppins, sans-serif', fontSize:"25px", textAlign:"center"}}>List of Service</Typography>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                <TableRow>
                    <StyledTableCell sx={{fontFamily:'Poppins, sans-serif'}}>Full Name</StyledTableCell>
                    <StyledTableCell sx={{fontFamily:'Poppins, sans-serif'}} align="center">Description</StyledTableCell>
                    <StyledTableCell sx={{fontFamily:'Poppins, sans-serif'}} align="center">Detail</StyledTableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {servData.length >0 ? servData.map((row) => (
                    <StyledTableRow key={row.name} >
                        <StyledTableCell sx={{fontFamily:'Poppins, sans-serif'}} component="th" scope="row">
                            {row.name}
                        </StyledTableCell>
                        <StyledTableCell sx={{fontFamily:'Poppins, sans-serif'}} align="center">{row.description}</StyledTableCell>
                        <StyledTableCell sx={{fontFamily:'Poppins, sans-serif'}} align="center">
                        <Tooltip title="More">
                          <IconButton href={`/detail/service/${row._id}`} aria-label="info" color='info'>
                            <InfoIcon />
                          </IconButton>
                          </Tooltip>
                          <IconButton aria-label="edit" color='warning'>
                            <EditIcon />
                          </IconButton>
                          <Tooltip title="Delete">
                            <IconButton aria-label="delete" color='error' >
                              <DeleteIcon />
                            </IconButton>
                          </Tooltip>
                        </StyledTableCell>
                        </StyledTableRow>
                )):<Typography>No data</Typography>}
                </TableBody>
            </Table>
        </TableContainer>
      </Box>
    </>
  )
}

export default AllService
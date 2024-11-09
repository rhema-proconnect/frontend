import React, { useEffect, useState } from 'react'
// import {Link, useParams} from "react-router-dom"
import {useDispatch,useSelector} from "react-redux"
// import { retrieveService } from '../../feature/serviceSlice'
// import axiosInstance from '../../service/axiosInstance'
import { Box, Button, IconButton, Tooltip, Typography } from '@mui/material'
import { retrieveCpny } from '../../feature/cpnySlice';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
// import {jwtDecode} from 'jwt-decode';
import InfoIcon from '@mui/icons-material/Info';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { message } from 'antd';
import axiosInstance from '../../service/axiosInstance';
import VerifiedIcon from '@mui/icons-material/Verified';
import { retrieveUser } from '../../feature/userSlice';

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

const ProfilValid = () => {
  const dispatch = useDispatch()
  const Cpny = useSelector(state => state.cpny.cpny)
  const Users = useSelector(state => state.user.users)
  const [data, setData] = useState([])
  const [editingItem, setEditingItem] = useState(null);
  const [userData, setUserData] = useState([]) 
  const [role, setRole] = useState("")

  // console.log(Cpny)
//   const [pagData, setPagData] = useState([])
//   const { userInfo } = useSelector((state) => state.auth)



  useEffect(()=> {
    setData(Users)

    
    // console.log(role)
    // const test = Users?.filter(data => data?._id === id);
    // test?.map(data => setUserData(data))
    // const res = test?.map(data => setUserData(data))
    // console.log({...res})
    // console.log(test)
//     setUh(fetchSingleItem)
//     // const accessToken = userInfo; 
//     // const decodedPayload = jwtDecode(accessToken); 
//     // setPagData(Page.filter(page =>page.user === decodedPayload._id)) 
}, [Users]);


  useEffect(()=> {
    dispatch(retrieveCpny())
    dispatch(retrieveUser()) 
    //eslint-disable-next-line react-hooks/exhaustive-deps 
  }, []);

// const SelectCompanyRole = async (id) => {
//   const test = Users?.filter(data => data?._id === id);
//   test?.map(data => setUserData(data))
//   test?.map(data => setRole(data))
//   // const res = Cpny.filter(data => data.user === id)
//   // res?.map(data => setRole(data))
//   // setRole(res)
//   try { 
//     // Send PUT request to the server
//     const response = await axiosInstance.put(`/auth/users/${id}`, {role: "Company"});
//   // if (response.status === 200) {
//     // If successful, update the state with the new data
//     const updatedData = data.map(item => item._id === id ? { ...item, role: "Company" } : item);
//     setData(updatedData);
//     setEditingItem(null); // Exit edit mode
//     // setIsValid(prevState => !prevState);
//     message.success(response.data.message)
//     // console.log(response)
//     // console.log(data)

//   // } else {
//   //   message.error('Failed to update the item');
//   //   // console.log()
//   // }
// } catch (error) {
//     // Handle errors
//     message.error('Error updating item');
//   }
// };

// const RemoveCompanyRole = async (id) => {
//   const test = Users?.filter(data => data?._id === id);
//   test?.map(data => setUserData(data))
//   // console.log(id)
//   try {
//     // Send PUT request to the server
//     const response = await axiosInstance.put(`/auth/users/${id}`, {role: "Users"});
//   // if (response.status === 200) {
//     // If successful, update the state with the new data
//     const updatedData = data.map(item =>
//       item._id === id ? { ...item, role: "Users" } : item
//     );
//     setData(updatedData);
//     setEditingItem(null); // Exit edit mode
//     // setIsValid(prevState => !prevState);
//     message.success(response.data.message)
//   // } else {
//   //   message.error('Failed to update the item');
//   //   // console.log()
//   // }
// } catch (error) {
//     // Handle errors
//     message.error('Error updating item');
//   }
// };

  return (
        <Box sx={{
          marginTop: -90,
          marginLeft: 50,
          height:540
          }}>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                      <TableRow>
                          <StyledTableCell sx={{fontFamily:'Poppins, sans-serif'}}>Company Name</StyledTableCell>
                          <StyledTableCell sx={{fontFamily:'Poppins, sans-serif'}} align="center">Description</StyledTableCell>
                          {/* <StyledTableCell sx={{fontFamily:'Poppins, sans-serif'}} align="center">Role</StyledTableCell> */}
                          <StyledTableCell sx={{fontFamily:'Poppins, sans-serif'}} align="center">Detail</StyledTableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                    {Cpny.length >0 ? Cpny.map((row) => (
                        <StyledTableRow key={row.name} >
                            <StyledTableCell sx={{fontFamily:'Poppins, sans-serif'}} component="th" scope="row">
                                {row.name}
                            </StyledTableCell>
                            <StyledTableCell sx={{fontFamily:'Poppins, sans-serif'}} align="center">{row.description}</StyledTableCell>
                            {/* <StyledTableCell sx={{fontFamily:'Poppins, sans-serif'}} align="center">{role.role}</StyledTableCell> */}
                            <StyledTableCell sx={{fontFamily:'Poppins, sans-serif'}} align="center">
                              <Tooltip title="More">
                                <IconButton href={`/detail/PV/${row._id}`} aria-label="info" color='info'>
                                  <InfoIcon />
                                </IconButton>
                              </Tooltip>
                              {row.isApprouve === false ?
                                <Tooltip title="Valid is data">
                                    <IconButton aria-label="info">
                                      <VerifiedIcon />
                                    </IconButton>
                                </Tooltip>:
                                <Tooltip title="Data is not valid">
                                  <IconButton color='info' aria-label="info" >
                                    <VerifiedIcon />
                                  </IconButton>
                                </Tooltip>
                                }
                              <Tooltip title="Delete">
                                <IconButton aria-label="delete" color='error'>
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

export default ProfilValid
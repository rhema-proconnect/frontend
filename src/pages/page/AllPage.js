import React, { useEffect, useState } from 'react'
// import {Link, useParams} from "react-router-dom"
import {useDispatch,useSelector} from "react-redux"
// import { retrieveService } from '../../feature/serviceSlice'
// import axiosInstance from '../../service/axiosInstance'
import { Box, Button, IconButton, Tooltip, Typography } from '@mui/material'
import { retrieveUser } from '../../feature/userSlice'
import { retrievePage } from '../../feature/pageSlice'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {jwtDecode} from 'jwt-decode';
import InfoIcon from '@mui/icons-material/Info';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Spinner from '../../components/Spinner';

// import { useParams } from 'react-router-dom'

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

const AllPage = () => {
  const dispatch = useDispatch()
  const Page = useSelector(state => state.page.page)
  const [pagData, setPagData] = useState([])
  const Users = useSelector(state => state.user.users)
  const { userInfo } = useSelector((state) => state.auth)
  const [userId, setUserId] = useState("")
  const [loadingChart, setLoadingChart] = useState(false);


  useEffect(()=> {
    const accessToken = userInfo; 
    const decodedPayload = jwtDecode(accessToken); 
    setUserId(decodedPayload._id)
    setPagData(Page.filter(page =>page.user === decodedPayload._id))
    setLoadingChart(true)
    setTimeout(() =>{
        setLoadingChart(false)
    }, 2000)
    console.log("pages",pagData)
    console.log("userId",userId)
    //eslint-disable-next-line react-hooks/exhaustive-deps
}, [Page, Users]);


  useEffect(()=> {
    dispatch(retrievePage())
    dispatch(retrieveUser())
    //eslint-disable-next-line react-hooks/exhaustive-deps
}, []);

  return (
      <>
    {loadingChart ?
      <Spinner loading={loadingChart}/>
      :
        <Box sx={{marginTop: -70,marginLeft: 50, height:540}}>
            <Button href={`/addPage/${userId}`}>Add MonoSite</Button>
            <Typography sx={{fontFamily:'Poppins, sans-serif', fontSize:"25px", textAlign:"center"}}>List of MonoSite</Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                      <TableRow>
                        <StyledTableCell sx={{fontFamily:'Poppins, sans-serif'}}>Name</StyledTableCell>
                        <StyledTableCell sx={{fontFamily:'Poppins, sans-serif'}} align="center">Description</StyledTableCell>
                        <StyledTableCell sx={{fontFamily:'Poppins, sans-serif'}} align="center">Detail</StyledTableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {pagData.length > 0 ? pagData.map((row) => (
                        <StyledTableRow key={row.name}>
                            <StyledTableCell sx={{fontFamily:'Poppins, sans-serif'}} component="th" scope="row">
                              {row.name}
                            </StyledTableCell>
                            <StyledTableCell sx={{fontFamily:'Poppins, sans-serif'}} align="center">{row.description}</StyledTableCell>
                            <StyledTableCell sx={{fontFamily:'Poppins, sans-serif'}} align="center">
                              <Tooltip title="More">
                                <IconButton href={`/detail/page/${row._id}`} aria-label="info" color='info'>
                                  <InfoIcon />
                                </IconButton>
                              </Tooltip>
                              <Tooltip title="Edit">
                                <IconButton href={`/updatePage/${row._id}`} aria-label="edit" color='warning'>
                                  <EditIcon />
                                </IconButton>
                              </Tooltip>
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
      }
      </>
  )
}

export default AllPage
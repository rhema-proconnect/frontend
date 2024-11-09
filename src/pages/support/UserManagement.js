import { 
    Box,
    Paper,
    Button,
    IconButton,
    Table, 
    TableBody, 
    TableContainer, 
    TableHead, 
    TableRow, 
    Tooltip, 
    Typography, 
    styled,
    tableCellClasses,
    TableCell
} from '@mui/material'
import React, { useEffect, useState } from 'react'
// import {jwtDecode} from 'jwt-decode';
import InfoIcon from '@mui/icons-material/Info';
import DeleteIcon from '@mui/icons-material/Delete';
// import EditIcon from '@mui/icons-material/Edit';
import { useDispatch, useSelector } from 'react-redux';
import { retrievePage } from '../../feature/pageSlice';
import { retrieveUser } from '../../feature/userSlice';
// import VerifiedIcon from '@mui/icons-material/Verified';
// import { message } from 'antd';
// import axiosInstance from '../../service/axiosInstance';


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

const PageManagement = () => {
    const dispatch = useDispatch()
    const Page = useSelector(state => state.page.page)
    const [pageData, setPageData] = useState([])
   

    useEffect(()=> {
      setPageData(Page)
    // fetchSingleItem()
      //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Page]);

  useEffect(()=> {
    dispatch(retrievePage())
    dispatch(retrieveUser())
    // dispatch(retrieveUser())
    //eslint-disable-next-line react-hooks/exhaustive-deps
}, []);



  return (
    <Box sx={{
      marginTop: -64,
      marginLeft: 30,
      height:540
    }}>
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
                  {pageData.length >0 ? pageData.map((row) => (
                      <StyledTableRow key={row._id} >
                          <StyledTableCell sx={{fontFamily:'Poppins, sans-serif'}} component="th" scope="row">
                              {row.name}
                          </StyledTableCell>
                          <StyledTableCell sx={{fontFamily:'Poppins, sans-serif'}} align="center">{row.description}</StyledTableCell>
                          {/* <StyledTableCell sx={{fontFamily:'Poppins, sans-serif'}} align="center">{row.description}</StyledTableCell> */}
                          <StyledTableCell sx={{fontFamily:'Poppins, sans-serif'}} align="center">
                            <Tooltip title="More">
                              <IconButton href={`/page/${row._id}`} aria-label="info" color='info'>
                                <InfoIcon />
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
  )
}

export default PageManagement
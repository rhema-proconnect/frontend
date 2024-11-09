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
// import { retrievePage } from '../../feature/pageSlice';
import { retrieveUser } from '../../feature/userSlice';
import { retrieveStdM } from '../../feature/StudentMonoSlice';

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

const StudentMono = () => {
    const SdtM = useSelector(state => state.sdtM.stdM)
    const [sdtMData, setStdMData] = useState([])
    const dispatch = useDispatch()

    useEffect(()=> {
        setStdMData(SdtM)
      // fetchSingleItem()
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [SdtM]);

    useEffect(()=> {
        dispatch(retrieveStdM())
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
                            <StyledTableCell sx={{fontFamily:'Poppins, sans-serif'}} align="center">Category</StyledTableCell>
                            <StyledTableCell sx={{fontFamily:'Poppins, sans-serif'}} align="center">Phone Number</StyledTableCell>
                            <StyledTableCell sx={{fontFamily:'Poppins, sans-serif'}} align="center">Detail</StyledTableCell>
                        </TableRow>
                    </TableHead> 
                    <TableBody>
                    {sdtMData.map((row) => (
                        <StyledTableRow key={row._id} >
                            <StyledTableCell sx={{fontFamily:'Poppins, sans-serif'}} component="th" scope="row">
                                {row.fullName}
                            </StyledTableCell>
                            <StyledTableCell sx={{fontFamily:'Poppins, sans-serif'}} align="center">{row.cat}</StyledTableCell>
                            <StyledTableCell sx={{fontFamily:'Poppins, sans-serif'}} align="center">{row.phone}</StyledTableCell>
                            {/* <StyledTableCell sx={{fontFamily:'Poppins, sans-serif'}} align="center">{row.description}</StyledTableCell> */}
                            <StyledTableCell sx={{fontFamily:'Poppins, sans-serif'}} align="center">
                                <Tooltip title="More">
                                    <IconButton href={`/detail/stdM/${row._id}`} aria-label="info" color='info'>
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
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
  )
}

export default StudentMono
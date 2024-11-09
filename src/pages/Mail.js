import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { retrieveMail } from '../feature/mailSlice'
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
import DeleteIcon from '@mui/icons-material/Delete';
import ReplyIcon from '@mui/icons-material/Reply';
import axiosInstance from '../service/axiosInstance';
import { message } from 'antd';

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


const Mail = () => {
    const dispatch = useDispatch()
    const Mails = useSelector(state => state.mail.mail)
    const [data, setData] = useState([])

    useEffect(()=> {
        setData(Mails)
    }, [Mails]);

    useEffect(()=> {
        dispatch(retrieveMail())
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleDelete = async (id) =>{
        try {
            const response = await axiosInstance.delete(`/del/message/${id}`);
            if (response.status === 200) {
                // If successful, update the state to remove the item
                const res = data.filter(item => item._id !== id);
                setData(res)
            } else {
                message.error('Failed to delete the item');
            }
            message.success(response.data.message)
        } catch (error) {
            console.log(error);
        }
        // const res = axiosInstance.delete(`/app/${id}`)
        // console.log(res)
    }
  return (
    <Box sx={{
        marginTop: -90,
        marginLeft: 50,
        height:540
    }}>
    <Typography sx={{fontFamily:'Poppins, sans-serif', fontSize:"25px", textAlign:"center"}}>List of Email</Typography>
    <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
                <TableRow>
                    <StyledTableCell sx={{fontFamily:'Poppins, sans-serif'}}>name</StyledTableCell>
                    <StyledTableCell sx={{fontFamily:'Poppins, sans-serif'}}>Email</StyledTableCell>
                    <StyledTableCell sx={{fontFamily:'Poppins, sans-serif'}} align="center">Detail</StyledTableCell>
                </TableRow>
            </TableHead>
            <TableBody>
            {data.length > 0 ? data.map((row) => (
                <StyledTableRow key={row._id}>
                    <StyledTableCell sx={{fontFamily:'Poppins, sans-serif'}} component="th" scope="row">
                        {row.name}
                    </StyledTableCell>
                    <StyledTableCell sx={{fontFamily:'Poppins, sans-serif'}} component="th" scope="row">
                        {row.email}
                    </StyledTableCell>
                    <StyledTableCell sx={{fontFamily:'Poppins, sans-serif'}} align="center">
                        <Tooltip title="Reply">
                            <IconButton href={`/reply/${row._id}`} aria-label="info" color='info'>
                                <ReplyIcon />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Delete">
                            <IconButton onClick={() =>handleDelete(row._id)} aria-label="delete" color='error'>
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

export default Mail
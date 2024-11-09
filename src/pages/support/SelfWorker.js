import React, { useEffect, useState } from 'react'
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
import InfoIcon from '@mui/icons-material/Info';
import DeleteIcon from '@mui/icons-material/Delete';
import axiosInstance from '../../service/axiosInstance'
import { useDispatch, useSelector } from 'react-redux';
import { retrieveEmp } from '../../feature/selfWorkSlice';
import { message } from 'antd';
import VerifiedIcon from '@mui/icons-material/Verified';

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


const SelfEmployee = () => {
    const dispatch = useDispatch()
    const SelfEmp = useSelector(state => state.sw.sw)
    const [data, setData] = useState([])
    const [editingItem, setEditingItem] = useState(null);


    useEffect(()=> {
        setData(SelfEmp)
    }, [SelfEmp]);

    useEffect(()=> {
        dispatch(retrieveEmp())
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleUpdateWithValid = async (id) =>{
        try {
          // Send PUT request to the server
            const response = await axiosInstance.put(`/update/self_work/${id}`, {
            valid: true
        });
        if (response.status === 200) {
          // If successful, update the state with the new data
            const updatedData = data.map(item =>
            item._id === id ? { ...item, valid: true } : item
        );
            setData(updatedData);
            setEditingItem(null); // Exit edit mode
            message.success(response.data.message)
        } else {
            message.error('Failed to update the item');
        }
        } catch (error) {
          // Handle errors
            message.error('Error updating item');
        }
    }

    const handleUpdateWithNotValid = async (id) =>{
        try {
          // Send PUT request to the server
            const response = await axiosInstance.put(`/update/self_work/${id}`, {
            valid: false
        });
        if (response.status === 200) {
          // If successful, update the state with the new data
            const updatedData = data.map(item =>
            item._id === id ? { ...item, valid: false } : item
        );
            setData(updatedData);
            setEditingItem(null); // Exit edit mode
            message.success(response.data.message)
        } else {
            message.error('Failed to update the item');
        }
        } catch (error) {
          // Handle errors
            message.error('Error updating item');
        }
    }

    const handleDelete = async (id) =>{
        try {
            const response = await axiosInstance.delete(`/del/self_work/${id}`);
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
            {/* <Typography sx={{fontFamily:'Poppins, sans-serif', fontSize:"25px", textAlign:"center"}}>List of MonoSite</Typography> */}
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell sx={{fontFamily:'Poppins, sans-serif'}}>Email</StyledTableCell>
                            <StyledTableCell sx={{fontFamily:'Poppins, sans-serif'}} align="center">Detail</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {data.length > 0 ? data.map((row) => (
                        <StyledTableRow key={row._id}>
                            <StyledTableCell sx={{fontFamily:'Poppins, sans-serif'}} component="th" scope="row">
                                {row.portefolio}
                            </StyledTableCell>
                            <StyledTableCell sx={{fontFamily:'Poppins, sans-serif'}} align="center">
                                <Tooltip title="More">
                                    <IconButton href={`/detail/sw/${row._id}`} aria-label="info" color='info'>
                                        <InfoIcon />
                                    </IconButton>
                                </Tooltip>
                                {row.notApprouve === false ?
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
                                    <IconButton onClick={() => handleDelete(row._id)} aria-label="delete" color='error'>
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

export default SelfEmployee
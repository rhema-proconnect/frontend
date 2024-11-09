import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { retrieveSuser } from '../../feature/sUserSlice'
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
import axiosInstance from '../../service/axiosInstance';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
// import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import { retrieveUser } from '../../feature/userSlice';
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


const SimpleUsers = () => {
  const dispatch = useDispatch()
  const Suser = useSelector(state => state.suser.suser)
  // const Users = useSelector(state => state.user.users)
  const [data, setData] = useState([])
  const [editingItem, setEditingItem] = useState(null);

  const [isToggled, setIsToggled] = useState(false);

  // Function to handle the toggle
  // const handleToggle = () => {
  //   setIsToggled(prevState => !prevState);
  // };

  

  useEffect(()=> {
    setData(Suser)
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Suser]);

  useEffect(()=> {
    dispatch(retrieveSuser())
    dispatch(retrieveUser())
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const downloadFile = async (id) => {
    try {
      const res = await axiosInstance.get(
        `/download/${id}`,
        { responseType: "blob" }
      );
      const blob = new Blob([res.data], { type: res.data.type });
      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = "file.pdf";
      link.click();
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdateWithValid = async (id) =>{
    try {
      // Send PUT request to the server
      const response = await axiosInstance.put(`/auth/users/${id}`, {
        role: "Support",
      });
    // if (response.status === 200) {
    //   // If successful, update the state with the new data
    //   const updatedData = data.map(item =>
    //     item._id === id ? { ...item, status: true, valid: true } : item
    //   );
    //   setData(updatedData);
    //   setEditingItem(null); // Exit edit mode
  //   } else {
  //     console.error('Failed to update the item:', response.status);
  //   }
      setIsToggled(prevState => !prevState);
      message.success(response.data.message)
  } 
  catch (error) {
      // Handle errors
      console.error('Error updating item:', error);
    }
  }

  const handleUpdateWithNotValid = async (id) =>{
    try {
      // Send PUT request to the server
      const response = await axiosInstance.put(`/auth/users/${id}`, {
        role: "Users",
      });
      setIsToggled(prevState => !prevState);
      message.success(response.data.message)
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
      const updatedData = data.map(item =>
        item._id === id ? { ...item, notApprouve: true } : item
      );
      setData(updatedData);
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
      const updatedData = data.map(item =>
        item._id === id ? { ...item, notApprouve: false } : item
      );
      setData(updatedData);
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
      const response = await axiosInstance.delete(`/del/suser/${id}`);
      if (response.status === 200) {
        // If successful, update the state to remove the item
        const res = data.filter(item => item._id !== id);
        setData(res)
      } else {
        message.error('Failed to delete the item');
      }
      // message.success(response.data.message)
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
      <Typography sx={{fontFamily:'Poppins, sans-serif', fontSize:"25px", textAlign:"center"}}>List of MonoSite</Typography>
          <TableContainer component={Paper}>
              <Table sx={{ minWidth: 700 }} aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell sx={{fontFamily:'Poppins, sans-serif'}}>Name</StyledTableCell>
                      {/* <StyledTableCell sx={{fontFamily:'Poppins, sans-serif'}} align="center">File</StyledTableCell> */}
                      <StyledTableCell sx={{fontFamily:'Poppins, sans-serif'}} align="center">Detail</StyledTableCell>
                    </TableRow>
                  </TableHead> 
                  <TableBody>
                  {Suser.length >0 ? Suser.map((row)  => (
                      <StyledTableRow key={row._id}>
                          <StyledTableCell sx={{fontFamily:'Poppins, sans-serif'}} component="th" scope="row">
                            New User
                          </StyledTableCell>
                        
                          {/* <StyledTableCell sx={{fontFamily:'Poppins, sans-serif'}} align="center">{row.description}</StyledTableCell> */}
                          <StyledTableCell sx={{fontFamily:'Poppins, sans-serif'}} align="center">
                            <Tooltip title="Download">
                              <IconButton onClick={() => downloadFile(row._id)} aria-label="info" color='info'>
                                <CloudDownloadIcon />
                              </IconButton>
                            </Tooltip>
                            <Tooltip title="More">
                              <IconButton href={`/detail/suser/${row._id}`} aria-label="info" color='info'>
                                <InfoIcon />
                              </IconButton>
                            </Tooltip>
                            <Tooltip title="Delete">
                              <IconButton  onClick={(e) => handleDelete(row._id)} aria-label="delete" color='error'>
                                <DeleteIcon />
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
                          </StyledTableCell>
                          </StyledTableRow>
                  )):<>No data</>}
                  </TableBody>
              </Table>
          </TableContainer>
    </Box>
  )
}

export default SimpleUsers
import React, { useEffect, useState } from 'react'
import axiosInstance from '../../service/axiosInstance';
import { useParams } from 'react-router-dom';
import { Box, Button, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useDispatch, useSelector } from 'react-redux';
import { retrieveUser } from '../../feature/userSlice';
import { message } from 'antd';
import VerifiedIcon from '@mui/icons-material/Verified';


// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary, 
// }));

const DetailPV = () => {
    const {id} = useParams()
    // const navigate = useNavigate()
    const dispatch = useDispatch()
    const Cpny = useSelector(state => state.cpny.cpny)
    // const [cpny, setCpnyData] = useState('')
    const [datas, setData] = useState('');
    const Users = useSelector(state => state.user.users)
    const [userData, setUserData] = useState([]) 
    // const [selectedItem, setSelectedItem] = useState("");
    // const [idData, setIdData] = useState();

    // const handleChange = (event) => {
    //   setData(event.target.value);
    // };

      // console.log(data)

        // useEffect(() => {
        //   axiosInstance.get("/company/"+id)
        //   .then(res =>{
        //       // console.log(res.data.users)
        //       setCpnyData(res.data.data)
        //   })
        //   .catch(err => console.log(err))
        //   //eslint-disable-next-line react-hooks/exhaustive-deps
        // }, []); 
        
        
        useEffect(() => {
          const fetchSingleItem1 = () => {
            const test = Cpny?.filter(data => data?._id === id);
              test?.map(data => setData(data))
          }; 
          const fetchSingleItem2 = () => {
              const test = Users?.filter(data => data?._id === datas.user);
              test?.map(data => setUserData(data))
          };
          fetchSingleItem1()
          fetchSingleItem2()
          //eslint-disable-next-line react-hooks/exhaustive-deps
        }, [Users, Cpny]);

        useEffect(()=> { 
          dispatch(retrieveUser())
          //eslint-disable-next-line react-hooks/exhaustive-deps
        }, [dispatch]);

        const SelectCompanyRole = async (e) => {
          e.preventDefault();
          try {
            const response = await axiosInstance.put(`/auth/users/${userData._id}`, {role:"Company"});
            // console.log('Data updated:', response);
            message.success(response.data.message)
            window.location.reload();
          } catch (error) {
            console.error('There was an error updating the data!', error);
          } 
        }

        const RemoveCompanyRole = async (e) => {
          e.preventDefault();
          try {
            const response = await axiosInstance.put(`/auth/users/${userData._id}`, {role:"Users"});
            // console.log('Data updated:', response);
            message.success(response.data.message)
            window.location.reload();
          } catch (error) {
            console.error('There was an error updating the data!', error);
          } 
        }

        const Approuved = async (e) => {
          e.preventDefault();
          try {
            const response = await axiosInstance.put(`/update/company/${id}`, {isApprouve: true});
            // console.log('Data updated:', response);
            message.success(response.data.message)
            window.location.reload();
          } catch (error) {
            console.error('There was an error updating the data!', error);
          } 
        }
        const NotApprouved = async (e) => {
          e.preventDefault();
          try {
            const response = await axiosInstance.put(`/update/company/${id}`, {isApprouve: false});
            // console.log('Data updated:', response);
            message.success(response.data.message)
            window.location.reload();
          } catch (error) {
            console.error('There was an error updating the data!', error);
          } 
        }
  
  return (
    <Box marginTop={-70} marginLeft={60}>
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid xs={6}>
          <Typography>role:{userData?.role}</Typography>
          <Typography>Company's name:{datas.name}</Typography>
          <Typography>Description:{datas.description}</Typography> 
          <Typography>Name:{datas.username}</Typography>
          <Typography>Website:{datas.website}</Typography> 
          <Typography>Certification:{datas.certi}</Typography>
          <Typography>Industry:{datas.industry}</Typography>
        </Grid>
        <Grid xs={6}>
          <Typography>Email:{datas.email}</Typography>
          <Typography>Address:{datas.address}</Typography>
        {/* <Typography>mapp:{cpny.mapp}</Typography> */}
        </Grid>
      </Grid>
      <Stack spacing={2} marginLeft={20} marginTop={4} direction="row" fontFamily={'Poppins, sans-serif'}>
          <Button variant="contained" onClick={SelectCompanyRole} color="success" startIcon={<VerifiedIcon />}>Give Acess</Button>
          <Button variant="outlined" color="error" onClick={RemoveCompanyRole} startIcon={<VerifiedIcon />}>Remove Acess</Button>
          <Button variant="outlined" onClick={Approuved}>Approuved</Button>
          <Button color="secondary" onClick={NotApprouved}>Not Approuved</Button>
      </Stack> 
      {/* <Box
        component="form"
        onSubmit={handleSubmit}
        width={200} 
      >
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Choose Role</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={data}
            label="Role"
            onChange={handleChange}
          >
            <MenuItem value="Users">Users</MenuItem>
            <MenuItem value="Company">Company</MenuItem>
            <MenuItem value="Student">Student</MenuItem>
        </Select>
      </FormControl>
        <Button onClick={handleSubmit} variant="contained">Valid</Button>
      </Box> */}
    </Box>
  )
}

export default DetailPV
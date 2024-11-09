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
import { message } from 'antd';
import VerifiedIcon from '@mui/icons-material/Verified';
import { retrieveEmp } from '../../feature/selfWorkSlice';
import { retrieveUser } from '../../feature/userSlice';
import { Worker, Viewer } from '@react-pdf-viewer/core';


const DetailSelfEmp = () => {
    const {id} = useParams()
    // const navigate = useNavigate()
    const dispatch = useDispatch()
    const SelfEmp = useSelector(state => state.sw.sw)
    const [datas, setData] = useState('');
    const Users = useSelector(state => state.user.users)
    const [userData, setUserData] = useState([]) 
    const [selectedPdf, setSelectedPdf] = useState('');

    // const fetchFiles = async () => {
    //     try {
    //       const res = await axiosInstance.get('/fileGet/'+id);
    //       setSelectedPdf(res.data.data);
    //       // console.log(res.data.data);
    //     } catch (err) {
    //       console.error(err);
    //     }
    //   };

      useEffect(() => {
        const fetchSingleItem1 = () => {
          const test = SelfEmp?.filter(data => data?._id === id);
          // console.log(test)
            test?.map(data => setData(data))
        }; 
        const fetchSingleItem2 = () => {
            const test = Users?.filter(data => data?._id === datas.user);
            test?.map(data => setUserData(data))
        };
        fetchSingleItem1()
        fetchSingleItem2()
        // fetchFiles()
        //eslint-disable-next-line react-hooks/exhaustive-deps
      }, [Users, SelfEmp]);
    
    useEffect(()=> {
        dispatch(retrieveUser())
        dispatch(retrieveEmp())
      //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch]);

    const Approuved = async () => {
        // e.preventDefault();
        try {
            const response = await axiosInstance.put(`/update/self_work/${id}`, {notApprouve: true});
          // console.log('Data updated:', response);
            message.success(response.data.message)
            window.location.reload();
        } catch (error) {
            console.error('There was an error updating the data!', error);
        } 
    }

    const SelectCompanyRole = async (e) => {
        e.preventDefault();
        try {
            const response = await axiosInstance.put(`/auth/users/${userData._id}`, {role:"Selfworker"});
          // console.log('Data updated:', response);
          Approuved()
            message.success(response.data.message)
            // window.location.reload();
        } catch (error) {
            console.error('There was an error updating the data!', error);
        } 
    }
    
    const NotApprouved = async () => {
        // e.preventDefault();
        try {
            const response = await axiosInstance.put(`/update/self_work/${id}`, {notApprouve: false});
          // console.log('Data updated:', response);
            message.success(response.data.message)
            // window.location.reload();
        } catch (error) {
            console.error('There was an error updating the data!', error);
        } 
    }
    const RemoveCompanyRole = async (e) => {
        e.preventDefault();
        try {
            const response = await axiosInstance.put(`/auth/users/${userData._id}`, {role:"Users"});
            // console.log('Data updated:', response);
            NotApprouved()
            message.success(response.data.message)
            window.location.reload();
        } catch (error) {
            console.error('There was an error updating the data!', error);
        } 
    }
    

    return (
        <Box marginTop={-70} marginLeft={30} marginBottom={20}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid xs={6}>
              <Typography>Username:{userData?.username}</Typography>
              <Typography>Email:{userData?.email}</Typography>
              <Typography>role:{userData?.role}</Typography>
              <Typography>portefolio:{datas?.portefolio}</Typography>
              <Typography>references:{datas?.references}</Typography>
              {datas?.notApprouve === false? <Typography>Approuved : No</Typography>:<Typography>Approuved : Yes</Typography>}
              <Stack spacing={2} direction="row" fontFamily={'Poppins, sans-serif'}>
                <Button variant="contained" onClick={SelectCompanyRole} color="success" startIcon={<VerifiedIcon />}>Give Acess</Button>
                <Button variant="outlined" color="error" onClick={RemoveCompanyRole} startIcon={<VerifiedIcon />}>Remove Acess</Button>
                {/* <Button variant="outlined" onClick={Approuved}>Approuved</Button>
                <Button color="secondary" onClick={NotApprouved}>Not Approuved</Button> */}
                {/* <Button variant="outlined" color="secondary" onClick={fetchFiles}>Read File</Button> */}
              </Stack>
              {/* <Typography>role:{userData?.role}</Typography> */}
              {/*<Typography>Company's name:{datas.name}</Typography>
              <Typography>Description:{datas.description}</Typography> 
              <Typography>Name:{datas.username}</Typography> 
              <Typography>Website:{datas.website}</Typography> 
              <Typography>Certification:{datas.certi}</Typography>
              <Typography>Industry:{datas.industry}</Typography> */}
            </Grid>
            <Grid xs={6}>
              <Box sx={{width:500, marginTop:-30, marginLeft:-30}}>
              <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                <Viewer fileUrl={`http://localhost:8080/${datas.register_number}`} />
              </Worker>
            </Box>
            </Grid>
          </Grid>
          
        </Box>
    )
}

export default DetailSelfEmp
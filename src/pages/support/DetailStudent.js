import { Box, Button, Grid, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { retrieveUser } from '../../feature/userSlice'
import { retrieveSdt } from '../../feature/studentSlice'
import axiosInstance from '../../service/axiosInstance'
import { message } from 'antd'
import VerifiedIcon from '@mui/icons-material/Verified';
import { Worker, Viewer } from '@react-pdf-viewer/core';

const DetailStudent = () => {
  const {id} = useParams()
  // const navigate = useNavigate()
  const dispatch = useDispatch()
  const Sdt = useSelector(state => state.sdt.sdt)
  const [datas, setData] = useState('');
  const Users = useSelector(state => state.user.users)
  const [userData, setUserData] = useState([]) 
  const [selectedPdf, setSelectedPdf] = useState('');
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }


  useEffect(() => {
    const fetchSingleItem1 = () => {
      const test = Sdt?.filter(data => data?._id === id);
      // console.log(test)
        test?.map(data => setData(data))
    }; 
    const fetchSingleItem2 = () => {
        const test = Users?.filter(data => data?._id === datas.user);
        test?.map(data => setUserData(data))
    };
    fetchSingleItem1()
    fetchSingleItem2()
    // console.log(datas)
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Users, Sdt]);

  useEffect(()=> {
    dispatch(retrieveUser())
    dispatch(retrieveSdt())
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const Approuved = async () => {
    // e.preventDefault();
    try {
      const response = await axiosInstance.put(`/update/sdt/${id}`, {notApprouve: true});
      // console.log('Data updated:', response);
      message.success(response.data.message)
      window.location.reload();
    } catch (error) {
      message.error('There was an error updating the data!');
    } 
  }

  const NotApprouved = async () => {
    // e.preventDefault();
    try {
      const response = await axiosInstance.put(`/update/sdt/${id}`, {notApprouve: false});
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
      const response = await axiosInstance.put(`/auth/users/${userData._id}`, {role:"Student"});
      // console.log('Data updated:', response);
      Approuved()
      message.success(response.data.message)
      window.location.reload();
    } catch (error) {
      message.error('There was an error updating the data!');
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
    <Box marginTop={-70} marginLeft={35} paddingBottom={20}>
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid xs={6}>
          <Typography>Username:{userData?.username}</Typography>
          <Typography>Email:{userData?.email}</Typography>
          <Typography>role:{userData?.role}</Typography>
          {datas?.notApprouve === false ? <Typography>Approuved : No</Typography>:<Typography>Approuved : Yes</Typography>}
          <Stack spacing={2} marginTop={4} direction="row" fontFamily={'Poppins, sans-serif'}>
              <Button variant="contained" onClick={SelectCompanyRole} color="success" startIcon={<VerifiedIcon />}>Give Acess</Button>
              <Button variant="outlined" color="error" onClick={RemoveCompanyRole} startIcon={<VerifiedIcon />}>Remove Acess</Button>
              {/* <Button variant="outlined" onClick={Approuved}>Approuved</Button>
              <Button color="secondary" onClick={NotApprouved}>Not Approuved</Button> */}
          </Stack>
        </Grid>
        <Grid xs={6}>
          <Box sx={{width:500, marginTop:-30, marginLeft:-30}}>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
              <Viewer fileUrl={`http://localhost:8080/${datas.pdf1}`} />
            </Worker>
          </Box>
          <Box sx={{width:500, marginTop:-73, marginLeft:20}}>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
              <Viewer fileUrl={`http://localhost:8080/${datas.pdf2}`} />
            </Worker>
          </Box>
        </Grid>
      </Grid>
      {/* <Stack spacing={2} marginLeft={-20} marginTop={4} direction="row" fontFamily={'Poppins, sans-serif'}>
      </Stack> */}
    </Box>
  )
}

export default DetailStudent
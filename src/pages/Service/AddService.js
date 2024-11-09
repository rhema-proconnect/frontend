import React, { useEffect, useState } from 'react';
import { retrieveUser } from '../../feature/userSlice';
import {jwtDecode} from 'jwt-decode';
import { Box, FormControl, Select, InputLabel, MenuItem, TextField, Typography, Button, Stack } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import axiosInstance from '../../service/axiosInstance';
import { Link, useNavigate } from 'react-router-dom';
import { retrievePage } from '../../feature/pageSlice';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
import ImageIcon from '@mui/icons-material/Image';
import { message, Popconfirm } from 'antd';
import { useTranslation } from 'react-i18next';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import dayjs from 'dayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});


const AddService = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const Page = useSelector(state => state.page.page)
    const { userInfo } = useSelector((state) => state.auth)
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [pag, setPageData] = useState(Page || "");
    const [allPage, setAllPage] = useState([])
    const [user, setUserData] = useState([])
    const [file, setFile] = useState(null);
    const [hourBegin1, setHourBegin1] = useState(dayjs(''))
    const [hourEnd1, setHourEnd1] = useState(dayjs(''))
    const [hourBegin2, setHourBegin2] = useState(dayjs(''))
    const [hourEnd2, setHourEnd2] = useState(dayjs(''))
    const [price, setPrice] = useState('')
    // const [messageApi, contextHolder] = message.useMessage();


    // const success = () => {
    //     messageApi
    //     .open({
    //         type: 'loading',
    //         content: 'Action in progress..',
    //         duration: 2.5,
    //     })
    //     .then(() => message.success('Loading finished', 2.5))
    //     .then(() => message.info('Loading finished', 2.5));
    // };
    
    const onChangeName = (e) =>{
        setName(e.target.value)
    }

    const onChangePrice = (e) =>{
        setPrice(e.target.value)
    }

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const onChangeDescription = (e) =>{
        setDescription(e.target.value)
    }

    const onChangePage = (event) => {
        // console.log(event.target.value);
        setPageData(event.target.value);
    }

    // const UserInfoData = () => {
    //     const accessToken = userInfo; 
    //     const decodedPayload = jwtDecode(accessToken);
    //     setUserData(decodedPayload._id);
    // }

    useEffect(()=> {
        // UserInfoData()
        const accessToken = userInfo; 
        const decodedPayload = jwtDecode(accessToken);
        setUserData(decodedPayload._id);
        // console.log(Page)
        const test = Page.filter(one => one.user === decodedPayload._id)
        // console.log("test",test)
        setAllPage(test)
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [Page]);

    useEffect(()=> {
        dispatch(retrieveUser())
        dispatch(retrievePage())
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch]);

    const handleSubmit = async () =>{
        const formData = new FormData();
        formData.append('name', name);
        formData.append('description', description);
        formData.append('price', price)
        formData.append('pag', pag);
        formData.append('user', user);
        formData.append('image', file);
        formData.append('hourBegin1', hourBegin1);
        formData.append('hourEnd1', hourEnd1);
        formData.append('hourBegin2', hourBegin2);
        formData.append('hourEnd2', hourEnd2);
        try {
            const response = await axiosInstance.post(`/add/service`, formData);
            message.success(response.data.message);
            // console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    const confirm = (e) => {
        handleSubmit()
        navigate(-1)
    };

    const cancel = (e) => {
        console.log(e);
        // message.error('Votre');
    };

    return (
            <Box
                component="form"
                sx={{
                    width: '55ch',
                    marginTop: -70,
                    marginLeft: 70,
                }}
                noValidate
                autoComplete="off"
                // onSubmit={handleSubmit}
            >
                {/* {contextHolder} */}
                <Typography fullWidth variant="h6" sx={{marginLeft: 20, fontFamily:'Poppins, sans-serif'}}>Add Service</Typography><br />
                <TextField fullWidth onChange={onChangeName} value={name} id="outlined-basic" fontFamily={'Poppins, sans-serif'} label="Name" variant="outlined" /><br /><br />
                <TextField fullWidth value={price} onChange={onChangePrice} id="outlined-basic" label="Price" variant="outlined" /><br /><br />
                <TextField
                    id="outlined-multiline-static"
                    label="Description"
                    multiline
                    rows={4}
                    value={description}
                    onChange={onChangeDescription}
                    fullWidth
                /><br /><br />
                <Typography fullWidth sx={{marginLeft: 20, fontFamily:'Poppins, sans-serif'}}>Lundi-Vendredi</Typography>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['TimePicker']}>
                        <TimePicker sx={{width:400, fontFamily:'Poppins, sans-serif'}} label={t('hourBegin')} format="HH:mm" value={hourBegin1} onChange={(newValue) => setHourBegin1(newValue)} />
                        <TimePicker sx={{width:400, fontFamily:'Poppins, sans-serif'}} label={t('hourEnd')} format="HH:mm" value={hourEnd1} onChange={(newValue) => setHourEnd1(newValue)}/>
                    </DemoContainer>
                </LocalizationProvider><br /><br />
                <Typography fullWidth sx={{marginLeft: 20, fontFamily:'Poppins, sans-serif'}}>Samedi</Typography>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['TimePicker']}>
                        <TimePicker sx={{width:400, fontFamily:'Poppins, sans-serif'}} label={t('hourBegin')} format="HH:mm" value={hourBegin2} onChange={(newValue) => setHourBegin2(newValue)} />
                        <TimePicker sx={{width:400, fontFamily:'Poppins, sans-serif'}} label={t('hourEnd')} format="HH:mm" value={hourEnd2} onChange={(newValue) => setHourEnd2(newValue)}/>
                    </DemoContainer>
                </LocalizationProvider><br /><br />
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Select Monosite</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Select Monosite"
                        value={pag}
                        // key={page.id}
                        onChange={onChangePage}
                    >
                        {
                            allPage.map(page =>
                                page.isApprouve === true &&
                                <MenuItem key={page.id} value={page._id}>{page.name}</MenuItem>
                            )
                        } 
                    </Select> 
                </FormControl>
                <Stack spacing={2} marginLeft={28} marginTop={2} direction="row">
                <Button
                    component="label"
                    role={undefined}
                    variant="contained"
                    tabIndex={-1}
                    startIcon={<CloudUploadIcon />}
                >
                    <ImageIcon />
                    <VisuallyHiddenInput type="file" onChange={handleFileChange} />
                </Button>
                    {/* <Button variant="outlined">Cancel</Button> */}
                    <Popconfirm
                        title="Confirmez votre demande"
                        description="Avant de cliquez sur le button Ok, verifier correctement les informations que vous envoyez"
                        onConfirm={confirm}
                        onCancel={cancel}
                        okText="Yes"
                        cancelText="No"
                    >
                        <Button variant="outlined">Add</Button>
                    </Popconfirm>
                </Stack>
            </Box>
    )
}

export default AddService
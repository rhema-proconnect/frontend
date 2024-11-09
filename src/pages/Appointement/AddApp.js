import React, { useEffect, useState } from 'react'
import { Typography, Button, TextField, Box, Stack } from '@mui/material';
import axiosInstance from '../../service/axiosInstance';
import { useNavigate, useParams } from 'react-router-dom';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import dayjs from 'dayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { notification, Popconfirm, message } from 'antd';
// import { SmileOutlined } from '@ant-design/icons';
import { useTranslation } from "react-i18next";
import { useSelector } from 'react-redux';
import {jwtDecode} from 'jwt-decode';
import { LocaldateHours } from '../../utils/uuidv4';


const AddApp = () => {
    const  { id } = useParams()
    var localDate =new Date();
    const { t } = useTranslation();
    const navigate = useNavigate()
    const Users = useSelector(state => state.user.users)
    const { userInfo } = useSelector((state) => state.auth)
    const [userData, setUserData] = useState([])
    const [name, setName] = useState('')
    const [objective, setObjective] = useState('')
    const [hourBegin, setHourBegin] = useState(dayjs(''))
    const [hourEnd, setHourEnd] = useState(dayjs(''))
    const [date, setDate] = useState(dayjs(''))
    const [servData, setServData] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")
    // const [api, contextHolder] = notification.useNotification();
    // const [message, setMessage] = useState("")


    const onChangeName = (e) => {
        setName(e.target.value)
    }
    const onChangePhone = (e) => {
        setPhone(e.target.value)
    }
    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }
    const onChangeAddress = (e) => {
        setAddress(e.target.value)
    }

    const onChangeObjectif = (e) =>{
        setObjective(e.target.value)
    }

    useEffect(() => {
        axiosInstance.get("/service/"+id)
        .then(res =>{
            setServData(res.data.data)
        })
        .catch(err => console.log(err))

        const accessToken = userInfo; 
        const decodedPayload = jwtDecode(accessToken); 
        const data = (Users || []).find(user => user._id === decodedPayload._id);
        setUserData(data);
        console.log(localDate)
         //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [Users]); 

    const handleSubmit = async () => {
        // e.preventDefault();
        const serv = id
        const user = servData.user
        const client = userData._id
        try {
            const response = await axiosInstance.post(`/create/app`, {
                name,
                date,
                hourBegin,
                hourEnd,
                objective,
                address,
                email,
                phone,
                serv,
                client,
                user
            });
            // console.log(response.data)
            message.success(response.data.message)
            // 
        } catch (error) {
            console.log(error);
        }
    };

    const confirm = (e) => {
        handleSubmit()
        // console.log(messageData);
        // message.success("Votre demande de  Monosite a été envoyer avec succes");
        // navigate("/dash")
        navigate(-1)
    };

    const cancel = (e) => {
        console.log(e);
        // message.error('Click on No');
    };


return (
    <div>
        {/* {contextHolder} */}
        <Box 
            component="form"
            labelCol={{span: 6}}
            wrapperCol={{span: 14,}}
            layout="horizontal"
            style={{
                maxWidth: 600, 
                marginTop: 150,
                marginLeft: 400,
            }}
            // onClick={handleSubmit}
        >
            <Typography marginLeft={4} variant="h5" sx={{fontFamily:'Poppins, sans-serif'}}>
                Ajouter un rendez-vous
            </Typography>
            <TextField
                label={t('nameF')}
                variant="outlined"
                onChange={onChangeName}
                value={name}
                sx={{width:600, fontFamily:'Poppins, sans-serif'}}
            />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DatePicker']}>
                    <DatePicker minDate={dayjs(localDate.toString())} sx={{width:600, fontFamily:'Poppins, sans-serif'}} label={t('date')} format="LL" value={date} onChange={(e) => setDate(e)}/>
                </DemoContainer>
                <DemoContainer components={['TimePicker']}>
                    <TimePicker  sx={{width:400, fontFamily:'Poppins, sans-serif'}} label={t('hourBegin')} format="HH:mm" value={hourBegin} onChange={(newValue) => setHourBegin(newValue)} />
                    <TimePicker sx={{width:400, fontFamily:'Poppins, sans-serif'}} label={t('hourEnd')} format="HH:mm" value={hourEnd} onChange={(newValue) => setHourEnd(newValue)}/>
                </DemoContainer>
            </LocalizationProvider>
            <TextField
                label="Email"
                type='email'
                required
                variant="outlined"
                onChange={onChangeEmail}
                value={email}
                sx={{width:600, marginTop:1, fontFamily:'Poppins, sans-serif'}}
            />
            <TextField
                label="Phone number"
                type="number"
                required
                variant="outlined"
                onChange={onChangePhone}
                value={phone}
                sx={{width:600, marginTop:1, fontFamily:'Poppins, sans-serif'}}
            />
            <TextField
                label="Address" 
                variant="outlined"
                onChange={onChangeAddress}
                value={address}
                sx={{width:600, marginTop:1, fontFamily:'Poppins, sans-serif'}}
            />
            <TextField
                label="Objectif" 
                variant="outlined"
                required
                onChange={onChangeObjectif}
                value={objective}
                sx={{width:600, marginTop:1, fontFamily:'Poppins, sans-serif'}}
            />
            <TextField
                disabled="true"
                variant="outlined"
                value={servData.name}
                sx={{width:600, marginTop:1, fontFamily:'Poppins, sans-serif'}}
            />
            <Stack spacing={2} marginLeft={55} marginTop={2} direction="row" fontFamily={'Poppins, sans-serif'}>
                <Button variant="contained">Cancel</Button>
                <Popconfirm
                    title="Confirmez votre demande"
                    onConfirm={confirm}
                    onCancel={cancel}
                    okText="Yes"
                    cancelText="No"
                >
                    <Button variant="outlined">Ajouter</Button>
                </Popconfirm>
            </Stack>
        </Box>
    </div>
  )
}

export default AddApp
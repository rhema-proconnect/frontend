import { Box, Button, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axiosInstance from '../../service/axiosInstance';
import { useSelector } from 'react-redux';
import { message } from 'antd';

const DetailSU = () => {
    const {id} = useParams()
    const Suser = useSelector(state => state.suser.suser)
    const Users = useSelector(state => state.user.users)
    const [datas, setData] = useState([])
    const [userData, setUserData] = useState([])

    useEffect(() => {
        const fetchSingleItem1 = () => {
            const test = Suser?.filter(data => data?._id === id);
            test?.map(data => setData(data))
        }; 
        const fetchSingleItem2 = () => {
            const test = Users?.filter(data => data?._id === datas.user);
            test?.map(data => setUserData(data))
        };

        fetchSingleItem1()
        fetchSingleItem2()
        // console.log(userData)
        // console.log(datas)
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [Users, Suser]);

    const handleSubmit = async () => {
        // e.preventDefault();
        try {
            const response = await axiosInstance.put(`/auth/users/${userData._id}`, {role:"Support"});
            // console.log('Data updated:', response);
            message.success(response.data.message)
            window.location.reload();
        } catch (error) {
            console.error('There was an error updating the data!', error);
        } 
    }

    const handleUpdate = async () => {
        // e.preventDefault();
        try {
            const response = await axiosInstance.put(`/auth/users/${userData._id}`, {role:"Users"});
            // console.log('Data updated:', response);
            message.success(response.data.message)
            window.location.reload();
        } catch (error) {
            console.error('There was an error updating the data!', error);
        }
    }

    return (
        <Box marginTop={-70} marginLeft={60}>
            <Typography>Username: {userData.username}</Typography>
            <Typography>Email: {userData.email}</Typography>
            <Typography>Role: {userData.role}</Typography>
            <Stack spacing={2} direction="row">
                <Button onClick={handleSubmit} variant="contained">Valid</Button>
                <Button onClick={handleUpdate} variant="outlined">Not Approuved</Button>
            </Stack>
        </Box>
    )
} 

export default DetailSU
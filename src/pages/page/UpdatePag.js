import React, { useEffect, useState } from 'react';
import { Box, TextField, Typography, Button, Stack } from '@mui/material';
import axiosInstance from '../../service/axiosInstance';
import { useNavigate, useParams } from 'react-router-dom';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
import ImageIcon from '@mui/icons-material/Image';
import { message, Popconfirm } from 'antd';
import Spinner from '../../components/Spinner';

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

const UpdatePag = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [cat, setCat] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [serviceNumber, setServiceNumber] = useState("");
    const [image, setFile] = useState(null);
    const [loadingChart, setLoadingChart] = useState(false);
    const [page, setPageData] = useState('')
    const [editingItem, setEditingItem] = useState(null);


    const onChangeName = (e) =>{
        setName(e.target.value)
    }
    const onChangeCat = (e) =>{
        setCat(e.target.value)
    }

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const onChangeDescription = (e) =>{
        setDescription(e.target.value)
    }

    const onChangeNumber = (e) =>{
        setServiceNumber(e.target.value)
    }
    const onChangePhoneNumber = (e) =>{
        setPhoneNumber(e.target.value)
    }

    useEffect(()=> {
        const fetchData = async () => {
            axiosInstance.get("/page/"+id)
            .then(res =>{
                setName(res.data.data.name)
                setDescription(res.data.data.description)
                setServiceNumber(res.data.data.serviceNumber)
                setPhoneNumber(res.data.data.phoneNumber)
                setCat(res.data.data.cat)
                // setData(res.data.data.isApprouve)
                })
            .catch(err => console.log(err))
            setLoadingChart(true)
            setTimeout(() =>{
                setLoadingChart(false)
            }, 2000)
    };
    fetchData()
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleUpdate = async ()  =>{
        try {
            // Send PUT request to the server
            const formData = new FormData();
            // formData.append('name', name);
            // formData.append('description', description);
            // formData.append('cat', cat);
            // formData.append('phoneNumber', phoneNumber);
            // formData.append('serviceNumber', serviceNumber);
            formData.append('image', image);
            // console.log('Data:', formData);
            const response = await axiosInstance.put(`/update/page/${id}`, formData);
            console.log('Data updated:', response);
        // if (response.status === 200) {
        //     // If successful, update the state with the new data
        //     const updatedData = page.map(item =>
        //         item._id === id ? { ...item, formData } : item
        //     );
        //     setPageData(updatedData);
        //     setEditingItem(null); // Exit edit mode
        //     console.log("cool")
        // } else {
        //     console.error('Failed to update the item:', response.status);
        // }
        } catch (error) {
            // Handle errors
            console.error('Error updating item:', error);
        }
    }

    const confirm = (e) => {
        handleUpdate()
        // console.log(messageData);
        // message.success("Votre demande de  Monosite a été envoyer avec succes");
        // navigate(-1)
    };

    const cancel = (e) => {
        console.log(e);
        // message.error('Click on No');
    };
  return (
    <>
    {loadingChart ?
        <Spinner loading={loadingChart}/>
        :
    <Box
        component="form"
        labelCol={{span: 15}}
        wrapperCol={{span: 14,}}
        layout="horizontal"
        style={{
            maxWidth: 600, 
            marginLeft: 400, 
            marginTop: -572, 
            // textAlign:"center"
        }}
            // onSubmit={handleSubmit}
    >
    <Typography fontFamily={'Poppins, sans-serif'} fontSize={20}>Mettre à jours un Monosite</Typography>
    <TextField
        fullWidth 
        id="outlined-basic" 
        onChange={onChangeName} 
        fontFamily={'Poppins, sans-serif'} 
        value={name} 
        label="Name" 
        variant="outlined" 
    /><br /><br />
    <TextField
        fullWidth 
        id="outlined-basic" 
        onChange={onChangeCat} 
        fontFamily={'Poppins, sans-serif'} 
        value={cat} 
        label="Category" 
        variant="outlined" 
    /><br /><br />
    <TextField
        fullWidth
        id="outlined-basic" 
        type="number"
        onChange={onChangePhoneNumber}
        fontFamily={'Poppins, sans-serif'} 
        value={phoneNumber} 
        label="Phone Number" 
        variant="outlined" 
    /><br /><br />
    <TextField
        fullWidth 
        variant="outlined"
        id="outlined-basic" 
        fontFamily={'Poppins, sans-serif'} 
        label="Nombre de service"
        type="number"
        onChange={onChangeNumber}
        value={serviceNumber} 
    /><br /><br />
    <TextField 
        fullWidth 
        id="outlined-multiline-static" 
        multiline
        rows={4}
        fontFamily={'Poppins, sans-serif'} 
        onChange={onChangeDescription} 
        label="Description"
        variant="outlined"
        value={description}
    /><br /><br />
    <Stack spacing={2} marginLeft={55} marginTop={2} direction="row" fontFamily={'Poppins, sans-serif'}>
        <Button
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            startIcon={<CloudUploadIcon />}
        >
            <ImageIcon />
            <VisuallyHiddenInput type="file" onChange={handleFileChange}/>
        </Button>
        <Popconfirm
            title="Confirmez votre mise à jour"
            onConfirm={confirm}
            onCancel={cancel}
            okText="Yes"
            cancelText="No"
        >
            <Button>Update</Button>
        </Popconfirm>
    </Stack>
    </Box>
    }</>
    )
}

export default UpdatePag
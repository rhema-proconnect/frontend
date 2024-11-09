import React, { useEffect, useState } from 'react';
// import { Button, message, Steps, theme, notification } from 'antd';
import { Box, TextField, Typography, Stack, Grid } from '@mui/material';
// import { FistStep, SecondStep } from '../../components/PageForm';
import axiosInstance from '../../service/axiosInstance';
import { useNavigate, useParams } from 'react-router-dom';
// import {jwtDecode} from 'jwt-decode';
// import { useSelector } from 'react-redux';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
import ImageIcon from '@mui/icons-material/Image';
import { message, Popconfirm, Space, Upload, Button } from 'antd';
import PhoneInput from 'react-phone-input-2';
// import "react-phone-input-2/lib/style.css"  
import 'react-phone-input-2/lib/material.css'
import { UploadOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
// import { ,  } from 'antd';
import {jwtDecode} from 'jwt-decode';


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

const AddPage = () => {
    const navigate = useNavigate()
    const {id} = useParams()
    const Users = useSelector(state => state.user.users)
    const Cpny = useSelector(state => state.cpny.cpny)
    const { userInfo } = useSelector((state) => state.auth)
    // const { userInfo } = useSelector((state) => state.auth)
    const [name, setName] = useState("");
    const [fullName, setFullName] = useState("");
    const [description, setDescription] = useState("");
    // const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [portfolio, setPortfolio] = useState("");
    const [experience, setExperience] = useState("");
    const [descriptionPersonnel, setDescriptionPersonnel] = useState("");
    const [cat, setCat] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [serviceNumber, setServiceNumber] = useState("");
    const [file, setFile] = useState(null);
    const [image, setImage] = useState(null);
    const [user, setUser] = useState("")
    const [insta, setInsta] = useState("")
    const [facebook, setFacebook] = useState("")
    const [tiktok, setTiktok] = useState("")
    const [userData, setUserData] = useState('')

    // const [confirmLoading, setConfirmLoading] = useState(false);
    // const [open, setOpen] = useState(false);

    // const [user, setUserData] = useState('')

    // const UserInfoData = () => {
    //     const accessToken = userInfo; 
    //     const decodedPayload = jwtDecode(accessToken);
    //     setUserData(decodedPayload._id);
    // }

    useEffect(()=> {
        const accessToken = userInfo; 
        const decodedPayload = jwtDecode(accessToken);
        const data = (Users || []).find(srv =>srv?._id === decodedPayload?._id)
        // const data1 = (Cpny || []).find(srv =>srv?.user === decodedPayload?._id)
        // setPageData(Page)
        setUserData(data)
        // setCpnyId(data1)
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [Users, Cpny]);

    useEffect(()=> {
        setUser(id)
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    const onChangeName = (e) =>{
        setName(e.target.value)
    }

    const onChangeCat = (e) =>{
        setCat(e.target.value)
    }

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };
    const handleImage = (e) => {
        setImage(e.target.files[0]);
    };

    const onChangeDescription = (e) =>{
        setDescription(e.target.value)
    }

    const onChangeNumber = (e) =>{
        setServiceNumber(e.target.value)
    }
    const onChangePort = (e) =>{
        setPortfolio(e.target.value)
    }
    const onChangeExperience = (e) =>{
        setExperience(e.target.value)
    }
    const onChangedesc = (e) =>{
        setDescriptionPersonnel(e.target.value)
    }
    const onChangeInsta = (e) =>{
        setInsta(e.target.value)
    }
    const onChangeFace = (e) =>{
        setFacebook(e.target.value)
    }
    const onChangeTiktok = (e) =>{
        setTiktok(e.target.value)
    }
    const onChangeFullName = (e) =>{
        setFullName(e.target.value)
    }
    // const onChangePhoneNumber = (e) =>{
    //     setPhoneNumber(e.target.value)
    // }

    const handleSubmit = async () => {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('description', description);
        formData.append('cat', cat);
        formData.append('phoneNumber', phoneNumber);
        formData.append('serviceNumber', serviceNumber);
        formData.append('user', user);
        formData.append('image', file);
        try {
            const response = await axiosInstance.post("add/page", formData);
            console.log("yo",response);
            // message.success(response.data.message)
        } catch (error) {
            console.log(error);
            // message.error(error)
        }
    };

    const handleSubmitStudent = async () => {
        const formData = new FormData();
        formData.append('fullName', fullName);
        formData.append('cat', cat);
        formData.append('phone', phone);
        formData.append('portfolio', portfolio);
        formData.append('experience', experience);
        formData.append('descriptionPersonnel', descriptionPersonnel);
        formData.append('user', user);
        formData.append('insta', insta);
        formData.append('tiktok', tiktok);
        formData.append('facebook', facebook);
        formData.append('image', image);
        try {
            const response = await axiosInstance.post("add/StudentM", formData);
            console.log("yo",response);
            message.success(response.data.message)
        } catch (error) {
            console.log(error);
            // message.error(error)
        }
    };

    const confirmStudent = (e) => {
        handleSubmitStudent()
        // console.log(messageData);
        // message.success("Votre demande de  Monosite a été envoyer avec succes");
        navigate("/dash")
    };

    const cancelStd = (e) => {
        console.log(e);
        // message.error('Click on No');
    };

    const confirm = (e) => {
        handleSubmit()
        // console.log(messageData);
        // message.success("Votre demande de  Monosite a été envoyer avec succes");
        navigate("/dash")
    };

    const cancel = (e) => {
        console.log(e);
        // message.error('Click on No');
    };

    return (
        <>
            {userData?.role === "Company" &&
                <Box
                    component="form"
                    labelCol={{span: 15}}
                    wrapperCol={{span: 14,}}
                    layout="horizontal"
                    style={{
                        maxWidth: 600, 
                        marginLeft: 400, 
                        marginTop: -572,
                        // marginBottom: 200 
                        // textAlign:"center"
                    }}
                        // onSubmit={handleSubmit}
                >
                    <Typography fontFamily={'Poppins, sans-serif'} fontSize={20} marginTop={50}>Ajout d'un Monosite</Typography>
                    
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
                    <PhoneInput
                        country={"af"}
                        fullWidth
                        // onlyCountries={["us"]}
                        id="outlined-basic" 
                        type="number"
                        onChange={e => setPhoneNumber(e)}
                        fontFamily={'Poppins, sans-serif'} 
                        value={phoneNumber} 
                        label="Phone Number" 
                        variant="outlined"
                        // containerStyle={{
                        //     border: "10px solid black",
                        // }}
                        inputStyle={{
                            // background: "lightblue",
                            width: "599px",
                            height: "50px"
                        }}
                    /><br />
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
                    <Stack spacing={2} marginLeft={48} marginTop={2} direction="row" fontFamily={'Poppins, sans-serif'}>
                        <Upload
                            action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                            listType="picture"
                            maxCount={1}
                        >
                            <Button onChange={handleFileChange} icon={<UploadOutlined />}>Upload logo</Button>
                        </Upload>
                        <Popconfirm
                            title="Confirmez votre demande"
                            onConfirm={confirm}
                            onCancel={cancel}
                            okText="Yes"
                            cancelText="No"
                        >
                            <Button type="primary">Valid</Button>
                        </Popconfirm>
                    </Stack>
                </Box>
            }
            {userData?.role === "Student" &&
                <Box
                    component="form"
                    labelCol={{span: 15}}
                    wrapperCol={{span: 14,}}
                    layout="horizontal"
                    style={{
                        maxWidth: 600, 
                        marginLeft: 400, 
                        marginTop: -572,
                        marginBottom: 120
                        // textAlign:"center"
                    }}
                        // onSubmit={handleSubmit}
                >
                    <Typography fontFamily={'Poppins, sans-serif'} fontSize={20} marginLeft={30}>Ajout d'un Monosite</Typography><br /><br />
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid xs={6}>
                    <TextField
                        fullWidth 
                        id="outlined-basic" 
                        onChange={onChangeFullName} 
                        fontFamily={'Poppins, sans-serif'} 
                        value={fullName} 
                        label="Full Name" 
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
                        placeholder='Exemple: Graphiste, Coiffeur, Développeur Web'
                    /><br /><br />
                    <PhoneInput
                        country={"af"}
                        fullWidth
                        id="outlined-basic" 
                        type="number"
                        onChange={e => setPhone(e)}
                        fontFamily={'Poppins, sans-serif'}
                        value={phone} 
                        label="Phone Number" 
                        variant="outlined"
                        inputStyle={{
                            // background: "lightblue",
                            width: "315px",
                            height: "50px"
                        }}
                    /><br />
                    <TextField
                        fullWidth
                        variant="outlined"
                        id="outlined-basic" 
                        fontFamily={'Poppins, sans-serif'} 
                        label="Portfolio"
                        type="text"
                        onChange={onChangePort}
                        value={portfolio} 
                    /><br /><br />
                    <TextField
                        fullWidth
                        variant="outlined"
                        id="outlined-basic" 
                        fontFamily={'Poppins, sans-serif'} 
                        label="Instagram"
                        type="text"
                        onChange={onChangeInsta}
                        value={insta} 
                    /><br /><br />
                    <TextField
                        fullWidth
                        variant="outlined"
                        id="outlined-basic" 
                        fontFamily={'Poppins, sans-serif'} 
                        label="Facebook"
                        type="text"
                        onChange={onChangeFace}
                        value={facebook} 
                        
                    /><br /><br />
                    </Grid>
                    <Grid xs={6} marginLeft={50} marginTop={-55}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        id="outlined-basic"
                        fontFamily={'Poppins, sans-serif'}
                        label="Tik Tok"
                        type="text"
                        onChange={onChangeTiktok}
                        value={tiktok}
                    /><br /><br />
                    <TextField 
                        fullWidth 
                        id="outlined-multiline-static" 
                        multiline
                        rows={4}
                        fontFamily={'Poppins, sans-serif'} 
                        onChange={onChangeExperience} 
                        label="Expérience professionnel"
                        variant="outlined"
                        value={experience}
                    /><br /><br />
                    <TextField 
                        fullWidth 
                        id="outlined-multiline-static" 
                        multiline
                        rows={4}
                        fontFamily={'Poppins, sans-serif'} 
                        onChange={onChangedesc} 
                        label="Description"
                        variant="outlined"
                        value={descriptionPersonnel}
                    /><br /><br />
                    <Stack spacing={2} marginTop={2} direction="row" fontFamily={'Poppins, sans-serif'}>
                        <Upload
                            action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                            listType="picture"
                            maxCount={1}
                        >
                            <Button onChange={handleImage} icon={<UploadOutlined />}>Photo de Profil Proffessionnel</Button>
                        </Upload>
                        <Popconfirm
                            title="Confirmez votre demande"
                            onConfirm={confirmStudent}
                            onCancel={cancelStd}
                            okText="Yes"
                            cancelText="No"
                        >
                            <Button type="primary">Valid</Button>
                        </Popconfirm>
                    </Stack>
                    </Grid>
                    </Grid>
                </Box>
            }
        </>
    );
}

export default AddPage
import { Box, Typography, Button as Btn } from '@mui/material'
import { Button, Flex, Form, Upload, message } from 'antd'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import { PlusOutlined } from '@ant-design/icons';
import { jwtDecode } from 'jwt-decode';
import { useSelector } from 'react-redux';
import axiosInstance from '../../service/axiosInstance';
import { styled } from '@mui/material/styles';
import { UploadOutlined } from '@ant-design/icons';

// import CloudUploadIcon from '@mui/icons-material/CloudUpload';
// import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';

// const VisuallyHiddenInput = styled('input')({
//     clip: 'rect(0 0 0 0)',
//     clipPath: 'inset(50%)',
//     height: 1,
//     overflow: 'hidden',
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     whiteSpace: 'nowrap',
//     width: 1,
// });

const SimpleUser = () => {
    const navigate = useNavigate()
    // const {id} = useParams()
    // const [data, setData] = useState("");
    // const [description, setDescription] = useState("");
    const [pdf, setFile] = useState([]);
    const Users = useSelector(state => state.user.users)
    const { userInfo } = useSelector((state) => state.auth)
    const [userData, setUserData] = useState([])
    const [uploading, setUploading] = useState(false);

    useEffect(() => {
        const accessToken = userInfo; 
        const decodedPayload = jwtDecode(accessToken); 
        const data = (Users || []).find(user => user._id === decodedPayload._id);
        setUserData(data);
         //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [Users]); 

    const handleSubmit = async () => {
        const user = userData._id
        const formData = new FormData();
        formData.append('user', user);
        pdf.forEach((pdf) => {
            formData.append('pdf', pdf);
        });
        setUploading(true);
        try {
            const response = await axiosInstance.post("/add/suser", formData);
            message.success(response.data.message)
            navigate("/dash")
        } catch (error) {
            // console.log(error);
            message.error(error)
        }
        finally {
            setUploading(false);
        }
    }
    
    const props = {
        onRemove: (file) => {
            const index = pdf.indexOf(file);
            const newFileList = pdf.slice();
            newFileList.splice(index, 1);
            setFile(newFileList);
        },
        beforeUpload: (file) => {
            setFile([...pdf, file]);
            return false;
        },
        pdf,
    };

    return (
        <Box marginTop={15}>
            <Form
                labelCol={{span: 15}}
                wrapperCol={{span: 14,}}
                layout="horizontal"
                style={{
                    maxWidth: 500, 
                    marginLeft: 450, 
                    marginTop: 50, 
                    // textAlign:"center",
                    // border:"1px solid black"
                }}
                // onClick={handleSubmit}
            >
                <Typography  fontFamily={'Poppins, sans-serif'}>Finnissez votre inscription</Typography>
                <Typography  fontFamily={'Poppins, sans-serif'}> 
                    Uploader une pièce d'identité (Carte d'identité, Passeport, Permis de conduire en fichier .pdf)
                </Typography>
                <br />

                
                <Upload {...props} maxCount={1}>
                    <Button
                        style={{
                            border: 0,
                            background: 'none',
                            height:100,
                            border:"1px solid black",
                            borderStyle: "dotted",
                            // marginLeft:250,
                        }}
                        icon={<UploadOutlined />}
                    >
                        Select File
                    </Button>
                </Upload>
                    <br />
                <Box  marginTop={1}>
                    <Flex gap="small" wrap>
                        <Button onClick={() =>navigate("/dash")}>Cancel</Button>
                        <Button
                            type="primary"
                            onClick={handleSubmit}
                            disabled={pdf.length === 0}
                            loading={uploading}
                            // style={{marginTop: 16,}}
                        >
                            {uploading ? 'Uploading' : 'Start Upload'}
                        </Button>
                        {/* <Button type="primary" onClick={handleSubmit}>Valid</Button> */}
                    </Flex>
                </Box>
            </Form>
        </Box>
    )
}

export default SimpleUser
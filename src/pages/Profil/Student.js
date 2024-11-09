import { Box, Typography } from '@mui/material'
import { Button, Flex, Form, Input, Upload, message } from 'antd'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { jwtDecode } from 'jwt-decode';
import { useSelector } from 'react-redux';
import axiosInstance from '../../service/axiosInstance';
// import { styled } from '@mui/material/styles';
import { UploadOutlined } from '@ant-design/icons';

const Student = () => {
    // const {id} = useParams()
    const navigate = useNavigate()
    const [pdf1, setFile1] = useState([]);
    const [pdf2, setFile2] = useState([]);
    const Users = useSelector(state => state.user.users)
    const { userInfo } = useSelector((state) => state.auth)
    const [userData, setUserData] = useState([])
    const [uploading, setUploading] = useState(false);
    const [email, setEmail] = useState([])

    useEffect(() => {
        const accessToken = userInfo; 
        const decodedPayload = jwtDecode(accessToken); 
        const data = (Users || []).find(user => user._id === decodedPayload._id);
        setUserData(data);
        // console.log("user", userData._id)
         //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [Users]); 


    const handleSubmit = async () => {
        const user = userData._id
        const formData = new FormData();
        formData.append('email', email);
        formData.append('user', user);
        pdf1.forEach((pdf1) => {
            formData.append('pdf1', pdf1);
        });
        pdf2.forEach((pdf2) => {
            formData.append('pdf2', pdf2);
        });
        setUploading(true);
        try {
            const response = await axiosInstance.post("/add/student", formData);
            // console.log("yoo", response.data)
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

    const props1 = {
        onRemove: (file) => {
            const index = pdf1.indexOf(file);
            const newFileList = pdf1.slice();
            newFileList.splice(index, 1);
            setFile1(newFileList);
        },
        beforeUpload: (file) => {
            setFile1([...pdf1, file]);
            return false;
        },
        pdf1,
    };

    const props2 = {
        onRemove: (file) => {
            const index = pdf2.indexOf(file);
            const newFileList = pdf2.slice();
            newFileList.splice(index, 1);
            setFile2(newFileList);
        },
        beforeUpload: (file) => {
            setFile2([...pdf2, file]);
            return false;
        },
        pdf2,
    };

    return (
        <Box marginTop={15}>
            <Form
                labelCol={{span: 15}}
                wrapperCol={{span: 14,}}
                layout="horizontal"
                style={{
                    maxWidth: 800, 
                    marginLeft: 100, 
                    marginTop: 50, 
                    // textAlign:"center"
                }}
                // onClick={handleSubmit}
            >
                    
                    <Form.Item 
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                        label="Adresse mail Académique *"
                    >
                        <Input 
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            required
                        />
                    </Form.Item>
                    <Form.Item label="Téléversé votre carte d'étudiant(format .pdf)*">
                        <Upload {...props1} maxCount={1}>
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
                    </Form.Item>
                    <br />
                    <Form.Item label="Certificat de scolarité (format .pdf)">
                    <Upload {...props2} maxCount={1}>
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
                    </Form.Item>
                    <br />
                <Box  marginTop={1} marginLeft={60}>
                    <Flex gap="small" wrap>
                        <Button onClick={() =>navigate("/dash")}>Cancel</Button>
                        <Button
                            type="primary"
                            onClick={handleSubmit}
                            disabled={pdf1.length === 0}
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

export default Student
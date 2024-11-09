import { Box } from '@mui/material'
import { Button, Flex, Form, Input, Upload, message } from 'antd'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import { PlusOutlined } from '@ant-design/icons';
import { jwtDecode } from 'jwt-decode';
import { useSelector } from 'react-redux';
import axiosInstance from '../../service/axiosInstance';
// import { styled } from '@mui/material/styles';
import { UploadOutlined } from '@ant-design/icons';

const { TextArea } = Input;

const SelfEmployee = () => {
    // const {id} = useParams()
    const navigate = useNavigate()
    // const [pdf, setFile] = useState([]);
    const Users = useSelector(state => state.user.users)
    const { userInfo } = useSelector((state) => state.auth)
    const [userData, setUserData] = useState([])
    const [uploading, setUploading] = useState(false);
    const [portefolio, setPortefolio] = useState([])
    const [references, setReferences] = useState([])
    const [register_number, setRegister_number] = useState([])
    const [images, setImages] = useState([])

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
        formData.append('portefolio', portefolio);
        formData.append('references', references);
        formData.append('user', user);
        register_number.forEach((register_number) => {
            formData.append('register_number', register_number);
        });
        images.forEach((images) => {
            formData.append('images', images);
        });
        setUploading(true);
        try {
            const response = await axiosInstance.post("/add/self_work", formData);
            // if (response.status === 200) 
            // {
                // console.log("yoo", response.data)
                message.success(response.data.message)
                navigate("/dash")
            // }else{
            //     message.error("Entrez correctement vos données")
            // }
        } catch (error) {
            message.error(error)
        }
        finally {
            setUploading(false);
        }
    }

    const props = {
        onRemove: (file) => {
            const index = register_number.indexOf(file);
            const newFileList = register_number.slice();
            newFileList.splice(index, 1);
            setRegister_number(newFileList);
        },
        beforeUpload: (file) => {
            setRegister_number([...register_number, file]);
            return false;
        },
        register_number,
    };

    const props1 = {
        onRemove: (file) => {
            const index = images.indexOf(file);
            const newFileList = images.slice();
            newFileList.splice(index, 1);
            setImages(newFileList);
        },
        beforeUpload: (file) => {
            setImages([...images, file]);
            return false;
        },
        images,
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
            
        <Form.Item label="Portfolio de travaux antérieurs">
            <Input onChange={(e) => setPortefolio(e.target.value)} value={portefolio} />
        </Form.Item>
        <Form.Item 
            rules={[
                {
                    required: true,
                    message: "Vérification de références professionnelles!",
                },
            ]}
            label="Vérification de références professionnelles"
        >
            <TextArea 
                onChange={(e) => setReferences(e.target.value)}
                value={references}
                rows={4}
                required
            />
        </Form.Item>
        <Form.Item 
            label="Un numéro de registre ou d'un certificat d'enregistrement (si applicable en .pdf)"
            rules={[
                {
                    required: true,
                        message: "Un numéro de registre ou d'un certificat d'enregistrement (si applicable en .pdf)!",
                    },
                ]}
            >
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
            </Form.Item>
            <Form.Item label="Images de vos oeuvres" >
                <Upload {...props1} maxCount={10} required>
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
            <Box  marginTop={1} marginLeft={60}>
                <Flex gap="small" wrap>
                    <Button onClick={() =>navigate("/dash")}>Cancel</Button>
                    <Button
                        type="primary"
                        onClick={handleSubmit}
                        disabled={images.length === 0}
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

export default SelfEmployee
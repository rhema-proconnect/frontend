import React, { useState } from 'react'
import { DatePicker, Modal, TimePicker } from 'antd';
import {
    Button,
    Form,
    Input,
    
} from 'antd';
import { Typography } from '@mui/material';
import { ContactsOutlined } from '@ant-design/icons';
import axiosInstance from '../service/axiosInstance';
import { useNavigate } from 'react-router-dom';


const Appointement = () => {
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [objective, setObjective] = useState("")
    const [hourBegin, setHourBegin] = useState("")
    const [hourEnd, setHourEnd] = useState("")
    const [date, setDate] = useState("")
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const onChangeName = (e) => {
        setName(e.target.value)
    }
    const onChangeDate = (e) => {
        setDate(e.target.value)
    }
    const onChangeHourBegin = (e) => {
        setHourBegin(e.target.value)
    }
    const onChangeHourEnd = (e) => {
        setHourEnd(e.target.value)
    }

    const onChangeObjectif = (e) =>{
        setObjective(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axiosInstance.post(`/add/app`, {
                name,
                date,
                hourBegin,
                hourEnd,
                objective,
            });
            console.log(response.data);
            // setMessage(response.data.message)
            navigate(-1)
            // return response.data
        } catch (error) {
            console.log(error);
        }
        handleCancel();
    //    console.log("uh",message)

    };


  return (
    <>
        <ContactsOutlined key="Take appointment" onClick={showModal}/>
        <Modal title="Take Appointement" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <Form
                labelCol={{span: 6}}
                wrapperCol={{span: 14,}}
                layout="horizontal"
                style={{
                maxWidth: 600, 
                // marginLeft: 400, 
                marginTop: 50, 
                textAlign:"center"
                }}
                onClick={handleSubmit}
            >
                <Typography>
                    Add Appointement Information
                </Typography>
                <Form.Item label="Full Name">
                    <Input
                        onChange={onChangeName}
                        value={name}
                    />
                </Form.Item>
                <Form.Item label="date">
                    <DatePicker
                        style={{
                            width: '100%',
                        }}
                        value={date}
                        onChange={onChangeDate}
                        />
                </Form.Item>
                <Form.Item label="heure debut">
                    <TimePicker 
                        onChange={onChangeHourBegin}
                        value={hourBegin}
                        style={{
                            width: '100%',
                        }} />
                </Form.Item>
                <Form.Item label="heure fin">
                    <TimePicker 
                        value={hourEnd}
                        onChange={onChangeHourEnd}
                        style={{
                            width: '100%',
                        }} 
                    />
                </Form.Item>
                <Form.Item label="Object">
                    <Input
                        onChange={onChangeObjectif}
                        value={objective}
                    />
                </Form.Item>
                <Form.Item>
                    <Button>Add</Button> 
                </Form.Item>
            </Form>
        </Modal>
    </>
  )
}

export default Appointement
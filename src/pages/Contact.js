import { Button, Flex, Form, Input, Popconfirm, message as msg } from 'antd';
import { Box, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from "react";
// import emailjs from "@emailjs/browser";
import axiosInstance from '../service/axiosInstance';

const Contact = () => {
    const [name, setName] = useState([])
    const [email, setEmail] = useState([])
    const [message, setMessage] = useState([])

    const onChangeName = (e) => {
      setName(e.target.value)
    }
    const onChangeEmail = (e) => {
      setEmail(e.target.value)
    }
    const onChangeMessage = (e) => {
      setMessage(e.target.value)
    }

    const sendEmail = async () => {
      try {
        const response = await axiosInstance.post(`/send-message`, {
            name,
            email,
            message
        });
        // console.log(response.data)
        msg.success(response.data.message)
    } catch (error) {
        console.log(error);
    }
    };

    const confirm = (e) => {
      sendEmail()
      // console.log(messageData);
      // message.success("Votre demande de  Monosite a été envoyer avec succes");
      // navigate("/dash")
      // navigate(-1)
  };

  const cancel = (e) => {
      console.log(e);
      // message.error('Click on No');
  };

return (
    <Box
      component="form"
      labelCol={{span: 6}}
      wrapperCol={{span: 14,}}
      layout="horizontal"
      style={{
          maxWidth: 600, 
          marginLeft: 360,
          marginTop: 150,
          // backgroundColor: "hsla(240, 100%, 50%, 0.5)", /* 50% opacity blue */
          // color: "white"
                  // textAlign:"center"
      }}
      // onClick={sendEmail}
    >
            <Typography marginLeft={20} variant="h4" sx={{fontFamily:'Poppins, sans-serif'}}>Contact Us</Typography>
            <TextField
                label="Full Name" 
                variant="outlined"
                sx={{width:600}}
                onChange={onChangeName}
                value={name}
                required
            /><br/><br/>
            <TextField
                label="Email" 
                variant="outlined"
                sx={{width:600}}
                onChange={onChangeEmail}
                value={email}
                required
            /><br/><br/>
            <TextField
                id="outlined-multiline-static"
                label="Your Message"
                multiline
                rows={4}
                sx={{width:600}}
                onChange={onChangeMessage}
                value={message}
                required
            />
            <Stack spacing={2} marginLeft={65} marginTop={2} direction="row">
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
  )
}

export default Contact
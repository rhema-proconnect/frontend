import React, { useState } from 'react';
import { Modal } from 'antd';
import {InfoCircleOutlined } from '@ant-design/icons';
import { Typography } from '@mui/material';

const DetailApp = ({name, objectif, hourBegin1, hourEnd1, date, phone, email}) => {
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
    return (
        <>
            <InfoCircleOutlined type="primary" onClick={showModal} />
            <Modal title={name} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <Typography sx={{fontFamily:'Poppins, sans-serif'}}>Objectif: {objectif}</Typography>
                <Typography sx={{fontFamily:'Poppins, sans-serif'}}>Date: {date}</Typography>
                <Typography sx={{fontFamily:'Poppins, sans-serif'}}>Heure: {hourBegin1} - {hourEnd1}</Typography>
                <Typography sx={{fontFamily:'Poppins, sans-serif'}}>Email: {email}</Typography>
                <Typography sx={{fontFamily:'Poppins, sans-serif'}}>Phone Number: {phone}</Typography>
                {/* <Typography sx={{fontFamily:'Poppins, sans-serif'}}>Samédi: {hourBegin2} - {hourEnd2}</Typography> */}
            </Modal>
        </>
    )
}

export default DetailApp
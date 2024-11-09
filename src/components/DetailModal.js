import React, { useState } from 'react';
import { Modal } from 'antd';
import {InfoCircleOutlined } from '@ant-design/icons';
import { Typography } from '@mui/material';

const DetailModal = ({title, description, hourBegin1, hourEnd1, hourBegin2, hourEnd2}) => {
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
            <Modal title={title} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <Typography sx={{fontFamily:'Poppins, sans-serif'}}>{description}</Typography>
                <Typography sx={{fontFamily:'Poppins, sans-serif'}}>Lundi au Vendredi: {hourBegin1} - {hourEnd1}</Typography>
                <Typography sx={{fontFamily:'Poppins, sans-serif'}}>Samédi: {hourBegin2} - {hourEnd2}</Typography>
            </Modal>
        </>
    );
};
export default DetailModal;
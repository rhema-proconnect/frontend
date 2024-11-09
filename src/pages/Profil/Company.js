import React, { useState } from 'react';
import { message as mess } from 'antd';
// import { Box, Typography } from '@mui/material';
import { FistStep, LastStep, SecondStep } from '../../components/CompanieForms';
import axiosInstance from '../../service/axiosInstance';
import { useNavigate, useParams } from 'react-router-dom';
// import {jwtDecode} from 'jwt-decode';
// import { useSelector } from 'react-redux';

const Company = () => {
    const navigate = useNavigate()
    const {id} = useParams()
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        name: "",
        username: "",
        email: "",
        address: "",
        industry: "",
        description: "",
        employee: "",
        phone: "",
        website: "",
        facebook: "",
        tikTok: "",
        insta: "",
        twitter: "",
        product: "",
        objectives: "",
        mapp: "",
        certi: "",
        message: "",
        user: id
    });

    const nextStep = () => setCurrentStep(currentStep + 1);
    const prevStep = () => setCurrentStep(currentStep - 1);

    const submitForm = async () => {
        // console.log(formData);
        try {
            const response = await axiosInstance.post("/add/company", formData);
            mess.success(response.data.message)
            navigate("/dash")
        } catch (error) {
            console.log(error);
        }
    };

    // const onConfirm = (e) => {
    //     submitForm()
    //     // console.log(messageData);
    //     // message.success("Votre demande de  Monosite a été envoyer avec succes");
    //     navigate("/dash")
    // };

    // const onCancel = (e) => {
    //     console.log(e);
    //     // message.error('Click on No');
    // };


    switch (currentStep) {
        case 1:
            return <FistStep data={formData} setData={setFormData} nextStep={nextStep} />;
        case 2:
            return (
                <SecondStep
                    data={formData}
                    setData={setFormData}
                    prevStep={prevStep}
                    nextStep={nextStep}
                />
            );
        case 3:
            return (
                <>
                <LastStep
                    data={formData}
                    setData={setFormData}
                    prevStep={prevStep}
                    submitForm={submitForm}
                />
                </>
            );
        default:
            return <div>Error</div>;
        }
}

export default Company
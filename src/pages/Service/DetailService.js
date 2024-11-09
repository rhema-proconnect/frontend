import React, { useEffect, useState } from 'react'
import axiosInstance from '../../service/axiosInstance';
import { useParams } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import { LocaldateHours } from '../../utils/uuidv4';
import { useSelector } from 'react-redux';
// import NavBar from '../../layouts/Nav/NavBar';

const DetailService = () => {
    const {id} = useParams()
    const Page = useSelector(state => state.page.page)
    const [serviceData, setService] = useState([])
    const [pagData, setPagData] = useState([])

    useEffect(() => {
        axiosInstance.get("/service/"+id)
        .then(res =>{
            // console.log(res.data.users)
            setService(res.data.data)
        })
        .catch(err => console.log(err))
        const test = Page?.find(one => one?._id === serviceData?.pag)
        setPagData(test)
        // console.log(test)
         //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [Page]); 
    
    return (
        <Box sx={{ marginTop: -70, marginLeft: 40,}}>
            <Typography sx={{fontFamily:'Poppins, sans-serif'}}>
                Nom du Service: {serviceData.name}
            </Typography>
            <Typography sx={{fontFamily:'Poppins, sans-serif'}}>
                Description: {serviceData.description}
            </Typography>
            <Typography sx={{fontFamily:'Poppins, sans-serif'}}>
                Nom du MonoSite: {pagData.name}
            </Typography>
            <Typography sx={{fontFamily:'Poppins, sans-serif'}}>
                Lundi - Vendredi : {LocaldateHours(serviceData.hourBegin1)} - {LocaldateHours(serviceData.hourEnd1)}
            </Typography>
            <Typography sx={{fontFamily:'Poppins, sans-serif'}}>
                Les Weeknd {LocaldateHours(serviceData.hourBegin2)} - {LocaldateHours(serviceData.hourEnd2)}
            </Typography>
        </Box>
    )
}

export default DetailService
import { Box, Button, Grid, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { retrieveUser } from '../../feature/userSlice'
import { retrieveStdM } from '../../feature/StudentMonoSlice';
import axiosInstance from '../../service/axiosInstance'
import { message } from 'antd'
import VerifiedIcon from '@mui/icons-material/Verified';

const DetailSdtM = () => {
    const {id} = useParams()
    // const navigate = useNavigate()
    const dispatch = useDispatch()
    const SdtM = useSelector(state => state.sdtM.sdtM)
    const [datas, setData] = useState('');
    const Users = useSelector(state => state.user.users)
    const [userData, setUserData] = useState([]) 
    const [selectedPdf, setSelectedPdf] = useState('');
    const [numPages, setNumPages] = useState();
    const [pageNumber, setPageNumber] = useState(1);

    useEffect(() => {
        const fetchSingleItem1 = () => {
            const test = SdtM?.filter(data => data?._id === id);
            console.log(test)
            test?.map(data => setData(data))
        }; 
        const fetchSingleItem2 = () => {
            const test = Users?.filter(data => data?._id === datas.user);
            test?.map(data => setUserData(data))
        };
        fetchSingleItem1()
        fetchSingleItem2()
        console.log(SdtM)
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [Users, SdtM]);

    useEffect(()=> {
        dispatch(retrieveUser())
        dispatch(retrieveStdM())
        // dispatch(retrieveSdtM())
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch]);
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axiosInstance.put(`/update/page/${id}`, {isApprouve:true});
            console.log('Data updated:', response);
            message.success("A ete Approuver avec success")
            window.location.reload();
        } catch (error) {
            message.error('There was an error updating the data!', error);
        } 
    }

    return (
        <Box
            sx={{marginTop: -72,
            marginLeft: 40, alignItems: 'center'}}
        >
        <Typography>Name:{datas.fullName}</Typography>
        <Typography>Phone Number: +{datas.phone}</Typography>
        {/* <Typography>Nombre de service: {datas.serviceNumber}</Typography> */}
        <Typography>Description:{datas.description}</Typography>
        {/* <Typography>Logo</Typography> */}
        {/* <img src={page.image ? `http://localhost:8080/${page.image}` : Icon} width={100} height={100} alt='test'/> */}
        {datas.isApprouve === true ? <Typography>Approuver:Oui</Typography>: <Typography>Approuver:Non</Typography>}
        <Button onClick={handleSubmit}>Valider</Button>
        </Box>
    )
}

export default DetailSdtM
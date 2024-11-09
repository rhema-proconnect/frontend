import { Box, Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axiosInstance from '../../service/axiosInstance'
import { message } from 'antd';
import Icon from "../../images/icon.svg"


const DetailMono = () => {
  const {id} = useParams()
  const [page, setPageData] = useState('')
  // const [data, setData] = useState(false)

  useEffect(() => {
    axiosInstance.get("/page/"+id)
    .then(res =>{
        setPageData(res.data.data)
        // setData(res.data.data.isApprouve)
      })
      .catch(err => console.log(err))
      //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    console.log(page.isApprouve)
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
      <Typography>Name:{page.name}</Typography>
      <Typography>Description:{page.description}</Typography>
      <Typography>Phone Number: +{page.phoneNumber}</Typography>
      <Typography>Nombre de service: {page.serviceNumber}</Typography>
      <Typography>Logo</Typography>
      <img src={page.image ? `http://localhost:8080/${page.image}` : Icon} width={100} height={100} alt='test'/>
      {page.isApprouve === true ? <Typography>Approuver:Oui</Typography>: <Typography>Approuver:Non</Typography>}
      <Button onClick={handleSubmit}>Valider</Button>

    </Box>
  )
}

export default DetailMono
import React, { useEffect, useState } from 'react'
import axiosInstance from '../service/axiosInstance';
import { useParams } from 'react-router-dom';

const ValidationApp = () => {
  const {id} = useParams()
  
  useEffect(() => {
    axiosInstance.put(`/app/${id}`, {status: true})
    .then(res =>{
        return res.data
    })
    .catch(err => console.log(err))
     //eslint-disable-next-line react-hooks/exhaustive-deps
}, []); 
  return (
    <div>
      
    </div>
  )
}

export default ValidationApp
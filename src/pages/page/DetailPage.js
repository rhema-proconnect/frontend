import React, { useEffect, useState } from 'react'
import Spinner from '../../components/Spinner';
import { Box, Grid, Typography } from '@mui/material';
import axiosInstance from '../../service/axiosInstance';
import { useParams } from 'react-router-dom';
import { Button, QRCode, Segmented, Space } from 'antd';
import Icon from "../../images/icon.svg"

const DetailPage = () => {
    const {id} = useParams()
    const [page, setPageData] = useState('')
    const [loadingChart, setLoadingChart] = useState(false);
    const [renderType, setRenderType] = useState('canvas');

    function doDownload(url, fileName) {
        const a = document.createElement('a');
        a.download = fileName;
        a.href = url;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }
    // toDataURL
    const downloadCanvasQRCode = () => {
        const canvas = document.getElementById(id)?.querySelector('canvas');
        if (canvas) {
        const url = canvas.toDataURL();
        doDownload(url, 'QRCode.png');
        }
    };
    // serializeToString
    const downloadSvgQRCode = () => {
        const svg = document.getElementById(id)?.querySelector('svg');
        const svgData = new XMLSerializer().serializeToString(svg);
        const blob = new Blob([svgData], {
        type: 'image/svg+xml;charset=utf-8',
        });
        const url = URL.createObjectURL(blob);
        doDownload(url, 'QRCode.svg');
    };

    useEffect(()=> {
        axiosInstance.get("/page/"+id)
        .then(res =>{
            setPageData(res.data.data)
            // setData(res.data.data.isApprouve)
            })
        .catch(err => console.log(err))
        setLoadingChart(true)
        setTimeout(() =>{
            setLoadingChart(false)
        }, 2000)
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
        {loadingChart ?
            <Spinner loading={loadingChart}/>
            :
            <Box sx={{marginTop: -72, marginLeft: 40, alignItems: 'center'}}>
                <Grid container spacing={2} columns={16}>
                    <Grid size={8} >
                        <Typography>Name:{page.name}</Typography>
                        <Typography>Categorie:{page.cat}</Typography>
                        <Typography>Description:{page.description}</Typography>
                        <Typography>Phone Number: +{page.phoneNumber}</Typography>
                        <Typography>Nombre de service: {page.serviceNumber}</Typography>
                        <Typography>Logo</Typography>
                        <img src={page.image ? `http://localhost:8080/${page.image}` : Icon} width={100} height={100} alt='test'/>
                    </Grid>
                    <Grid size={8} sx={{ marginLeft:40}}>
                        {page.isApprouve === true ? 
                            <>
                                <Typography>Approuver:Oui</Typography>
                                <Space id={`${id}`} direction="vertical">
                                    <QRCode 
                                        value={`http://localhost:3000/detail/${id}`} 
                                        bgColor="#fff"
                                        style={{marginBottom: 16,}}
                                        icon={page.image ? `http://localhost:8080/${page.image}` : Icon}
                                    />
                                    {/* <Segmented options={['canvas', 'svg']} onChange={(val) => setRenderType(val)} /><br />
                                    <Button
                                        type="primary"
                                        onClick={renderType === 'canvas' ? downloadCanvasQRCode : downloadSvgQRCode}
                                        >
                                        Download
                                        </Button>  */}
                                </Space>
                            </>: <Typography>Approuver: Non</Typography>
                        }<br />
                    </Grid>
                </Grid>
            </Box>
        }</>
    )
}

export default DetailPage
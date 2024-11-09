import React, { useEffect, useState } from 'react'
import Icon from "../images/icon.svg"
import { Card as Car} from 'antd';
import Card from '../components/card/Card';
import {Link} from "react-router-dom"
import { Avatar, List, Space, Skeleton, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../components/Spinner';
import { Box, Typography } from '@mui/material';
import { retrievePage } from '../feature/pageSlice';
import Footer from '../layouts/Footer/Footer';

const { Search } = Input;

const Monosites = () => {
    const dispatch = useDispatch()
    const Page = useSelector(state => state.page.page)
    const [loadingChart, setLoadingChart] = useState(false);
    const [pageData, setPageData] = useState([])
    const [search, setSearch] = useState('');

    useEffect(()=> {
        setPageData(Page)
        setLoadingChart(true)
        setTimeout(() =>{
            setLoadingChart(false)
        }, 2000)
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [Page]);

    useEffect(()=> {
        dispatch(retrievePage())
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

  return (
    <>
    {loadingChart ?
        <Spinner loading={loadingChart}/>
        :
        <Box sx={{marginTop:"100px"}}>
        <Typography variant="h3" sx={{marginTop:"150px", marginLeft: "390px", fontWeight:"bold"}}>Liste des Monosites</Typography>
        <Search
            placeholder="Recherchez un Monosite"
            style={{
                width: 600,
                marginTop:"20px",
                marginLeft: "190px"
            }}
            onChange={(e) => setSearch(e.target.value)}
        /><br /><br />
        <Car
            style={{
                width: 800,
                backgroundColor: "#B1B7B9",
                marginLeft: "190px"
            }}
        >
            {
                pageData.length > 0 ?
                pageData.filter((item) => {
                    return search.toLowerCase() === ''
                    ? item
                    : item.name.toLowerCase().includes(search);
                }).map(data => 
                    data.isApprouve === true &&
                    <Link to={`/detail/${data._id}`}>
                    <Card
                        key={data.id}
                        imageSrc={data.image ? `http://localhost:8080/${data.image}` : Icon}
                        title={data.name}
                        cat={data.cat}
                        phone={data.phoneNumber}
                        description={data.description}
                        // text={`/detail/${data._id}`}
                    />
                </Link> 
                ):<Skeleton />
            }
        </Car>
        </Box>
        }
        <Footer />
    </>
  )
}

export default Monosites
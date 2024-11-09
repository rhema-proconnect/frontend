import React, { useEffect, useState } from 'react'
import {Link, useParams} from "react-router-dom"
import {useDispatch,useSelector} from "react-redux"
import { retrieveService } from '../feature/serviceSlice'
// import pageService from '../service/pageService'
import axiosInstance from '../service/axiosInstance'
import { Col, Row, Card, Typography } from 'antd'
import { Box, Button, Skeleton, Tooltip } from '@mui/material'
import DetailModal from '../components/DetailModal'
import Appointement from '../components/Appointement'
import { ContactsOutlined } from '@ant-design/icons';
import { LocaldateHours } from '../utils/uuidv4';
import Icon from "../images/icon.svg"
import Footer from '../layouts/Footer/Footer';

const { Meta } = Card;

const Detail = () => {
  const  { id } = useParams()
  const dispatch = useDispatch()
  const Srvc = useSelector(state => state.srvc.srvc)
  const { userInfo } = useSelector((state) => state.auth)

  // const [srvcFilter, setSrvcFilter] = useState([])
  // const [selectedPt, setSelectedPt] = useState([0]);
  const [srvcData, setSrvcData] = useState([])
  const [pagData, setPagData] = useState([])

  useEffect(()  =>{
    dispatch(retrieveService())
    //eslint-disable-next-line react-hooks/exhaustive-deps
  },[dispatch])

  useEffect(() => {
    axiosInstance.get("/page/"+id)
    .then(res =>{
        // console.log(res.data.users)
        setPagData(res.data.data)
    })
    .catch(err => console.log(err))
    // console.log(pagData)
     //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); 


  useEffect(() =>{
      if(id && Srvc?.length){
        const res = Srvc?.filter(_one => _one?.pag === id)
        // setSrvcFilter(res);
        setSrvcData(res)
      // console.log({res})
        return;
      }
  }, [id, Srvc])

  return (
    <Box sx={{marginTop:"100px"}}>
      <Card
        style={{
          width: 800,
          backgroundColor: "#B1B7B9",
          marginLeft: "190px"
        }}
      >
        <img style={{width: 150, height: 150, fontSize: 25}} src={pagData.image ? `http://localhost:8080/${pagData.image}` : Icon}/>
        
        <Box style={{float: "right", marginRight: 450}}>
          <Typography sx={{fontFamily:'Poppins, sans-serif'}}>
            Name:{pagData.name}
          </Typography>
          <Typography sx={{fontFamily:'Poppins, sans-serif'}}>
            Description :{pagData.description}
          </Typography>
          <Typography sx={{fontFamily:'Poppins, sans-serif'}}>
            Phone Number:{pagData.phoneNumber}
          </Typography>
        </Box>
      </Card>
      <Box sx={{marginLeft:"190px"}}>
        <Typography sx={{fontSize: 25, fontFamily:'Poppins, sans-serif'}}>Les services</Typography>
        {/* <Link to="/addService">
          <Button variant="contained" sx={{fontFamily:'Poppins, sans-serif'}}>
            Add Service
          </Button>
        </Link> */}
      </Box>
      <Card
        style={{
          width: 800,
          backgroundColor: "#B1B7B9",
          marginLeft: "190px"
        }}
      >
        <Row gutter={16}>
        {
          srvcData.length > 0 ?
          srvcData.map(data =>
            <Col span={8}>
              <Card
                style={{
                  width: 250,
                }}
                cover={
                  <img
                    alt="example"
                    src={data.image ? `http://localhost:8080/${data.image}` : Icon}
                  />
                }
                actions={[
                      <Tooltip title="More">
                          <DetailModal 
                            title={data.name} 
                            description={data.description} 
                            hourBegin1={LocaldateHours(data.hourBegin1)} 
                            hourEnd1={LocaldateHours(data.hourEnd1)} 
                            hourBegin2={LocaldateHours(data.hourBegin2)} 
                            hourEnd2={LocaldateHours(data.hourEnd2)} 
                          />
                      </Tooltip>,
                      <>
                        {/* {userInfo ? ( */}
                            <Tooltip title="Take appointment">
                              <Link to={`/addApp/${data._id}`}>
                                <ContactsOutlined />
                              </Link>
                            </Tooltip>
                            {/* ) : ( */}
                              {/* <Tooltip title="Take appointment">
                                <Link to="/addApp">
                                  <ContactsOutlined key="Take appointment"/>
                              </Tooltip> */}
                        {/* )} */}
                      </>,
                  // <Tooltip title="Take appointment">
                  //   <Link to="/login">
                  //     <ContactsOutlined key="Take appointment"/>
                  //   </Link>
                  // </Tooltip>,
                ]}
              >
                <Meta
                  // avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
                  title={data.name}
                  description={data.description}
                  // heure={`${LocaldateHours(data.hourBegin1)} - ${LocaldateHours(data.hourEnd1)}`}
                />
              </Card>
            </Col>
            // <Typography>{data.name}</Typography>
          ):<Skeleton variant="rectangular" width={210} height={118} />
        }
        </Row>
      </Card>
    <Footer />
    </Box>
  )
}

export default Detail
import { Box, Typography } from '@mui/material'
import React from 'react'
import axiosInstance from '../../service/axiosInstance'

const AppDetail = () => {
  const {id} = useParams()
    const [appData, setAppData] = useState([])

    useEffect(() => {
        axiosInstance.get("/app/"+id)
        .then(res =>{
            // console.log(res.data.users)
            setAppData(res.data.data)
        })
        .catch(err => console.log(err))
        // console.log(pagData)
         //eslint-disable-next-line react-hooks/exhaustive-deps
      }, []); 
  return (
    <Box 
      component="form"
      labelCol={{span: 6}}
      wrapperCol={{span: 14,}}
      layout="horizontal"
      style={{
          maxWidth: 600, 
          marginTop: -72,
          marginLeft: 400,
          // textAlign:"center"
      }}
    >
        <Typography sx={{fontFamily:'Poppins, sans-serif'}}>
            {appData.name}
        </Typography>
    </Box>
  )
}

export default AppDetail
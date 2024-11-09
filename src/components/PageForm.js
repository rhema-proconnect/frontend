import {Button, Box, TextField, Typography } from "@mui/material"
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
import ImageIcon from '@mui/icons-material/Image';

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

export const FistStep = ({data, setData, nextStep}) => {

    return (
        <Box
                labelCol={{span: 15}}
                wrapperCol={{span: 14,}}
                layout="horizontal"
                style={{
                    maxWidth: 600, 
                    marginLeft: 100, 
                    marginTop: 150, 
                    // textAlign:"center"
                }}
                // onClick={handleSubmit}
            >

                <Typography>Page d'accueil</Typography>  
                <TextField 
                    fullWidth 
                    id="outlined-basic" 
                    onChange={(e) => setData({ ...data, name: e.target.value })} 
                    fontFamily={'Poppins, sans-serif'} 
                    value={data.name} 
                    label="Name" 
                    variant="outlined" 
                />
                <TextField 
                    fullWidth 
                    id="outlined-basic" 
                    fontFamily={'Poppins, sans-serif'} 
                    onChange={(e) => setData({ ...data, description: e.target.value })} 
                    label="Description"
                    variant="outlined"
                    value={data.description}
                />
                {/* <TextField
                        fullWidth
                        variant="outlined"
                        id="outlined-basic" 
                        fontFamily={'Poppins, sans-serif'} 
                        label="Biologie"
                        onChange={(e) => setData({ ...data, biologie: e.target.value })}
                        value={data.biologie} 
                    />
                    */}
                {/* <Button
                    component="label"
                    role={undefined}
                    variant="contained"
                    tabIndex={-1}
                    startIcon={<CloudUploadIcon />}
                >
                    <ImageIcon />
                    <VisuallyHiddenInput type="file" onChange={handleFileChange}/>
                </Button> */}
                <Button onClick={nextStep}>Next</Button>
            
        </Box>
    );
}
export const SecondStep = ({ data, setData, prevStep, submitForm}) => {
    return (
        <Box
            labelCol={{span: 15}}
            wrapperCol={{span: 14,}}
            layout="horizontal"
            style={{
                maxWidth: 800, 
                marginLeft: 100, 
                marginTop: 150, 
                // textAlign:"center"
            }}
            // onClick={handleSubmit}
        >
            <TextField
                fullWidth 
                variant="outlined"
                id="outlined-basic" 
                fontFamily={'Poppins, sans-serif'} 
                label="Certifications et Réalisations"
                onChange={(e) => setData({ ...data, certi: e.target.value })}
                value={data.certi} 
            />
            <TextField
                fullWidth
                variant="outlined"
                id="outlined-basic" 
                fontFamily={'Poppins, sans-serif'} 
                label="Biologie"
                onChange={(e) => setData({ ...data, biologie: e.target.value })}
                value={data.biologie} 
            />
            {/* https://www.google.com/maps/place/Maison+tvs/@6.22592,1.2058624,15z/data=!4m6!3m5!1s0x102159005e8da86f:0xfc72a94982b35f8b!8m2!3d6.2248829!4d1.2105145!16s%2Fg%2F11w35rd4ly?entry=ttu */}
            <TextField
                fullWidth 
                variant="outlined"
                id="outlined-basic" 
                fontFamily={'Poppins, sans-serif'} 
                label="Location"
                onChange={(e) => setData({ ...data, mapp: e.target.value })}
                value={data.mapp} 
            />
            <Button onClick={prevStep}>Previous</Button>
            <Button onClick={submitForm}>Done</Button>
            
        </Box>
    );
}
export const LastStep = ({ data, setData, prevStep, submitForm}) => {
    return (
        <Box
            labelCol={{span: 15}}
            wrapperCol={{span: 14,}}
            layout="horizontal"
            style={{
                maxWidth: 800, 
                marginLeft: 100, 
                marginTop: 50, 
                // textAlign:"center"
            }}
                // onClick={handleSubmit}
        >
            <TextField
                fullWidth 
                variant="outlined"
                id="outlined-basic" 
                fontFamily={'Poppins, sans-serif'} 
                label="Certifications et Réalisations"
                value={data.certi} 
                onChange={(e) => setData({ ...data, tikTok: e.target.value })}
                // value={data.tikTok}
            />
                <Button onClick={prevStep}>Previous</Button>
                <Button onClick={submitForm}>Done</Button>
        </Box>
    );
}

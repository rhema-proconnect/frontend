import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { message } from 'antd';
import axiosInstance from '../service/axiosInstance';
import { useState } from 'react';


function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="http://localhost:3000/">
            Proconnect
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
        </Typography>
    );
}

const defaultTheme = createTheme();

const ForgotPass = () => {
    const [email, setEmail] = useState('');
    // const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axiosInstance.post('/auth/forgot-password', { email });
            message.success(response.data.message);
            // alert("yessss");
            // console.log(message);
        } catch (error) {
            message.error('Error sending email');
        }
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                {/* <Typography sx={{marginRight: "190px", marginTop:"30px"}}>
                    <Link href="/home">Home</Link>  
                </Typography> */}
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 12,
                        paddingTop: 23,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">Forgot Password</Typography>
                    <Box component="form" onSubmit={(e) => handleSubmit(e)} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            label='Email'
                            type='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Valid
                        </Button>
                        <Grid container>
                        {/* <Grid item>
                            <Link href="/signup" variant="body2">
                                Signup
                            </Link>
                        </Grid> */}
                        </Grid>
                    </Box>
                </Box>
                {/* {message && <p>{message}</p>} */}
                {/* <AlertSnackBar /> */}
                <Copyright sx={{ mt: 10 }} />
            </Container>
        </ThemeProvider>
    )
}

export default ForgotPass
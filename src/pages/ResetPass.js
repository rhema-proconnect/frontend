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
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { message } from 'antd';
import axiosInstance from '../service/axiosInstance';


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
const ResetPass = () => {
    const { token } = useParams(); // Get the token from the URL
    const navigate = useNavigate()
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axiosInstance.post(`/auth/reset-password/${token}`, { password });
            message.success(response.data.message);
            navigate('/login')
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
                    <Typography component="h1" variant="h5">Reset Password</Typography>
                    <Box component="form" onSubmit={(e) =>handleSubmit(e)} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            label='New Password'
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
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
                {/* <AlertSnackBar /> */}
                <Copyright sx={{ mt: 10 }} />
            </Container>
        </ThemeProvider>
  )
}

export default ResetPass
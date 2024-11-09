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
import AlertSnackBar from "../components/AlertSnackBar"
// import { login } from '../service/authService'
// import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { login, loginUser, setToken } from '../service/authService';
// import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// import { useTranslation } from 'react-i18next';


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

export default function Login() {
    const dispatch = useDispatch();
    // const navigate = useNavigate()
    // const { t } = useTranslation();

    const [userInformations, setUserInformations] = useState({
        email: "",
        password: "",
    });
    
    const handleSubmit = (e) => {
        e.preventDefault();
        login(userInformations, dispatch)
    }
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");

    // const onChangeEmail = (e) => {
    //     setEmail(e.target.value)
    //   }

    //   const onChangePassword = (e) =>{
    //     setPassword(e.target.value)
    //   }

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //     const response = await loginUser({email, password});
    //     console.log(response); // Handle the API response
    //     if (response.data.data) {
    //         setToken(response.data.token);
    //         navigate("/dash");
    //         window.location.reload();
    //     }
    //     } catch (error) {
    //     console.error(error);
    //     alert("Verifier votre email ou mots de passe");
    //     }
    // }

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
                    <Typography component="h1" variant="h5">
                        Signin
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            label='Email'
                            type='email'
                            value={userInformations.email}
                            onChange={(e) =>
                                setUserInformations({
                                ...userInformations,
                                email: e.target.value,
                                })
                            }
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            label='Password'
                            type="password"
                            value={userInformations.password}
                            onChange={(e) =>
                                setUserInformations({
                                ...userInformations,
                                password: e.target.value,
                            })
                            }
                        />
                        {/* <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        /> */}
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Signin
                        </Button>
                        <Grid container>
                        <Grid item xs>
                            <Link href="/forgotpass" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="/signup" variant="body2">
                            Signup
                            </Link>
                        </Grid>
                        </Grid>
                    </Box>
                </Box>
                <AlertSnackBar />
                <Copyright sx={{ mt: 10 }} />
            </Container>
        </ThemeProvider>
    );
}
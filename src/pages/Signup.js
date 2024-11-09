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
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
import { register } from "../service/authService";

import AlertSnackBar from "../components/AlertSnackBar"
import { useTranslation } from 'react-i18next';


function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://Proconnect.com/">
            Proconnect
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
        </Typography>
    );
}

const defaultTheme = createTheme();

export default function Signup() {
    const dispatch = useDispatch();
    const { t } = useTranslation();
    // const { pending } = useSelector((state) => state.auth);
    const [userInformations, setUserInformations] = useState({
        username: "",
        email: "",
        password: "",
        repassword: "",
    });
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        await register(userInformations, dispatch);
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
                        paddingTop: 3,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Signup
                    </Typography>
                    <Box component="form" noValidate onSubmit={(e) => handleSubmit(e)} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    label="Username"
                                    value={userInformations.username}
                                    onChange={(e) =>
                                        setUserInformations({
                                            ...userInformations,
                                            username: e.target.value,
                                        })
                                    }
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    label='Email'
                                    value={userInformations.email}
                                    onChange={(e) =>
                                        setUserInformations({
                                            ...userInformations,
                                            email: e.target.value,
                                        })
                                    }
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    type="password"
                                    label='Password'
                                    value={userInformations.password}
                                    onChange={(e) =>
                                        setUserInformations({
                                            ...userInformations,
                                            password: e.target.value,
                                        })
                                    }
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    label="Confirm Password"
                                    type="password"
                                    value={userInformations.repassword}
                                    onChange={(e) =>
                                        setUserInformations({
                                            ...userInformations,
                                            repassword: e.target.value,
                                        })
                                    }
                                />
                            </Grid>
                            {/* <Grid item xs={12}>
                                <FormControlLabel
                                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                                    label="I want to receive inspiration, marketing promotions and updates via email."
                                />
                            </Grid> */}
                        </Grid>
                        <Typography>
                            By registering, you confirm that you have read and agree to our{" "}
                                <Link fontSize="0.75rem">Terms of</Link> and{" "}
                                <Link fontSize="0.75rem">Privacy Policy</Link>.
                            </Typography>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            // disabled={pending}
                        >
                            Signup
                        </Button>
                        <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link href="/login" variant="body2">
                                Signin
                            </Link>
                        </Grid>
                        </Grid>
                    </Box>
                </Box>
                <AlertSnackBar />
                <Copyright sx={{ mt: 8 }} />
            </Container>
        </ThemeProvider>
    );
}
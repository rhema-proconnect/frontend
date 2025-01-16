import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { confirmEmailService } from '../service/authService';
import AlertSnackBar from '../components/AlertSnackBar';
import Header from '../layouts/Header/Header';


export default function ConfirmEmail() {
    const dispatch = useDispatch();
  // const { t } = useTranslation();
  // const { pending } = useSelector((state) => state.auth);
  const [userInformations, setUserInformations] = useState({
      email: "",
      verificationCode: "",
  });
  
  const handleSubmit = async (e) => {
      e.preventDefault();
      await confirmEmailService(userInformations, dispatch);
  };
    return (
        <>
        <Header/>
        <Box sx={{ width: '100%', marginTop: 25, marginLeft:20}}>
            <Typography>Confirmez Votre Compte</Typography>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Box component="form" noValidate onSubmit={(e) => handleSubmit(e)} sx={{ mt: 3 }}>
                <TextField
                    required
                    fullWidth
                    label="Email"
                    value={userInformations.email}
                    onChange={(e) =>
                        setUserInformations({
                            ...userInformations,
                            email: e.target.value,
                        })
                    }
                />
                <TextField
                    required
                    fullWidth
                    label="Code"
                    value={userInformations.verificationCode}
                    onChange={(e) =>
                        setUserInformations({
                            ...userInformations,
                            verificationCode: e.target.value,
                        })
                    }
                    />
            <Button variant="contained" onClick={(e) => handleSubmit(e)}>Valid</Button>
        </Box>
        </Grid>
        <AlertSnackBar />
        </Box>
    </>
    )
}

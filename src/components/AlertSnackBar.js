import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

import { useSelector, useDispatch } from "react-redux";
import { closeAlert } from "../feature/alertSlice";
import { useNavigate } from "react-router-dom";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const AlertSnackBar = () => {
  const dispatch = useDispatch();
  
  const { open, message, severity, duration, nextRoute } = useSelector((state) => state.alertR);

  const navigate = useNavigate();

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    dispatch(closeAlert());

    try {
        navigate(nextRoute);
    } catch (error) {
      console.log({error});
    }
  };

  return (
    <>
      <Snackbar
        open={open}
        autoHideDuration={duration}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert onClose={handleClose} severity={severity} sx={{ width: "100%", fontFamily:'Poppins, sans-serif' }}>
          {message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default AlertSnackBar;

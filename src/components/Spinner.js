import {CircularProgress, Backdrop} from '@mui/material';

function Spinner() {
    return (
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open
        >
            <CircularProgress color="inherit" />
        </Backdrop>
    )
}

export default Spinner
import React, { useState } from 'react';
import { Drawer } from 'antd';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';

const Drawers = () => {

    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
    return (
        <>
        <IconButton onClick={showDrawer}>
            <MenuIcon />
        </IconButton>
        <Drawer title="Basic Drawer" onClose={onClose} open={open}>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
        </Drawer>
        </>
    )
}

export default Drawers
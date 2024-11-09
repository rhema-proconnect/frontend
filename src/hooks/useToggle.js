import { useState } from 'react';

export default function useToggle() {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleSwitch = () => setOpen(!open);

    
    return { open, handleClose, handleOpen, handleSwitch }
}

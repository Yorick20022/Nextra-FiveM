import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { blue } from "@mui/material/colors";

interface LinkButtonProps {
    text: string,
    image: string
}

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    boxShadow: 24,
};


const LinkButton: React.FC<LinkButtonProps> = ({ text, image }) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <code className={"nx-border-black nx-border-opacity-[0.04] nx-bg-opacity-[0.03] nx-bg-black nx-break-words nx-rounded-md nx-border nx-py-0.5 nx-px-[.25em] nx-text-[.9em] dark:nx-border-white/10 dark:nx-bg-white/10"}
                onClick={handleOpen}
                style={{ cursor: "pointer", color: blue[500], textDecoration: "underline" }}
            >{text}
            </code>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <Box sx={{ ...style, width: 700 }}>
                    <img src={image} alt={text} style={{ width: "100%", height: "100%" }} />
                </Box>
            </Modal>
        </>
    );
}

export default LinkButton;
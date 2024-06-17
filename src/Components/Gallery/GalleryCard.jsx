import { Box } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import CloseIcon from '@mui/icons-material/Close';
export default function GalleryCard({ img, data, defaultIndex }) {
    const [open, setOpen] = React.useState(false);
    const [index, setIndex] = useState(defaultIndex)
    const handleOpen = () => {
        setOpen(true);
        setIndex(defaultIndex)
    }
    const handleClose = () => setOpen(false);
    const ref = useRef(null)
    const isInView = useInView(ref)

    const variants = {
        hidden: { opacity: 0, x:-150 },
        visible: { opacity: 1, x: 0 },
    };
    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.75 }}
            style={{height:"250px",overflow:"hidden"}}
        >
            <div>
                <Box onClick={handleOpen} style={{ cursor: "pointer" }}>
                    <img style={{ width: "100%", minHeight: "250px" }} src={img} alt="i" />
                </Box>
                <Modal
                    open={open}
                    // onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
                >
                    <Box width={["100%", "90%", "75%", "70%"]} sx={{ display: "flex", alignItems: "center", justifyContent: "center", border: "none" }}>
                        <Box position={"absolute"} width={"50px"} height={"50px"} top={"10px"} right={"10px"} onClick={handleClose} sx={{ cursor: "pointer" }}>
                            <CloseIcon sx={{ width: '100%', height: "100%", color: "white" }} />
                        </Box>
                        <Box display={index == 0 ? "none" : "flex"} position={"absolute"} width={["50px", "70px", "100px"]} height={"100px"} top={"calc( 50% - 50px )"} left={"10px"} onClick={() => {
                            setIndex(prev => prev - 1)
                        }} sx={{ cursor: "pointer" }}>
                            <KeyboardArrowLeftIcon sx={{ width: '100%', height: "100%", color: "white" }} />
                        </Box>
                        <img style={{ height:"100%", transition: "1s",maxWidth:"90vw",maxHeight:"90vh" }} src={data[index]} alt="cs" />
                        <Box display={index == data.length - 1 ? "none" : "flex"} position={"absolute"} width={["50px", "70px", "100px"]} height={"100px"} top={"calc( 50% - 50px )"} right={"10px"} onClick={() => {
                            setIndex(prev => prev + 1)
                        }} sx={{ cursor: "pointer" }}>
                            <KeyboardArrowRightIcon sx={{ width: '100%', height: "100%", color: "white" }} />
                        </Box>
                    </Box>
                </Modal>
            </div>
        </motion.div>
    )
}




import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import { useRef } from 'react';
import { useState } from 'react';
import axios from 'axios';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useContext } from 'react';
import { Context } from '../../../ContextApi';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function BasicModal({open,setOpen}) {
    const emailRef = useRef(null)
    const fullNameRef = useRef(null);
    const phoneRef = useRef(null);
    const addressRef = useRef(null);
    const subjectRef = useRef(null);
    const messageRef = useRef(null);
    const {apiLink} = useContext(Context)
    
    const handleOpen = () => setOpen(true);
    const handleClose = () =>{
        setOpen(false);
        let obj = {
            name:fullNameRef.current.value,
            email:emailRef.current.value,
            phone:phoneRef.current.value,
            address:addressRef.current.value,
            subject:subjectRef.current.value,
            message:messageRef.current.value,
        }
        
        axios.post(apiLink+"/messages",obj);
        fullNameRef.current.value=""
        emailRef.current.value=""
        phoneRef.current.value=""
        addressRef.current.value=""
        subjectRef.current.value=""
        messageRef.current.value=""
    } 

    return (
        <div>
            <Modal
                sx={{ display: "flex", justifyContent: "center"}}
                open={open}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description" >
                <Box p={"30px"} sx={{width:"100%",minHeight: "80%", background: "white",overflowY:"scroll" }}>
                    <Box mb={"20px"} display={"flex"} justifyContent={"space-between"} >
                        <Typography fontSize={"40px"}>Fill the Details</Typography>
                        <CloseIcon onClick={handleClose} sx={{ cursor: "pointer" }} />
                    </Box>
                    <Box mb={"20px"}>
                        <Typography ml={"5px"} fontSize={"17px"} >Full Name</Typography>
                        <input ref={fullNameRef} className='ModalInput' />
                    </Box>
                    <Box mb={"20px"}>
                        <Typography ml={"5px"} fontSize={"17px"} >Email</Typography>
                        <input ref={emailRef} className='ModalInput' />
                    </Box>
                    <Box mb={"20px"}>
                        <Typography ml={"5px"} fontSize={"17px"} >Phone</Typography>
                        <input ref={phoneRef} type={"number"} className='ModalInput' />
                    </Box>
                    <Box mb={"20px"}>
                        <Typography ml={"5px"} fontSize={"17px"} >Address</Typography>
                        <input ref={addressRef} className='ModalInput' />
                    </Box>
                    <Box mb={"20px"}>
                        <Typography ml={"5px"} fontSize={"17px"} >Subject</Typography>
                        <input ref={subjectRef} className='ModalInput' />
                    </Box>
                    <Box mb={"20px"}>
                        <Typography ml={"5px"} fontSize={"17px"} >Message</Typography>
                        <input ref={messageRef} className='ModalInput' />
                    </Box>
                
                    <Box mt={"20px"} display={"flex"} justifyContent={"center"}>
                        <Button onClick={handleClose} sx={{ background: "#dfdfdf",width:"130px", color: "black", "&:hover": { background: "dfdfdf" } }}>Submit</Button>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
}
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

export default function BasicModal() {
    const inputRef = useRef(null)
    const fullNameRef = useRef(null);
    const qualificationsRef = useRef(null);
    const ageRef = useRef(null);
    const [resume, setResume] = useState("");
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const {apiLink} = React.useContext(Context)
    const handleClose = () =>{
        setOpen(false);
        let obj = {
            fullName:fullNameRef.current.value,
            qualification:qualificationsRef.current.value,
            age:ageRef.current.value,
            resume:resume
        }
        axios.post(apiLink+"/JobApplications",obj);
        fullNameRef.current.value=""
        qualificationsRef.current.value=""
        ageRef.current.value=""
    } 
    
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setResume(reader.result);
        };
    };
    

    return (
        <div>
            <Button onClick={handleOpen} sx={{ background: "#33343f", color: "white", "&:hover": { background: "black" } }}>Apply Now !</Button>
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
                        <Typography ml={"5px"} fontSize={"17px"} >Qualification</Typography>
                        <input ref={qualificationsRef} className='ModalInput' />
                    </Box>
                    <Box mb={"20px"}>
                        <Typography ml={"5px"} fontSize={"17px"} >Age</Typography>
                        <input ref={ageRef} type={"number"} className='ModalInput' />
                    </Box>
                    <Box mb={"20px"}    >
                        <Box onClick={() => {
                            inputRef.current.click();
                        }} sx={{ cursor: "pointer" }} position={"relative"} height={"70px"} width={"150px"}>
                            <input ref={inputRef} onChange={handleFileChange} type={"file"} style={{ width: "100%", height: "100%", position: "absolute" }} />
                            <Box p={"20px"} zIndex={"50"} bgcolor={"#dfdfdf"} position={"absolute"} display={"flex"} alignItems={"center"} justifyContent={"center"} width={"100%"} height={"100%"}>
                                <Typography color={"black"} fontWeight={"bold"} fontSize={"17px"} >ATTACH RESUME</Typography>
                                <AddCircleOutlineIcon/>
                            </Box>
                        </Box>
                    </Box>
                    <Box mt={"20px"} display={"flex"} justifyContent={"center"}>
                        <Button  onClick={handleClose} sx={{ background: "#dfdfdf",width:"130px", color: "black", "&:hover": { background: "dfdfdf" } }}>Submit</Button>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
}
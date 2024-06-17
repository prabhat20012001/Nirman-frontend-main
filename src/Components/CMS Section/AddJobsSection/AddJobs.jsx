import { Box, Button, Typography } from "@mui/material";
import { useRef } from "react";
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import axios from "axios";
import { useContext } from "react";
import { Context } from "../../../ContextApi";


export default function AddJobs() {
    const [JobTitle, setJobTitle] = useState("");
    const [location, setLocation] = useState("");
    const [jobDescription, setJobDescription] = useState("");
    const [qualifications, setQualifications] = useState([]);
    const [openPositions, setOpenPositions] = useState(0);
    const qualificationRef = useRef(null)
    const {apiLink} = useContext(Context)
    return (
        <Box width={"100%"} minHeight={"100%"} display={"flex"}>
            <Box p={"20px"} width={"50%"}>
                <Box mb={"10px"}>
                    <Typography>Job Name</Typography>
                    <input value={JobTitle} onInput={(e) => setJobTitle(e.target.value)} style={{ width: "100%", height: "40px", padding: "20px", fontSize: "20px" }} />
                </Box>
                <Box mb={"10px"}>
                    <Typography>Location</Typography>
                    <input value={location} onInput={(e) => setLocation(e.target.value)} style={{ width: "100%", height: "40px", padding: "20px", fontSize: "20px" }} />
                </Box>
                <Box mb={"10px"}>
                    <Typography>Job Description</Typography>
                    <textarea value={jobDescription} onInput={(e) => setJobDescription(e.target.value)} style={{ width: "100%", height: "100px", padding: "10px", fontSize: "16px", resize: "none" }} />
                </Box>
                <Box mb={"10px"}>
                    <Typography>Qualifications</Typography>
                    <Box display={"flex"} gap={"10px"}>
                        <input ref={qualificationRef} style={{ width: "80%", height: "40px", padding: "20px", fontSize: "20px" }} />
                        <Button onClick={(e) => {
                            if (qualificationRef.current.value == "") return
                            setQualifications([...qualifications,qualificationRef.current.value]);
                            qualificationRef.current.value = ""
                        }
                        }
                            sx={{ width: "20%", height: "40px", background: "lightgreen" }}>Add</Button>
                    </Box>
                </Box>
                <Box mb={"10px"}>
                    <Typography>Open Positions</Typography>
                    <input value={openPositions} min={1} onInput={(e) => setOpenPositions(e.target.value)} type={"number"} style={{ width: "100%", height: "40px", padding: "10px", fontSize: "16px", resize: "none" }} />
                </Box>
                <Box mb={"10px"}>
                    <Button onClick={()=>{
                        let obj = {JobTitle,location,jobDescription,qualifications,openPositions};
                        axios.post(apiLink+"/Jobs",obj)
                        // axios.post("https://futuristic-unexpected-citrine.glitch.me/Jobs",obj)
                        console.log(obj);
                        setJobTitle("");
                        setLocation("");
                        setJobDescription("");
                        setQualifications([]);
                        setOpenPositions(0);
                    }}
                    
                    sx={{ width: "100%", color: "black", background: "lightgreen" }}>Submit</Button>
                </Box>
            </Box>
            <Box p={"20px"} width={"50%"} display={"flex"} flexDirection={"column"} gap={"20px"}>
                <Box>
                    <Typography mb={"5px"} fontWeight={"700"} fontSize={"28px"}>
                        {JobTitle}
                    </Typography>
                    <Typography>
                        {location}
                    </Typography>
                </Box>

                <Typography fontSize={"14px"} minHeight={"100px"}>
                    {jobDescription}
                </Typography>
                <Typography fontStyle={"italic"} fontWeight={800}>Qualification :</Typography>
                <ul style={{ marginLeft: "20px" }}>
                    {qualifications.map((i, index) => {
                        return (
                            <Box key={index} display={"flex"} justifyContent={"space-between"}>
                                <li style={{ fontFamily: "arial" }}>{i}</li>
                                <CloseIcon sx={{cursor:"pointer"}} onClick={()=>{
                                    let temp = qualifications.filter((i,indexF)=>index!=indexF);
                                    setQualifications(temp)
                                }}/>
                            </Box>
                        )
                    })}
                </ul>
                <Box>
                    <Typography fontStyle={"italic"} fontWeight={800}>Open Positions :</Typography>
                    <Typography fontSize={"14px"}>
                        {openPositions}
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}
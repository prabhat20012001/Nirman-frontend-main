import { Box, Button, Checkbox, FormControlLabel, Typography } from "@mui/material";
import axios from "axios";
import { useRef, useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import { Context } from "../../../ContextApi";
import { useContext } from "react";

export default function ProjectCard({ images, heading, date, description, isVolunteer, func, id  }) {
    const headingRef = useRef(null);
    const descRef = useRef(null);
    const [imgs, setImgs] = useState(images);
    const [readOnly, setReadOnly] = useState(true)
    const [volunteer,setVolunteer] = useState(false)
    console.log(isVolunteer)
    let {apiLink} = useContext(Context)
    return (
        <Box flexShrink={0} padding={"20px"} minHeight={"50px"} flexDirection={"column"} display={"flex"} width={"100%"} boxShadow={"rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px"} gap={"20px"}>
            <Box width={"100%"} display={"flex"} >
                <Box display={"flex"} flexDirection={"column"} width={"80%"}>
                    <input ref={headingRef} readOnly={readOnly} style={{ fontSize: "30px", fontWeight: "800" }} defaultValue={heading} />
                    <Box display={"flex"} alignItems={"center"} gap={"20px"}>
                        <Typography>Volunteer</Typography>
                        <FormControlLabel control={<Checkbox disabled={readOnly} onChange={(e) => setVolunteer(e.target.checked)} defaultChecked={isVolunteer} />} label="Volunteer" />
                    </Box>
                    <textarea ref={descRef} readOnly={readOnly} style={{ resize: "none", fontSize: "16px", minHeight: "100px" }} defaultValue={description} />
                </Box>
                <Box p={"10px"} width={"20%"} display={"flex"} flexDirection={"column"} justifyContent={"center"} gap={"10px"}>
                    <Button onClick={()=>{
                        
                        func()
                    }} variant="text" sx={{ "&:hover": { background: "#7912f7" }, color: "white", width: "100%", background: "#7912f7", height: "30px" }} >
                        Delete
                    </Button>
                    <Button onClick={() => {
                        setReadOnly(true);
                        let obj = {
                            heading: headingRef.current.value,
                            volunteer: volunteer,
                            description: descRef.current.value,
                            images: imgs
                        }
                        axios.patch(apiLink+`/projects/${id}`, obj)
                    }}
                        variant="text" sx={{ display: !readOnly ? "flex" : "none", "&:hover": { background: "#7912f7" }, color: "white", width: "100%", background: "#7912f7", height: "30px" }} >
                        Save
                    </Button>
                    <Button onClick={() => {
                        setReadOnly(false)
                    }}
                        variant="text" sx={{ display: readOnly ? "flex" : "none", "&:hover": { background: "#7912f7" }, color: "white", width: "100%", background: "#7912f7", height: "30px" }}>
                        Update
                    </Button>
                </Box>
            </Box>
            <Box display={"flex"} flexWrap={"wrap"} justifyContent={"space-evenly"}>
            <img width={"100%"} height={"100%"} src={imgs} />
            </Box>
        </Box>
    )
}
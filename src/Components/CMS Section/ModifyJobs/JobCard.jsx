import { Box, Button, Typography } from "@mui/material";
import axios from "axios";
import { useRef, useState } from "react";
import s from "../AddTeam.module.css"
import CloseIcon from '@mui/icons-material/Close';
import { useContext } from "react";
import { Context } from "../../../ContextApi";
export default function JobCard({ title, location, jobDescription, qualifications, openPositions, func, id }) {
    let [isReadOnly, setIsReadOnly] = useState(true);
    let headingRef = useRef(null)
    let locationRef = useRef(null)
    let descriptionRef = useRef(null)
    let openPositionsRef = useRef(null)
    let [qualificationsArr, setQualificationsArr] = useState(qualifications)
    let {apiLink} = useContext(Context)
    return (
        <Box flexShrink={0} padding={"20px"} minHeight={"50px"} gap="20px" display={"flex"} alignItems={"center"} width={"100%"} boxShadow={"rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px"}>
            <Box display={"flex"} flexDirection={"column"} width={"80%"} gap={"10px"}>
                <input ref={headingRef} defaultValue={title} readOnly={isReadOnly} style={{ width: "80%", height: "100%", resize: "none" }}>
                </input>
                <input ref={locationRef} defaultValue={location} className={s.TestimonialCardInput} readOnly={isReadOnly} style={{ width: "80%", height: "100%", resize: "none" }}>
                </input>
                <textarea ref={descriptionRef} defaultValue={jobDescription} className={s.TestimonialCardInput} readOnly={isReadOnly} rows="7" cols="200" style={{ width: "80%", height: "100%", resize: "none" }}>
                </textarea>
                <Box>
                    <Typography>Open Positions</Typography>
                    <input ref={openPositionsRef} defaultValue={openPositions} className={s.TestimonialCardInput} readOnly={isReadOnly} style={{ width: "80%", height: "100%", resize: "none" }}>
                    </input>
                </Box>
                <Box display={"flex"} flexWrap={"wrap"} gap={"10px"}>
                    {
                        qualificationsArr.map((element, index) => (
                            <Box display={"flex"}>
                                <Typography>{element}</Typography>
                                <CloseIcon sx={{ display: isReadOnly ? "none" : "block" }} onClick={() => {
                                    let filteredData = qualificationsArr.filter((el, i) => i != index);
                                    setQualificationsArr(filteredData)
                                }} />
                            </Box>
                        ))
                    }
                </Box>
            </Box>
            <Box display={"flex"} gap={"20px"} flexDirection={"column"} width={"20%"}>
                <Button style={{ display: !isReadOnly ? "none" : "block" }} onClick={() => {
                    setIsReadOnly(false)
                }} variant="text" sx={{ "&:hover": { background: "#7912f7" }, color: "white", width: "100%", background: "#7912f7", height: "30px" }} >
                    Update
                </Button>
                <Button onClick={() => {
                    setIsReadOnly(true);
                    axios.patch(apiLink+`/jobs/${id}`, {
                        JobTitle: headingRef.current.value,
                        location: locationRef.current.value,
                        jobDescription: descriptionRef.current.value,
                        qualifications: qualificationsArr,
                        openPositions: openPositionsRef.current.value,
                    })
                }}
                    style={{ display: isReadOnly ? "none" : "block" }} variant="text" sx={{ "&:hover": { background: "#7912f7" }, color: "white", width: "100%", background: "#7912f7", height: "30px" }}>
                    Save
                </Button>

                <Button onClick={func} variant="text" sx={{ "&:hover": { background: "#7912f7" }, color: "white", width: "100%", background: "#7912f7", height: "30px" }} >
                    Delete
                </Button>
            </Box>
        </Box>
    )
}
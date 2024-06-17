import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { set } from "mongoose";
import { useContext } from "react";
import { useRef, useState } from "react";
import { Context } from "../../../ContextApi";


export default function AddLivesAffected() {
    let headingRef = useRef(null)
    let descRef = useRef(null)
    let countRef = useRef(null)
    const {apiLink} = useContext(Context)
    function handleSubmit() {
        let obj = {
            title: headingRef.current.value,
            description: descRef.current.value,
            count: countRef.current.value,
        }
        axios.post(apiLink+"/lifeAffected", obj)
        // axios.post("https://futuristic-unexpected-citrine.glitch.me/blogs",obj)
        console.log(obj);
        headingRef.current.value = ""
        descRef.current.value = ""
        countRef.current.value = ""
    }
    return (
        <Box width={"100%"} minHeight={"100%"} p={"20px"} display={"flex"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"}>
            <Box width={"100%"} display={"flex"} justifyContent={"center"}>
                <Box width={"50%"}>
                    <Box width={"100%"}>
                        <Typography>Heading</Typography>
                        <input ref={headingRef} style={{ width: "100%", padding: "10px" }} type="text" />
                    </Box>
                    <Box width={"100%"}>
                        <Typography>Lives Affected</Typography>
                        <input ref={countRef}  style={{ width: "100%", padding: "10px" }} type="number" />
                    </Box>
                    <Box width={"100%"}>
                        <Typography>Description</Typography>
                        <textarea ref={descRef} style={{ resize: "none", width: "100%", padding: "10px", minHeight: "300px" }} />
                    </Box>
                </Box>
            </Box>
            <Button onClick={handleSubmit} sx={{ fontWeight: "bold", width: "50%", background: "lightgreen", "&:hover": { background: "green", color: "white" } }}>Upload</Button>

        </Box>
    )
}
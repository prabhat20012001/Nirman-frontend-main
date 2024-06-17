import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useContext } from "react";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../ContextApi";



export default function IndividualProjectPage() {
    let {projectID} = useParams();
    const parentRef = useRef(null)
    let [heading,setHeading] = useState("")
    let [image,setImage] = useState("")
    const {apiLink} = useContext(Context)
    window.scrollTo(0,0);
    useEffect(() => {
        axios.get(`${apiLink}/Projects/${projectID}`).then(res=>{
            parentRef.current.innerHTML = res.data.html
            setHeading(res.data.heading)
            setImage(res.data.images)
            console.log(res)
        })
    })
    return (
        <Box>
        <br />
        <br />
        <Typography textAlign={"center"} fontWeight={"700"} variant="h4">{heading}</Typography>
        <br />
        <Box width={"50%"} m={"auto"}>
        <img draggable={"false"} style={{ width: "100%", height: "400px" }} src={image} alt={"projects"} />
        </Box>
            <Box ref={parentRef} id={"blogContainer"} width={"100%"} minHeight={"100vh"} padding={"20px"} p={["20px","20px","20px 40px","20px 40px"]}>
            
        </Box>
        </Box>
    )
}

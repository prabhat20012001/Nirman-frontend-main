import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useContext } from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../ContextApi";



export default function CenterDetailsPage() {
    let data = useParams();
    const {apiLink} = useContext(Context)
    window.scrollTo(0, 0);
    let [blogData, setBlogData] = useState({})
    useEffect(() => {
        console.log(data)
        axios.get(`${apiLink}/centers/${data.CenterID}`).then((res) => {
            setBlogData(res.data)
            console.log(res.data)
        })
    }, [])
    return (
        <Box width={"100%"} mt={"5%"} minHeight={"100vh"} padding={"20px"} display={"flex"} flexDirection={"column"} gap={"30px"} alignItems={"center"}>
            <Box width={"70%"} display={"flex"} flexDirection={"column"} gap={"10px"} alignItems={"center"}>
            <Typography textAlign={"center"} variant="h4" fontWeight={700} width={["100%"]}>{blogData.heading}</Typography>
            <img src={blogData.image} style={{margin:"auto"}} alt="img" />
            <Typography textAlign={"center"} width={["100%"]}>{blogData.description}</Typography>
            </Box>
        </Box>
    )
}
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useEffect, useState } from "react";
import JobApplicationsCard from "./JobApplicationsCard";
import { useContext } from "react";
import { Context } from "../../../ContextApi";



export default function JobApplications() {
    let [data, setData] = useState([]);
    const {apiLink} = useContext(Context)
    useEffect(() => {
        axios.get(apiLink+"/jobApplications").then((res)=>setData(res.data))
        // axios.get("https://futuristic-unexpected-citrine.glitch.me/JobApplications").then((res)=>setData(res.data))
    }, [])
    return (
        <Box width={"100%"} minHeight={"100%"} p={"20px"}>
            <Typography fontSize={"40px"}>Job Applications</Typography>
            {
                data.map((i)=>{
                    return (
                        <JobApplicationsCard name={i.fullName} qualification={i.qualification} age={i.age} resume={i.resume}  />
                    )
                })
            }
        </Box>
    )
}
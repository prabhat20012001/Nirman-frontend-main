

import { Typography } from "@mui/material"
import { Box } from "@mui/system"
import axios from "axios";
import { useEffect, useState } from "react"
import JobCard from "./JobCard";
import { useContext } from "react";
import { Context } from "../../../ContextApi";



export default function ModifyJobs() {
    let [data,setData] = useState([]);
    let {apiLink} = useContext(Context)
    
    useEffect(()=>{
        axios.get(apiLink+"/jobs")
        .then(res=>setData(res.data))
    },[])
    return (
        <Box gap={"20px"} display={"flex"} flexDirection={"column"}  p={"30px"} width={"100%"} height={"600px"} >
            {data.length == 0 ? <Typography fontSize={"40px"}>Team Data is Empty</Typography> : data.map((i, index) => {
                return (
                    <JobCard key={i._id} title={i.JobTitle} location={i.location} jobDescription={i.jobDescription} qualifications={i.qualifications} openPositions={i.openPositions} id={i._id} func={()=>{
                        let temp = data.filter((item,ind)=>index!=ind);
                        setData(temp);
                        axios.delete(apiLink+`/jobs/${i._id}`)
                    }}/>
                )
            })}
        </Box>
    )
}
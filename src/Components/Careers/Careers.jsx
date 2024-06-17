import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useContext } from "react";
import { Context } from "../../ContextApi";
import CareerCard from "./CareerCard";


export default function Careers() {
    let {careerData} = useContext(Context)
    return (
        <Box mt={"20px"} minHeight={"100vh"} p={"20px"} display={"flex"} gap={"20px"} flexDirection={"column"} alignItems={"center"}>
            <Box textAlign={"center"}>
                <Typography fontWeight={"bolder"} fontSize={"40px"} color={"rgb(86, 79, 164)"}>Careers</Typography>
                <Typography color={"grey"}>Empower Your Career: Join Our Team</Typography>
            </Box>
            {careerData.map(i=>(
                <CareerCard key={i._id} JobId={i._id} title={i.JobTitle} qualifications={i.qualifications}/>
            ))}
        </Box>
    )
}
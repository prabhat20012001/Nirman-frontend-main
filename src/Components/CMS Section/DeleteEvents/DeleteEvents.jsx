import { Typography } from "@mui/material"
import { Box } from "@mui/system"
import axios from "axios";
import { useEffect, useState } from "react"
import DeleteEventCard from "./DeleteEventsCard";
import { useContext } from "react";
import { Context } from "../../../ContextApi";



export default function DeleteEvents() {
    let [data,setData] = useState([]);
    const {apiLink} = useContext(Context)
    useEffect(()=>{
        axios.get(apiLink+"/event")
        .then(res=>setData(res.data))
    },[])
    return (
        <Box gap={"20px"} display={"flex"} flexDirection={"column"}  p={"30px"} width={"100%"} height={"600px"} >
            {data.length === 0 ? <Typography fontSize={"40px"}>Team Data is Empty</Typography> : data.map((i, index) => {
                return (
                    <DeleteEventCard key={i._id} id={i._id} description={i.description} fundRaised={i.fundRaised} title={i.title} date={i.date} images={i.images} func={()=>{
                        let temp = data.filter((item,ind)=>index!==ind);
                        setData(temp);
                        axios.delete(`${apiLink}/event/${i._id}`)
                    }}/>
                )
            })}
        </Box>
    )
    
}
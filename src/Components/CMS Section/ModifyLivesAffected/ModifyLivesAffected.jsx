

import { Typography } from "@mui/material"
import { Box } from "@mui/system"
import axios from "axios";
import { useEffect, useState } from "react"
import ModifyLivesAffectedCard from "./ModifyLivesAffectedCard";
import { Context } from "../../../ContextApi";
import { useContext } from "react";



export default function ModifyLivesAffected() {
    let [data,setData] = useState([]);
    let {apiLink} = useContext(Context)
    useEffect(()=>{
        axios.get(apiLink+"/lifeAffected")
        .then(res=>setData(res.data))
    },[])
    return (
        <Box gap={"20px"} display={"flex"} flexDirection={"column"}  p={"30px"} width={"100%"} height={"600px"} >
            {data.length == 0 ? <Typography fontSize={"40px"}>Team Data is Empty</Typography> : data.map((i, index) => {
                return (
                    <ModifyLivesAffectedCard key={i._id} title={i.title} description={i.description} count={i.count} id={i._id} func={()=>{
                        let temp = data.filter((item,ind)=>index!=ind);
                        setData(temp);
                        axios.delete(apiLink+`/lifeAffected/${i._id}`)
                    }}/>
                )
            })}
        </Box>
    )
}
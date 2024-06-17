import { Box } from "@mui/system";
import axios from "axios";
import { useEffect, useState } from "react";
import LifeAffectedCard from "./LifeAffectedCard";
import { useContext } from "react";
import { Context } from "../../../ContextApi";

export default function LivesAffected(){
    let [data,setData] = useState([]);
    const {apiLink} = useContext(Context)
    useEffect(() => {
      axios.get(apiLink+"/lifeAffected").then(res=>setData(res.data))
    }, [])
    
    return (
        <Box width={"100%"} p={"20px"} display={"flex"} flexWrap={"wrap"} justifyContent={"center"}>
            {
                data.map((i)=>(
                    <LifeAffectedCard title={i.title} description={i.description.slice(0,200)} counter={Number(i.count)}/>
                ))
            }
        </Box>
    )
}
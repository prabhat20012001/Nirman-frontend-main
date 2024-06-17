import { Typography } from "@mui/material"
import { Box } from "@mui/system"
import axios from "axios";
import { useEffect, useState } from "react"
import GalleryCard from "./DeleteMediaCard";
import { useContext } from "react";
import { Context } from "../../../ContextApi";



export default function DeleteGallery() {
    let [data,setData] = useState([]);
    const {apiLink} = useContext(Context)
    useEffect(()=>{
        axios.get(apiLink+"/gallery")
        .then(res=>setData(res.data))
    },[])
    return (
        <Box gap={"20px"} display={"flex"} flexDirection={"column"}  p={"30px"} width={"100%"} height={"600px"} >
            {data.length === 0 ? <Typography fontSize={"40px"}>Team Data is Empty</Typography> : data.map((i, index) => {
                return (
                    <GalleryCard key={i._id} id={i._id} title={i.title} date={i.date} images={i.images} description={i.description} func={()=>{
                        let temp = data.filter((item,ind)=>index!==ind);
                        setData(temp);
                        axios.delete(`${apiLink}/gallery/${i._id}`)
                    }}/>
                )
            })}
        </Box>
    )
}
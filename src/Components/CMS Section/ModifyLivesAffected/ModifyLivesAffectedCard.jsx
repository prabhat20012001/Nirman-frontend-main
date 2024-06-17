
import { Box, Button, Typography } from "@mui/material";
import axios from "axios";
import { useRef, useState } from "react";
import s from "../AddTeam.module.css"
import { Context } from "../../../ContextApi";
import { useContext } from "react";

export default function ModifyLivesAffectedCard({ title, func, id, description, count }) {
    let [isReadOnly,setIsReadOnly] = useState(true);
    let titleRef = useRef(null)
    let descriptionRef = useRef(null)
    let countRef = useRef(null)
    let {apiLink} = useContext(Context)
    return (
        <Box flexShrink={0} padding={"20px"} minHeight={"50px"} gap="20px" display={"flex"} alignItems={"center"} width={"100%"} boxShadow={"rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px"}>
            <Box display={"flex"} flexDirection={"column"}> 
            <input ref={titleRef} style={{fontSize:"30px"}} readOnly={isReadOnly} defaultValue={title}/>
            <Box display={"flex"} gap={"20px"}>
                <Typography  style={{fontSize:"30px"}}>Count: </Typography>
            <input  ref={countRef} style={{fontSize:"30px"}} readOnly={isReadOnly} type={"number"} defaultValue={count}/>
            </Box>
            <textarea ref={descriptionRef} defaultValue={description} className={s.TestimonialCardInput} readOnly={isReadOnly} rows="7" cols="200" style={{width:"80%",height:"100%",resize: "none"}}>
            </textarea>
            </Box>
            <Box display={"flex"} gap={"20px"} flexDirection={"column"} width={"20%"}>
                <Button style={{display:!isReadOnly?"none":"block"}} onClick={()=>{
                    setIsReadOnly(false)
                }} variant="text" sx={{ "&:hover": { background: "#7912f7" }, color: "white", width: "100%", background: "#7912f7", height: "30px" }} >
                    Update
                </Button>
                <Button onClick={()=>{
                    setIsReadOnly(true);
                    axios.patch(apiLink+`/lifeAffected/${id}`,{
                        title:titleRef.current.value,
                        description:descriptionRef.current.value,
                        count:countRef.current.value,
                    })
                }} 
                style={{display:isReadOnly?"none":"block"}}variant="text" sx={{ "&:hover": { background: "#7912f7" }, color: "white", width: "100%", background: "#7912f7", height: "30px" }}>
                    Save
                </Button>

                <Button onClick={func} variant="text" sx={{ "&:hover": { background: "#7912f7" }, color: "white",  width: "100%", background: "#7912f7", height: "30px" }} >
                    Delete
                </Button>
            </Box>
        </Box>
    )
}
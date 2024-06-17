import { Typography, Box } from "@mui/material"
import { useState } from "react"



export default function TestimonialCircle({wid,setWid,img,name,company}) {
    // const [wid,setWid] = useState(450)
    return (
        <Box flexShrink={"0"} sx={{ transition: ".3s",overflowX:"hidden" }} position={"relative"} height={"10vw"} width={`${wid}vw`} display={"flex"}alignItems={"center"}>
            <Box position={"absolute"} left={"0"} width={"450px"} display={"flex"} gap={"20px"} pl={"3px"}>
                <Box sx={{ height: "9vw", width: "9vw", background: "white", borderRadius: "50%", flexShrink: "0",boxShadow:"rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset", overflow:"hidden", display:"flex", justifyContent:"center", alignItems:"center" }}>
                    <img src={img} width={"100%"} alt={"kuch bhi image"} />
                </Box>
                <Box sx={{ width: "325px", flexShrink: "0", display: "flex", flexDirection: "column", justifyContent: "space-evenly" }}>
                    <Typography fontSize={["20px","22px","24px","35px"]} sx={{ fontfamily: "Roboto, sans-serif", fontWeight: "800",color:"#564fa4" }}>{name}</Typography>
                    <Typography fontSize={["10px","12px","15px","20px"]} sx={{ fontfamily: "Roboto, sans-serif", fontWeight: "500", color: "#564fa4" }}>{company}</Typography>
                </Box>
            </Box>
        </Box>
    )
}
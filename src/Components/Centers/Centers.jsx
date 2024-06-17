import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import CenterCard from "./CenterCard"
import { useEffect, useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { Context } from "../../ContextApi";
export default function Centers() {
    let {centre} = useContext(Context)
    let [data, setData] = useState([])
    // useEffect(() => {
    //     axios.get("https://helpapi.onrender.com/centers").then(res => setData(res.data))
    // })
    return (
        <Box overflow={"hidden"} minHeight={["100vw", "65vw", "45vw"]} sx={{ display: "flex", alignItems: "center", flexDirection: "column" }} justifyContent={"space-evenly"}>
            <Typography sx={{ marginTop: "20px", letterSpacing: "4px", color: "rgb(86, 79, 164)" }} fontWeight="700" variant="h4" mb={"20px"}>OUR CENTERS</Typography>
            <Box flexDirection={["column", "row", "row", "row"]} width={"calc(100vw - 20px)"} display={"flex"} height="80%" alignItems={"center"} gap={"20px"} justifyContent="space-evenly">
                {
                    centre.map(i => (
                        <CenterCard _id={i._id} text={i.heading} description={i.description.slice(0,150)+"..."} location={i.location} imgSrc={i.image}></CenterCard>
                    ))
                }
            </Box>
            <Box height={"20px"}></Box>
        </Box>
    )
}
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useEffect } from "react";
import { useContext } from "react";
import { Context } from "../../../ContextApi";
import EventsCard from "./EventsCard";



export default function Events() {
    let { events } = useContext(Context);

    return (events.length == 0 ? "" :
        <Box bgcolor={"white"} width={"100%"} minHeight={"300px"} display={"flex"} flexDirection={'column'} alignItems={"center"} p={"20px"} gap={"20px"} borderBottom={"2px solid rgb(86, 79, 164)"}>
            <Typography fontSize={"30px"} fontWeight={"900"} letterSpacing={"5px"} color={"rgb(86, 79, 164)"}>EVENTS</Typography>
            <Box display={"grid"} flexWrap={"wrap"} gap={"20px"} gridTemplateColumns={["repeat(1,1fr)", "repeat(2,1fr)", "repeat(3,1fr)"]}>
                {
                    events.map(i => (
                        <EventsCard key={i._id} fundRaised={i.fundRaised} heading={i.title} description={i.description} date={i.date} images={i.images} mainPageLink={i.mainPageLink} id={`${i._id}`} />
                    ))
                }
            </Box>
        </Box>
    )
}
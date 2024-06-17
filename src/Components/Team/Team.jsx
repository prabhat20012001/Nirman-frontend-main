import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import { Context } from "../../ContextApi";
import MemberCard from "./MemberCard";
import s from "./team.module.css"

export default function Team() {
    let { items } = useContext(Context)
    return (
        <Box display={"flex"} justifyContent={"center"} flexDirection={"column"} alignItems={"center"} width={"100vw"} marginBottom={"50px"}>
            <Box m={"40px 0"} width={"90%"} height={"10%"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                <Typography fontSize={["24px", "26px", "30px", "40px"]} fontWeight={"800"} color={"rgb(86, 79, 164)"}>OUR TEAM</Typography>
            </Box>
            <Box p={"20px"} alignItems={"center"} gap={"20px"} display={"flex"} flexWrap={"wrap"} flexDirection={"column"} width={"100%"}>
                <Box className={s.TeamGrid} display={"grid"} p={"20px"}  minHeight={"500px"} rowGap={"20px"} width={"100%"} >
                    {items.map((i) => {
                        return (
                            <MemberCard key={i.img} img={i.img} name={i.name} description={i.description} role={i.secondText} linkedin={i.linkedin} instagram={i.instagram} twitter={i.twitter}  />
                        )
                    })}
                </Box>
            </Box>
        </Box>
    )
}
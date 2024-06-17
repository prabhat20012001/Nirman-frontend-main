import { Box } from "@mui/system";
import { Button, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import s from "./Involvement.module.css"
export default function CenterCard({ text, description, location, imgSrc, _id }) {
    const ref = useRef(null)
    const isInView = useInView(ref)

    const variants = {
        hidden: { opacity: 0, x: -150 },
        visible: { opacity: 1, x: 0 },
    };
    return (
        <motion.div
            className={s.InvolvementCardAnimation}
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.75 }}>
            <NavLink to={`${_id}`} style={{color:"black",textDecoration:"none"}}>
                <Box className={"InvolvementMainCard"} pb={"20px"} ref={ref} display={"flex"} flexDirection={"column"} alignItems={"center"} width={"100%"} overflow={"hidden"} position={"relative"} boxShadow={"rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px"}>
                    <Box width={"100%"} height={"100%"} overflow={"hidden"}>
                        <Box width={"100%"} height={"70%"} display={"flex"} justifyContent={"center"} >
                            <img draggable={"false"} src={imgSrc} style={{ width: "100%" }} />
                        </Box>
                        <Box width={"100%"} display={"flex"} flexDirection={"column"} padding={"20px"}>
                            <Typography fontWeight={"800"} fontSize={"18px"}>{text}</Typography>
                            <Typography fontWeight={"800"} fontSize={"13px"}>{location}</Typography>
                            <Typography fontSize={"12px"} color={"grey"}>
                                {description}
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </NavLink>
        </motion.div>
    )
}
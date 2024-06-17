import { Box, Button, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";



export default function GalleryCategoryCardMobile({ heading, volunteer, description, img, id,index }) {
    const ref = useRef(null)
    const isInView = useInView(ref)

    const variants = {
        hidden: { opacity: 0, x: -150 },
        visible: { opacity: 1, x: 0 },
    };
    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.75 }}
        >
            <Box display={["block", "none", "none", "none"]} sx={{ transition: "1s", overflowX: "hidden" }} className={"card"} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"} position={"relative"} flexShrink={0} >
                <NavLink to={`${index}`} style={{textDecoration:"none",color:"black"}}>
                    <Box width={"100%"} height={"50%"} overflow={"hidden"}>
                        <img draggable={"false"} style={{ width: "100%", height: "100%" }} src={img} alt={"projects"} />
                    </Box>
                    <Box padding={"20px"} width={"100%"} height={"50%"}>
                        <Typography fontWeight={"800"} fontSize={"18px"} mb={"10px"}>{heading || "Help Foundation1"}</Typography>
                        <Typography fontSize={["10px", "14px"]} color={"grey"}>
                            {description}
                        </Typography>
                    </Box>
                </NavLink>
            </Box>
        </motion.div>
    )
}
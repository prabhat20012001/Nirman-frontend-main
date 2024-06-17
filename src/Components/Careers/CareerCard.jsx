import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

export default function CareerCard({ title, qualifications, JobId }) {
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
            style={{width:"100%",display:"flex",justifyContent:"center"}}
            >
            <Box ref={ref} sx={{ cursor: "pointer", "&:hover": { boxShadow: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px" }}} bgcolor={"white"} minHeight={"300px"} width={["100%", "100%", "80%", "80%"]} boxShadow={"rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"} padding={"20px"}>
                <NavLink style={{ textDecoration: "none", color: "black" }} to={`${JobId}`}>
                    <Box borderBottom={"1px solid gray"} pb={"5px"}>
                        <Typography fontWeight={"600"} fontSize={"30px"}>
                            {title}
                        </Typography>
                        <Typography color={"gray"} fontSize={"15px"}>Help Foundation, In-Office: Noida, Uttar Pradesh | Remote Eligible</Typography>
                    </Box>
                    <Box mt={"20px"}>
                        <Typography mb={"20px"} fontWeight={"600"}>Qualification :</Typography>
                        <ul style={{ marginLeft: "30px", display: "flex", flexDirection: "column", gap: "20px", width: "calc( 100% - 30px )", fontFamily: "Roboto, sans-serif" }}>
                            {qualifications.map((i, index) => (
                                <li key={index}>{i}</li>
                            ))}
                        </ul>
                    </Box>
                </NavLink>
            </Box>
        </motion.div>
    )
}
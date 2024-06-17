import { Box } from "@mui/system";
import { Button, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import s from "./Involvement.module.css"
export default function LifeAffectedCard({ title, description, counter }) {
    const ref = useRef(null)
    const isInView = useInView(ref)
    const [count, setCount] = useState(counter)
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
            <Box className={"InvolvementMainCard"} pb={"20px"} ref={ref} display={"flex"} flexDirection={"column"} alignItems={"center"} width={"100%"} overflow={"hidden"} position={"relative"} p={"20px"}>
                <Box width={"100%"} height={"70%"} overflow={"hidden"} textAlign={"center"} color={"rgb(108, 132, 56)"}>
                    <Typography fontWeight={"900"} fontSize={"80px"}>{counter+"+"}</Typography>
                    <Typography fontWeight={"900"} fontSize={"20px"} mt={"-20px"}>Lives Affected</Typography>
                </Box>
                <Box width={"100%"} height={"30%"} overflow={"hidden"}  textAlign={"center"} color={"rgb(86, 79, 164)"}>
                    <Typography fontWeight={"900"} fontSize={"25px"}>{title}</Typography>
                </Box>
            </Box>
        </motion.div>
    )
}
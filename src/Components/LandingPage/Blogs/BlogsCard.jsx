
import { Box, Button, Grid, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import s from "./Blogs.module.css"
export default function BlogCard({ blog, head,img, id, wid, date, blogLink }) {
    const ref = useRef(null)
    const isInView = useInView(ref)

    const variants = {
        hidden: { opacity: 0, x: -150 },
        visible: { opacity: 1, x: 0 },
    };
    return (
        <motion.div
        className={s.BlogsCard}
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.75 }}
            style={{width:wid}}
            >
            
            <Box  flexShrink={0} width={"100%"} >
                <Box width={"100%"} overflow={"hidden"}>
                    <img style={{ width: "100%" }} src={img} />
                </Box>
                <Box minHeight={"260px"}>
                    <Box padding={"10px"}>
                        <Typography fontFamily={"Roboto, sans-serif"} fontSize={"25px"}>{head}</Typography>
                    </Box>
                    <Box padding={"10px"}>
                        <Typography fontFamily={"Roboto, sans-serif"}  color={"gray"} fontSize={"15px"}>{date}</Typography>
                    </Box>
                    <Box padding={"10px"} fontSize={"12px"} color={"gray"} fontFamily={"Roboto, sans-serif"}>
                        {blog}
                    </Box>
                    <Box padding={"10px"}>
                        <a style={{ textDecoration: "none" }} target={"_blank"} to={`//${blogLink}`}>
                            <Button style={{ background: "orange", color: "white", fontFamily: "Roboto, sans-serif" }}>Read More</Button>
                        </a>
                    </Box>
                </Box>
            </Box>
        </motion.div>
    )
}
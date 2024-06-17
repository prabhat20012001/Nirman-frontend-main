
import { Button, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { useRef, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useInView } from 'framer-motion';
// import BgImg from "./backgroundImg-modified.png";
// import BgImg from "./backgroundImg-modified.png";
import BgImg from "./bg1.jpg";
import { motion } from "framer-motion";
export default function FirstSection() {
    const ref = useRef(null)
    const isInView = useInView(ref)

    const variants = {
        hidden: { opacity: 0, x: -150 },
        visible: { opacity: 1, x: 0 },
    };
    return (
        <Box sx={{ width: "100%" }}>
            <Box sx={{ position: "relative", width: "100%", height: "700px", background: `url(${BgImg})`, backgroundSize: "cover" }} >
                <Box sx={{ width: "100%", height: "100%", background: "black", opacity: "50%", position: "absolute" }} ></Box>
                <Box sx={{ width: "100%", height: "100%", position: "absolute" }}>

                    {/* Front Page Center Part Starts here */}

                    <Box padding={["20px", "20px", "0px", "0px"]} sx={{ width: "100%", height: "88%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Box  sx={{ width: "600px", height: "300px", display: "flex", flexDirection: "column", gap: "30px" }}>
                            <motion.div
                                ref={ref}
                                initial="hidden"
                                animate={isInView ? "visible" : "hidden"}
                                variants={variants}
                                transition={{ duration: 0.75 }}
                                style={{display:"flex",flexDirection:"column",gap:"20px"}}
                            >
                                <Typography sx={{ fontSize: "36px", color: "white", fontWeight: "800", fontFamily: "Roboto, sans-serif", lineHeight: "42px" }}>
                                Nirman
                                </Typography>
                                <Typography sx={{ fontSize: "14px", color: "white", fontWeight: "800", fontFamily: "Roboto, sans-serif" }}>
                                Nirman  is a Non-Profit Voluntary Organisation working for the cause of drown trodden and suppressed people, general weaker section of the society. We work without any discrimination of Caste, Religion, Creed and Gender etc.</Typography>
                                <NavLink to={"/Projects"} style={{ textDecoration: "none",width: "210px" }}>
                                    <Button variant="text" style={{ fontFamily: 'Roboto, sans-serif', fontSize: "20px", width: "210px", height: "68px", background: "red", color: "white", borderRadius: "10px", fontWeight: "800" }}>Start Donation</Button>
                                </NavLink>
                            </motion.div>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

import { Box } from "@mui/system";
import { Button } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import s from "./Involvement.module.css"
export default function Card({ text, imgSrc, linkk, scroll }) {
    const ref = useRef(null)
    const isInView = useInView(ref)

    const variants = {
        hidden: { opacity: 0, x: -150 },
        visible: { opacity: 1, x: 0 },
    };
    const handleClickScroll = () => {
        const element = document.getElementById('footer');
        if (element) {
            // 👇 Will scroll smoothly to the top of the next section
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <motion.div
            className={s.InvolvementCardAnimation}
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.75 }}>
            <Box className={"InvolvementMainCard"} pb={"20px"} ref={ref} display={"flex"} flexDirection={"column"} alignItems={"center"} width={"100%"} height={["120vw", "40vw", "35vw", "30vw"]} borderRadius={"50px 50px 0 0"} overflow={"hidden"} position={"relative"} boxShadow={"rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"} >
                <Box width={"100%"} height={"100%"} position={"absolute"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                    <Box height={"200%"} bgcolor="rgb(86, 79, 164)" width={"200px"} className={"involvementAnimationCard"}>

                    </Box>
                </Box>
                <Box width={"98%"} height={"98%"} borderRadius={"50px 50px 0 0"} overflow={"hidden"} position={"absolute"} top={"1%"} left={"1%"} bgcolor={"white"}>
                    <Box width={"100%"} height={"80%"} display={"flex"} justifyContent={"center"} >
                        <img draggable={"false"} src={imgSrc} style={{ width: "100%" }} />
                    </Box>
                    <Box width={"100%"} height={"15%"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                        {
                            scroll ? <Box style={{ textDecoration: "none", width: "85%", height: "100%", bgcolor: "white" }} to={`#footer`}>
                                <Button onClick={handleClickScroll} sx={{ transition: ".25s", marginTop: "20px", "&:hover": { borderRadius: "10px 40px 10px 40px", border: "2px solid rgb(86, 79, 164)", color: "rgb(86, 79, 164)" }, background: "rgb(86, 79, 164)", color: "white", fontWeight: "900", borderRadius: "10px", width: "100%", height: "100%", fontSize: "16px", letterSpacing: "2px" }} >{text}</Button>
                            </Box> : <NavLink style={{ textDecoration: "none", width: "85%", height: "100%", bgcolor: "white" }} to={`/${linkk}`}>
                                <Button sx={{ transition: ".25s", marginTop: "20px", "&:hover": { borderRadius: "10px 40px 10px 40px", border: "2px solid rgb(86, 79, 164)", color: "rgb(86, 79, 164)" }, background: "rgb(86, 79, 164)", color: "white", fontWeight: "900", borderRadius: "10px", width: "100%", height: "100%", fontSize: "16px", letterSpacing: "2px" }} >{text}</Button>
                            </NavLink>
                        }

                    </Box>
                </Box>
            </Box>
        </motion.div>
    )
}
import { Box } from "@mui/system";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import s from "./Impact.module.css"
export default function VisionCard() {
    const ref = useRef(null)
    const isInView = useInView(ref)

    const variants = {
        hidden: { opacity: 0, x: -150 },
        visible: { opacity: 1, x: 0 },
    };


    return (

        <motion.div
            className={s.VisionCard}
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.75 }}>
            <img src="https://marketplace.canva.com/EAFIEvneNCM/1/0/1600w/canva-golden-elegant-certificate-of-appreciation-0bN-aLORS9U.jpg" style={{ width: "100%" }} alt="ss" />
        </motion.div>
    )
}
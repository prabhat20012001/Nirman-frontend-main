import { Box } from "@mui/system";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import s from "./Certificates.module.css"
export default function CertificatesCard({src}) {
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
            <img src={src} style={{ width: "100%" }} alt="ss" />
        </motion.div>
    )
}
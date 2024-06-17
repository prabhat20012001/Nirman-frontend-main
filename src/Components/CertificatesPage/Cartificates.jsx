import { Box } from "@mui/system";
import { useContext } from "react";
import React from 'react';
import { Context } from "../../ContextApi";
import { Typography } from "@mui/material";
import CertificatesCard from "./CertificatesCard";
export default function Certificates() {
    let { images } = useContext(Context);
    let certificates = []
    return (
        <Box width={"100%"} minHeight={"100vh"} alignItems={"center"} display={"flex"} gap={"20px"} flexDirection={"column"}>
            <Typography fontWeight={"900"} fontSize={"40px"} m={"20px 0"} color={"rgb(86, 79, 164)"}>Certificates</Typography>
            <Box width={"90%"} display={"flex"} flexWrap={"wrap"} gap={"20px"} justifyContent={"center"} alignContent={"flex-start"}>
                {
                    certificates.map(i=>(
                        <CertificatesCard src={i} />
                    ))
                }
            </Box>
            <Box></Box>
        </Box>
    )
}
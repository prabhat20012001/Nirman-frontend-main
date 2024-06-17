import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import BasicModal from "./Modal/Modal";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useContext } from "react";
import { Context } from "../../ContextApi";

export default function JobApplicationPage() {
    const { JobID } = useParams();
    const [data, setData] = useState({});
    const [quali, setQuali] = useState(" ")
    const {apiLink} = useContext(Context)

    const ref = useRef(null)
    const isInView = useInView(ref)

    const variants = {
        hidden: { opacity: 0, x: -150 },
        visible: { opacity: 1, x: 0 },
    };

    useEffect(() => {
        axios.get(`${apiLink}/Jobs/${JobID}`).then(res => {
            setData(res.data);
            setQuali(res.data.qualifications.join(", "))
        })
        window.scrollTo(0, 0);
    }, [])
    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.75 }}
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
            <Box  mt={"20px"} minHeight={"100vh"} p={"20px"} display={"flex"} flexDirection={"column"} alignItems={"center"}>
                <Box width={["100%", "100%", "80%", "80%"]}>
                    <Box mb={"30px"} fontFamily={"Roboto, sans-serif"} pb={"10px"} borderBottom={"1px solid black"} fontSize={"40px"} fontWeight={"600"} width={"100%"}>
                        {data?.JobTitle}
                    </Box>
                    <Box mb={"20px"}>
                        <Typography mb={"10px"} fontWeight={"bold"} fontSize={"20px"}>Job Description :</Typography>
                        <Typography fontSize={"14px"} color={"gray"}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, numquam magni. Aliquid excepturi pariatur, odio doloremque amet quaerat ad ut iusto voluptatum nobis hic dignissimos modi esse dolore eveniet quod voluptas. Reiciendis earum nostrum molestias, laborum debitis eos similique consequatur eius, eveniet natus quo, tempore alias expedita dolorum dignissimos perferendis ut porro ratione. Non, quisquam ex distinctio aspernatur iste atque ratione veritatis, magni facere delectus repellendus reprehenderit accusamus voluptas quod sed molestias temporibus quas dolor eum voluptatum rerum itaque qui placeat. Pariatur autem, veritatis itaque id laudantium consequatur cumque quibusdam? Enim cupiditate quis natus reprehenderit provident molestiae mollitia. Veritatis, fugiat?
                        </Typography>
                    </Box>
                    <Box mb={"20px"}>
                        <Typography mb={"10px"} fontWeight={"bold"} fontSize={"20px"}>Open Positions :</Typography>
                        <Typography fontWeight={"bold"} fontSize={"17px"} color={"gray"}>
                            {data?.openPositions}
                        </Typography>
                    </Box>
                    <Box mb={"20px"}>
                        <Typography mb={"10px"} fontWeight={"bold"} fontSize={"20px"}>Skills Required :</Typography>
                        <Typography fontWeight={"bold"} fontSize={"17px"} color={"gray"}>
                            {quali}
                        </Typography>
                    </Box>
                    <Box mb={"20px"}>
                        <Typography mb={"10px"} fontWeight={"bold"} fontSize={"20px"}>Location :</Typography>
                        <Typography fontWeight={"bold"} fontSize={"17px"} color={"gray"}>
                            Noida, Remote
                        </Typography>
                    </Box>
                </Box>
                <BasicModal />
            </Box>
        </motion.div>
    )
}

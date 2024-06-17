import { Box, Button, Modal, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import axios from "axios";
import CloseIcon from '@mui/icons-material/Close';
import { useContext } from "react";
import { Context } from "../../../ContextApi";


export default function EventsCard({ heading, description, date, images, id, fundRaised }) {
    const ref = useRef(null);
    const {apiLink} = useContext(Context)
    const isInView = useInView(ref);
    const [donateBtnState, setDonateBtnState] = useState(false);
    const variants = {
        hidden: { opacity: 0, x: -150 },
        visible: { opacity: 1, x: 0 },
    };
    const [open, setOpen] = useState(false);
    const amountRef = useRef(null);
    const firstNameRef = useRef(null);
    const lastNameRef = useRef(null);
    const emailRef = useRef(null);
    const contactRef = useRef(null);
    async function displayRazorPay() {
        const res = await handlePayment();
        if (!res) {
            alert("Error");
            return
        }
        let obj = {
            amount: amountRef.current.value
        }
        const options = {
            "key": "rzp_test_nSahl5FThvw7uJ", // Enter the Key ID generated from the Dashboard
            "amount": obj.amount * 100 + "", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": "INR",
            "name": firstNameRef.current.value + " " + lastNameRef.current.value,
            "description": "Test Transaction",
            "image": "https://example.com/your_logo",
            "order_id": "order_IluGWxBm9U8zJ8", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "handler": function (response) {
                alert(response.razorpay_payment_id);
                alert(response.razorpay_order_id);
                alert(response.razorpay_signature)
            },
            "prefill": {
                "name": firstNameRef.current.value + " " + lastNameRef.current.value,
                "email": emailRef.current.value,
                "contact": contactRef.current.value,
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#564fa4"
            }
        };
        let { data } = await axios.post(apiLink+"/create/orderId", obj)
        options.order_id = data.orderId;
        let rzp = new window.Razorpay(options);
        rzp.open();
    }
    const handlePayment = async () => {
        return new Promise(resolve => {
            const script = document.createElement("script");
            script.src = "https://checkout.razorpay.com/v1/checkout.js";

            script.onload = () => {
                resolve(true)
            }
            script.onerror = () => {
                resolve(false)
            }
            document.body.appendChild(script);
        })
    }

    useEffect(() => {
        const today = new Date(Date.now());
        let Compare = new Date(date)
        if (Compare >= today) setDonateBtnState(true);
        else setDonateBtnState(false)
    })
    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.75 }}
        >
            <Box sx={{ transition: "1s", overflowX: "hidden" }} className={"card"} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"} position={"relative"} flexShrink={0} >
                <Box width={"100%"} height={"400px"} overflow={"hidden"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                    <img draggable={"false"} style={{ width: "100%" }} src={images} alt={"projects"} />
                </Box>
                <Box padding={"20px"} width={"100%"} height={"50%"}>
                    <Typography fontWeight={"800"} fontSize={"18px"} mb={"10px"}>{heading}</Typography>
                    <Typography color={"black"}>Date: {date}</Typography>
                    <Box display={"flex"} flexDirection={"column"}>
                        <Typography color={"black"} fontSize={"12px"}>Fund Raised : {`${fundRaised || 0}%`}</Typography>
                        <Box width={"100%"} height={"20px"} bgcolor={"#dedede"} borderRadius={"20px"} overflow={"hidden"}>
                            <Box height={"100%"} width={`${fundRaised}%`} bgcolor={"gray"}></Box>
                        </Box>
                    </Box>
                    <Typography fontSize={["10px", "14px"]} color={"grey"}>{description.slice(0, 100)}</Typography>
                    <Box display={"flex"} m={"10px 0"} gap={"10px"} flexDirection={["column", "row", "row", "row"]}>
                        <NavLink style={{ textDecoration: "none", flex: "1", width: "100%" }} target={"_blank"} to={`events/${id}`}>
                            <Button sx={{ fontSize: "13px", border: "2px solid rgb(108, 132, 56)", color: "rgb(108, 132, 56)", fontFamily: "Roboto, sans-serif", width: "100%", "&:hover": { background: "rgb(108, 132, 56)", color: "white", flex: "1" } }}>Read More...</Button>
                        </NavLink>
                        <Button onClick={()=>setOpen(true)} style={{ display: donateBtnState ? "block" : "none", background: "rgb(86, 79, 164)", color: "white", fontFamily: "Roboto, sans-serif", flex: "1" }}>Donate</Button>
                    </Box>
                    <Modal
                        open={open}
                        onClose={() => setOpen(false)}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                        sx={{ overflow: "scroll" }}>
                        <Box width={"100%"} minHeight={"100%"} display={"flex"} justifyContent={"center"} >
                            <Box width={"800px"} display={"flex"} flexDirection={"column"} gap={"20px"} minHeight={"600px"} bgcolor={"white"} p={"30px"} position={"relative"} mt={["0px","10px","20px"]}>
                                <Box top={"15px"} right={"15px"} width={"30px"} height={"30px"} position={"absolute"}>
                                    <CloseIcon sx={{ width: "100%", height: "100%", cursor: "pointer" }} onClick={() => setOpen(false)} />
                                </Box>
                                <Box borderBottom={"1px solid #dfdfdf"} padding={"10px 0"}>
                                    <Typography color={"rgb(86, 79, 164)"} fontWeight={"800"} fontSize={"20px"}>Personal Info</Typography>
                                </Box>
                                <Box display={"flex"} gap={"10px"}>
                                    <Box width={"50%"}>
                                        <Typography color={"rgb(86, 79, 164)"} fontWeight={"800"} fontSize={"18px"}>First Name</Typography>
                                        <input ref={firstNameRef} placeholder="First Name" style={{ width: "100%", padding: "15px 10px", border: "1px solid #e2e2e2", color: "rgb(108, 132, 56)" }}></input>
                                    </Box>
                                    <Box width={"50%"}>
                                        <Typography color={"rgb(86, 79, 164)"} fontWeight={"800"} fontSize={"18px"}>Last Name</Typography>
                                        <input ref={lastNameRef} placeholder="Last Name" style={{ width: "100%", padding: "15px 10px", border: "1px solid #e2e2e2", color: "rgb(108, 132, 56)" }}></input>
                                    </Box>
                                </Box>
                                <Box width={"100%"}>
                                    <Typography color={"rgb(86, 79, 164)"} fontWeight={"800"} fontSize={"18px"}>Email Address</Typography>
                                    <input ref={emailRef} placeholder="Email Address" style={{ width: "100%", padding: "15px 10px", border: "1px solid #e2e2e2", color: "rgb(108, 132, 56)" }}></input>
                                </Box>
                                <Box width={"100%"}>
                                    <Typography color={"rgb(86, 79, 164)"} fontWeight={"800"} fontSize={"18px"}>Pan Card</Typography>
                                    <input ref={emailRef} placeholder="Email Address" style={{ width: "100%", padding: "15px 10px", border: "1px solid #e2e2e2", color: "rgb(108, 132, 56)" }}></input>
                                </Box>
                                <Box width={"100%"}>
                                    <Typography color={"rgb(86, 79, 164)"} fontWeight={"800"} fontSize={"18px"}>Contact</Typography>
                                    <input ref={contactRef} placeholder="Enter Your Number" style={{ width: "100%", padding: "15px 10px", border: "1px solid #e2e2e2", color: "rgb(108, 132, 56)" }}></input>
                                </Box>
                                <Box display={"flex"}>
                                    <Box display={"flex"} alignItems={"center"} justifyContent={"center"} width={["40%", "30%", "20%"]} height={"100%"} p={"20px"} bgcolor={"rgb(86, 79, 164)"}>
                                        <Typography fontSize={"20px"} fontWeight={"800"} color={"white"}>Donation</Typography>
                                    </Box>
                                    <input ref={amountRef} placeholder="Enter the Amount" type={"number"} style={{ width: "80%", fontSize: "30px", padding: "15px 10px", border: "1px solid #e2e2e2", color: "rgb(108, 132, 56)" }}></input>
                                </Box>
                                <Button sx={{ width: "100%", background: "rgb(86, 79, 164)", padding: "20px", color: "white", "&:hover": { background: "rgb(86, 79, 164)", color: "white", padding: "20px" } }} onClick={displayRazorPay}>
                                    DONATE NOW</Button>
                            </Box>
                        </Box>
                    </Modal>
                </Box>
            </Box>
        </motion.div>
    )
}

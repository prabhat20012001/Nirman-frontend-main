import { Typography, Box } from "@mui/material";
import FooterInputBox from "./FooterInputBox";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { useState } from "react";
import axios from "axios";
import { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import bgImg from "./bg2.jpg";
// import bgImg from "./bg.png";
import { useContext } from "react";
import { Context } from "../../ContextApi";
export default function Footer() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const {apiLink} = useContext(Context)
  const ref = useRef(null);
  const isInView = useInView(ref);

  const variants = {
    hidden: { opacity: 0, x: -200 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <>
      <motion.div
        id="footer"
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 0.75 }}
      >
        <Box
          position={"relative"}
          sx={{ background: `url(${bgImg})`, backgroundSize: "cover" }}
          minHeight={"900px"}
        >
          <Box
            sx={{ background: "rgba(0,0,0,0.8)" }}
            minHeight={"900px"}
            display={"flex"}
            justifyContent={"center"}
          >
            <Box
              minHeight={"1000px"}
              p={"10px"}
              paddingTop={"70px"}
              flexDirection={"column"}
              display={"flex"}
              alignItems={"center"}
              gap={"30px"}
            >
              <Box
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
                gap={"20px"}
              >
                <Typography
                  color={"white"}
                  fontWeight={"700"}
                  fontSize={"40px"}
                >
                  CONTACT US
                </Typography>
                <Typography
                  textAlign={"center"}
                  color={"white"}
                  fontWeight={"700"}
                  fontSize={"15px"}
                >
                  Administrative office :-	B4, Khatri Commertial Market, Mahendru, Patna- 800 006 ( Bihar)
              <br/>
Reg. Office:-	Murgaon, Hamam Lane, Patna- 800 008 ( Bihar)
                </Typography>
                <Typography color={"white"} fontSize={"14px"}>
                
                </Typography>
                <Typography color={"white"} fontSize={"14px"}>
                7004423685, 9430829044, 9031165593
                </Typography>
              </Box>
              <Box
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
                width={["100%", "100%", "100%", "940px"]}
                gap={"20px"}
              >
                <Box
                  width={"100%"}
                  display={"flex"}
                  gap={"20px"}
                  flexDirection={["column", "column", "column", "row"]}
                  justifyContent={"space-between"}
                >
                  <FooterInputBox
                    val={name}
                    onInput={setName}
                    placeholder={"Enter You Name"}
                    width={["100%", "100%", "100%", "49%"]}
                    text={"Name *"}
                  />
                  <FooterInputBox
                    val={email}
                    onInput={setEmail}
                    placeholder={"Enter You Email"}
                    width={["100%", "100%", "100%", "49%"]}
                    text={"Email *"}
                  />
                </Box>
                <Box
                  width={"100%"}
                  display={"flex"}
                  gap={"20px"}
                  flexDirection={["column", "column", "column", "row"]}
                  justifyContent={"space-between"}
                >
                  <FooterInputBox
                    val={phone}
                    onInput={setPhone}
                    placeholder={"Enter You Phone Number"}
                    width={["100%", "100%", "100%", "49%"]}
                    text={"Phone"}
                  />
                  <FooterInputBox
                    val={address}
                    onInput={setAddress}
                    placeholder={"Enter You Address"}
                    width={["100%", "100%", "100%", "49%"]}
                    text={"Address"}
                  />
                </Box>
                <Box
                  width={"100%"}
                  display={"flex"}
                  gap={"20px"}
                  justifyContent={"space-between"}
                >
                  <FooterInputBox
                    val={subject}
                    onInput={setSubject}
                    placeholder={"Type the Subject"}
                    width={"100%"}
                    text={"Subject"}
                  />
                </Box>
                <Box
                  width={"100%"}
                  display={"flex"}
                  gap={"20px"}
                  justifyContent={"space-between"}
                >
                  <Box width={"100%"}>
                    <Typography ml={"5px"} fontSize={"15px"} color={"white"}>
                      Message
                    </Typography>
                    <textarea
                      value={message}
                      onInput={(e) => setMessage(e.target.value)}
                      placeholder="Type you Message"
                      style={{ height: "116px", resize: "none" }}
                      className="footerInput"
                    />
                  </Box>
                </Box>
                <button
                  onClick={() => {
                    let data = {
                      name,
                      email,
                      phone,
                      address,
                      subject,
                      message,
                    };
                    axios.post(apiLink+"/messages", data);
                    setName("");
                    setEmail("");
                    setPhone("");
                    setAddress("");
                    setSubject("");
                    setMessage("");
                  }}
                  className={"footerButton"}
                >
                  Submit
                </button>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          minHeight={"200px"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-evenly"}
          flexDirection={"column"}
          padding={["20px", "20px", "20px", "0"]}
        >
          <Box
            display={"flex"}
            flexDirection={["column", "column", "column", "row"]}
            justifyContent={"space-between"}
            alignItems={"center"}
            width={["100%", "100%", "100%", "940px"]}
            gap={"20px"}
          >
            <Box justifyContent={"space-evenly"} gap={"10px"} display={"flex"}>
              <LinkedInIcon />
              <TwitterIcon />
              <InstagramIcon />
            </Box>
            <Box
              color={"gray"}
              justifyContent={"space-evenly"}
              display={"flex"}
              alignItems={"center"}
              gap={"10px"}
              flexDirection={"column"}
            >
              <Typography fontSize={"13px"}>csr@nirman.org.in
              <br/>info@nirman.org.in</Typography>
              <Typography fontSize={"13px"}>7004423685, 9430829044, 9031165593</Typography>
            </Box>
            <Box textAlign={"center"}>
              <Typography fontWeight={"bold"} color={"gray"}>
              Administrative office :-	B4, Khatri Commertial Market, Mahendru, Patna- 800 006 ( Bihar)
              <br/>
Reg. Office:-	Murgaon, Hamam Lane, Patna- 800 008 ( Bihar)
              </Typography>
            </Box>
          </Box>
          <Box marginTop={"30px"} textAlign={"center"}>
            <Typography color={"gray"} fontSize={"13px"}>
            Copyright @{new Date().getFullYear()} by Nirman
            </Typography>
          </Box>
        </Box>
      </motion.div>
    </>
  );
}

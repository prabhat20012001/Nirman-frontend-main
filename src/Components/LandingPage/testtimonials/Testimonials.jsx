import { Button, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Comma from "./Comma.png";
import TestimonialCircle from "./testimonialCircles";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import MobileViewTestimonialsCircle from "./mobileViewTestimonialCircles";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { Context } from "../../../ContextApi";


export default function Testimonals() {
  const [wid1, setWid1] = useState(29.5);
  const [wid2, setWid2] = useState(10);
  const [wid3, setWid3] = useState(10);
  const [wid4, setWid4] = useState(10);
  const [wid5, setWid5] = useState(10);
  const { apiLink } = useContext(Context)
  const widArr = [wid1, wid2, wid3, wid4, wid5];
  const setWidArr = [setWid1, setWid2, setWid3, setWid4, setWid5];
  const [testimonialData, setTestimonialData] = useState([]);
  const [coverTextMain, setCoverTextMain] = useState("");
  const [downLeft, setDownLeft] = useState(0);
  const [marginRightCarousel, setMarginRightCarousel] = useState(0);
  let arr; // downArrowTriangle position Array
  if (window.innerWidth <= 950) arr = [2.5, 17, 30, 43.5, 56.5];
  if (window.innerWidth <= 1050) arr = [4, 18, 31, 44, 57];
  else if (window.innerWidth <= 1150) arr = [4.5, 18.5, 31.5, 44.5, 57.5];
  else if (window.innerWidth <= 1250) arr = [5.5, 19.5, 33, 46, 59];
  else if (window.innerWidth <= 1350) arr = [6, 20, 33.5, 46.5, 59.5];
  else if (window.innerWidth <= 1450) arr = [6, 20, 33, 46, 59];
  else arr = [7, 21, 34, 47, 60.5];
  useEffect(() => {
    function func() {
      if (window.innerWidth <= 950) arr = [2.5, 17, 30, 43.5, 56.5];
      if (window.innerWidth <= 1050) arr = [4, 18, 31, 44, 57];
      else if (window.innerWidth <= 1150) arr = [4.5, 18.5, 31.5, 44.5, 57.5];
      else if (window.innerWidth <= 1250) arr = [5.5, 19.5, 32, 45, 58];
      else if (window.innerWidth <= 1350) arr = [6, 20, 33.5, 46.5, 59.5];
      else if (window.innerWidth <= 1450) arr = [6, 20, 33, 46, 59];
      else arr = [7, 21, 34, 47, 60.5];
    }

    window.addEventListener("resize", func);
    return () => window.removeEventListener("resize", func);
  });

  useEffect(() => {
    axios.get(apiLink + "/testimonials").then((res) => {
      let temp = res.data;

      if (res.data.length <= 10) {
        setCoverTextMain(temp[0].testimonial);
        setTestimonialData(temp);
        setDownLeft(arr[0]);
        return;
      }
      let random = [];
      for (let i = 0; i < 5 && i < temp.length; i++) {
        random[i] = temp[Math.floor(Math.random() * temp.length)];
      }
      setCoverTextMain(random[0].testimonial);
      setTestimonialData(random);
      setDownLeft(arr[0]);
    });

    // let temp = testimonialArray
    //    if (temp.length <= 10) {
    //     setCoverTextMain(temp[0].testimonial);
    //     setTestimonialData(temp);
    //     setDownLeft(arr[0]);
    //     return;
    //   }
    //   let random = [];
    //   for (let i = 0; i < 5 && i < temp.length; i++) {
    //     random[i] = temp[Math.floor(Math.random() * temp.length)];
    //   }
    //   setCoverTextMain(random[0].testimonial);
    //   setTestimonialData(random);
    //   setDownLeft(arr[0]);
  }, []);
  return (testimonialData.length >= 1 &&
    <Box
      bgcolor={"white"}
      sx={{
        width: "100%",
        height: "700px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
      borderBottom={"2px solid rgb(86, 79, 164)"}
    >
      <Box>
        <Typography
          sx={{
            fontFamily: "Roboto, sans-serif",
            fontSize: "40px",
            color: "#564fa4",
          }}
        >
          TESTIMONIALS
        </Typography>
        <Box
          width={"50%"}
          bgcolor={"#564fa4"}
          minHeight={"3px"}
          m={"auto"}
        ></Box>
      </Box>
      <Box sx={{ width: "100%", height: "70%" }}>
        <Box
          sx={{
            width: "100%",
            height: "70%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            boxShadow={
              "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"
            }
            sx={{
              width: "80%",
              height: "70%",
              background: "#efefef",
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              position: "relative",
            }}
          >
            <Box
              sx={{
                width: "10%",
                height: "70%",
                borderRight: "10px solid #564fa4",
              }}
            >
              <img
                style={{ width: "70%", margin: "10%" }}
                src={Comma}
                alt="comma"
              />
            </Box>
            <Box
              className="scrollbar-hidden"
              sx={{ width: "80%", height: "70%", overflowY: "scroll" }}
            >
              <Typography
                fontSize={["11px", "17px", "19px", "24px"]}
                sx={{ fontfamily: "Roboto, sans-serif", fontWeight: "bold" }}
              >
                {coverTextMain}
              </Typography>
            </Box>
            <Box
              left={[
                "calc( 50% - 50px )",
                "calc( 50% - 50px )",
                `${downLeft}%`,
                `${downLeft}%`,
              ]}
              sx={{
                transition: ".5s",
                width: "0px",
                height: "0px",
                borderLeft: "solid 50px transparent",
                borderTop: "solid 50px #564fa4",
                borderRight: "solid 50px transparent",
                top: "100%",
                position: "absolute",
              }}
            ></Box>
          </Box>
        </Box>

        <Box
          sx={{
            width: "100%",
            minHeight: "30%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* For PC */}
          <Box
            display={["none", "none", "flex", "flex"]}
            sx={{
              width: "80%",
              height: "100%",
              position: "relative",
              justifyContent: "center",
            }}
          >
            <Box
              mr={"20px"}
              display={["none", "none", "flex", "flex"]}
              style={{ display: widArr[0] == 29.5 ? "none" : "flex" }}
            >
              <Button
                // disabled={testimonialData.length<=1}
                onClick={() => {
                  for (let i = 0; i < widArr.length; i++) {
                    if (widArr[i] == 29.5) {
                      for (let j = 0; j < setWidArr.length; j++) {
                        if (j != i - 1) setWidArr[j](10);
                      }
                      setCoverTextMain(testimonialData[i - 1].testimonial);
                      setDownLeft(arr[i - 1]);
                      setWidArr[i - 1](29.5);
                      break;
                    }
                  }
                }}
                variant="text"
                style={{
                  height: "100%",
                  top: "0",
                  color: "black",
                  width: "5%",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  left: "-5%",
                }}
              >
                <ChevronLeftIcon
                  sx={{ width: "40px", height: "40px", color: "black" }}
                />
              </Button>
            </Box>

            <Box
              display={["none", "none", "flex", "flex"]}
              width={["60%", "70%", "92%", "90%"]}
              className="scrollbar-hidden"
              sx={{
                overflowX: "scroll",
                overflowY: "hidden",
                height: "100%",
                gap: ".5vw",
                alignItems: "center",
                flexShrink: "0",
              }}
            >
              {testimonialData.map((i, index) => (
                <TestimonialCircle
                  setWid={setWidArr[index]}
                  wid={widArr[index]}
                  key={index}
                  img={i.image}
                  name={i.name}
                  company={i.company}
                />
              ))}
            </Box>
            <Box
              display={["none", "none", "flex", "flex"]}
              style={{
                display: widArr[testimonialData.length - 1] == 29.5 ? "none" : "flex",
              }}
            >
              <Button
                onClick={() => {
                  for (let i = 0; i < widArr.length; i++) {
                    if (widArr[i] == 29.5) {
                      if (i + 1 == 5) {
                        setWidArr[4](10);
                        setCoverTextMain(testimonialData[0].testimonial);
                        setDownLeft(arr[0]);
                        setWidArr[0](29.5);
                        return;
                      }
                      for (let j = 0; j < setWidArr.length; j++) {
                        if (j != i + 1) setWidArr[j](10);
                      }
                      setCoverTextMain(testimonialData[i + 1].testimonial);
                      setDownLeft(arr[i + 1]);
                      setWidArr[i + 1](29.5);
                      break;
                    }
                  }
                }}
                variant="text"
                style={{
                  height: "100%",
                  top: "0",
                  color: "black",
                  width: "5%",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  right: "-5%",
                }}
              >
                <KeyboardArrowRightIcon
                  sx={{ width: "40px", height: "40px", color: "black" }}
                />
              </Button>
            </Box>
          </Box>

          {/* For Mobile Devices */}
          <Box
            bgcolor={"#efefef"}
            position={"relative"}
            width={"80%"}
            height={"100%"}
            display={["flex", "flex", "none", "none"]}
            justifyContent={"center"}
          >
            <Box
              display={marginRightCarousel == 0 ? "none" : "flex"}
              width={"15%"}
              height={"100%"}
              position={"absolute"}
              left={"-5%"}
            >
              <Button
                onClick={() => {
                  let temp = marginRightCarousel + 100;
                  let index = Math.abs(temp / 100);
                  if (temp == -500) {
                    setMarginRightCarousel(0);
                    setCoverTextMain(testimonialData[0].testimonial);
                    return;
                  }
                  setCoverTextMain(testimonialData[index].testimonial);
                  setMarginRightCarousel(temp);
                }}
                style={{
                  height: "100%",
                  color: "black",
                  minWidth: "40px",
                  justifyContent: "center",
                  alignItems: "center",
                  border: "0",
                  background: "rgb(223 223 223)",
                }}
              >
                <ChevronLeftIcon sx={{ width: "100%", color: "black" }} />
              </Button>
            </Box>
            <Box width={"80%"} height={"100%"} overflow={"hidden"}>
              <Box
                sx={{ transition: ".5s" }}
                marginLeft={`${marginRightCarousel}%`}
                display={"flex"}
                height={"100%"}
                width={`${100 * testimonialData.length}%`}
              >
                {testimonialData.map((i, index) => (
                  <MobileViewTestimonialsCircle
                    img={i.image}
                    name={i.name}
                    company={i.company}
                    width={`${Math.floor(100 / testimonialData.length)}`}
                  />
                ))}
                {/* <MobileViewTestimonialsCircle
                  width={`${Math.floor(100 / testimonialData.length)}`}
                />
                <MobileViewTestimonialsCircle
                  width={`${Math.floor(100 / testimonialData.length)}`}
                />
                <MobileViewTestimonialsCircle
                  width={`${Math.floor(100 / testimonialData.length)}`}
                /> */}
              </Box>
            </Box>
            <Box
              display={marginRightCarousel == -(100 * testimonialData.length - 100) ? "none" : "flex"}
              width={"15%"}
              height={"100%"}
              position={"absolute"}
              right={"-5%"}
            >
              <Button
                onClick={() => {
                  let temp = marginRightCarousel - 100;
                  let index = Math.abs(temp / 100);
                  if (temp == -500) {
                    setMarginRightCarousel(0);
                    setCoverTextMain(testimonialData[0].testimonial);
                    return;
                  }
                  setCoverTextMain(testimonialData[index].testimonial);
                  setMarginRightCarousel(temp);
                }}
                style={{
                  height: "100%",
                  color: "black",
                  minWidth: "40px",
                  justifyContent: "center",
                  alignItems: "center",
                  border: "0",
                  background: "rgb(223 223 223)",
                }}
              >
                <KeyboardArrowRightIcon
                  sx={{ width: "100%", color: "black" }}
                />
              </Button>
            </Box>
          </Box>
          {/* <Box
            bgcolor={"#efefef"}
            position={"relative"}
            width={"80%"}
            height={"100%"}
            display={["flex", "flex", "none", "none"]}
            justifyContent={"center"}
          >
            <Box
              display={marginRightCarousel == 0 ? "none" : "flex"}
              minWidth={"15%"}
              height={"100%"}
              position={"absolute"}
              left={"-5%"}
              overflow={"hidden"}
            >
              <Button
                onClick={() => {
                  let temp = marginRightCarousel + 100;
                  let index = Math.abs(temp / 100);
                  if (temp == -500) {
                    setMarginRightCarousel(0);
                    setCoverTextMain(testimonialData[0].testimonial);
                    return;
                  }
                  setCoverTextMain(testimonialData[index].testimonial);
                  setMarginRightCarousel(temp);
                }}
                sx={{
                  height: "100%",
                  color: "black",
                  width: "20px",
                  justifyContent: "center",
                  alignItems: "center",
                  border: "0",
                  background: "rgb(223 223 223)",
                  position:"absolute",
                  left:"-5%",
                  display:marginRightCarousel == 0 ? "none" : "flex"
                }}
              >
                <ChevronLeftIcon sx={{ width: "100%", color: "black" }} />
              </Button>
            </Box>
            <Box width={"80%"} height={"100%"} overflow={"hidden"}>
              <Box
                sx={{ transition: ".5s" }}
                marginLeft={`${marginRightCarousel}%`}
                display={"flex"}
                height={"100%"}
                width={`${100 * testimonialData.length}%`}
              >
                <MobileViewTestimonialsCircle
                  width={`${Math.floor(100 / testimonialData.length)}`}
                />
                <MobileViewTestimonialsCircle
                  width={`${Math.floor(100 / testimonialData.length)}`}
                />
                <MobileViewTestimonialsCircle
                  width={`${Math.floor(100 / testimonialData.length)}`}
                />
              </Box>
            </Box>
            <Box
              display={marginRightCarousel == -400 ? "none" : "flex"}
              width={"15%"}
              height={"100%"}
              position={"absolute"}
              right={"-5%"}
            >
              <Button
                onClick={() => {
                  let temp = marginRightCarousel - 100;
                  let index = Math.abs(temp / 100);
                  if (temp == -500) {
                    setMarginRightCarousel(0);
                    setCoverTextMain(testimonialData[0].testimonial);
                    return;
                  }
                  setCoverTextMain(testimonialData[index].testimonial);
                  setMarginRightCarousel(temp);
                }}
                style={{
                  height: "100%",
                  color: "black",
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                  border: "0",
                  background: "rgb(223 223 223)",
                }}
              >
                <KeyboardArrowRightIcon
                  sx={{ width: "100%", color: "black" }}
                />
              </Button>
            </Box>
          </Box> */}
        </Box>
      </Box>
    </Box>
  );
}
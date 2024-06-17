import { Box, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import BlogCard from "./BlogsCard";
import PcViewBlogCard from "./PcViewBlogCard";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useContext } from "react";
import { Context } from "../../../ContextApi";
export default function Blogs() {
  const [data, setData] = useState([]);
  const [margin, setMargin] = useState(0);
  const {apiLink} = useContext(Context)

  function handleMoveRight() {
    let temp = -(data.length - 1) * 100;
    if (margin == temp) return;
    setMargin(margin - 100);
  }
  function handleMoveLeft() {
    if (margin == 0) return;
    setMargin(margin + 100);
  }

  useEffect(() => {
    axios
      .get(apiLink+"/blogs")
      .then((res) => setData(res.data));
  }, []);

  return data.length == 0 ? (
    ""
  ) : (
    <Box
      p={"20px"}
      alignItems={"center"}
      gap={"20px"}
      display={"flex"}
      bgcolor={"white"}
      flexWrap={"wrap"}
      flexDirection={"column"}
      width={"100%"}
    >
      <Typography
        fontFamily={"Roboto, sans-serif"}
        fontSize={"40px"}
        color={"#564fa4"}
      >
        Blogs
      </Typography>
      <Box
        display={"flex"}
        p={"20px"}
        flexWrap={"wrap"}
        columnGap={["0", "2%", "1%", "2%"]}
        minHeight={"450px"}
        rowGap={"20px"}
        width={"100%"}
        justifyContent={"center"}
      >
        <Box
          bgcolor={"white"}
          color={"black"}
          width={"95%"}
          boxShadow={
            "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px"
          }
          position={"relative"}
          overflow={"hidden"}
          display={"flex"}
          alignItems={"center"}
        >
          <Box
            width={["50px", "50px", "100px", "100px"]}
            height={["50px", "50px", "100px", "100px"]}
            color={"white"}
            bgcolor={"rgba(0, 0, 0, 0.5)"}
            position={"absolute"}
            left={"0"}
            top={[
              "calc( 50% - 25px )",
              "calc( 50% - 25px )",
              "calc( 50% - 50px )",
              "calc( 50% - 50px )",
            ]}
            borderRadius={"50%"}
            onClick={handleMoveLeft}
            display={margin == 0 ? "none" : "flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <KeyboardArrowLeftIcon sx={{ color: "white" }} />
          </Box>

          <Box
            width={["50px", "50px", "100px", "100px"]}
            height={["50px", "50px", "100px", "100px"]}
            color={"white"}
            position={"absolute"}
            right={0}
            top={[
              "calc( 50% - 25px )",
              "calc( 50% - 25px )",
              "calc( 50% - 50px )",
              "calc( 50% - 50px )",
            ]}
            onClick={handleMoveRight}
            borderRadius={"50%"}
            bgcolor={"rgba(0, 0, 0, 0.5)"}
            display={margin == -(data.length - 1) * 100 ? "none" : "flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <KeyboardArrowRightIcon sx={{ color: "white" }} />
          </Box>
          <Box
            width={`${data.length * 100}%`}
            minHeight={"400px"}
            marginLeft={`${margin}%`}
            display={"flex"}
            sx={{ transition: ".4s" }}
            flexShrink={0}
          >
            {data
              .map((i) => (
                <PcViewBlogCard
                  img={i.carouselImg}
                  blogLink={i.blogLink}
                  wid={`${100 / data.length}%`}
                  key={i._id}
                  blog={i.blog.slice(0, 200)}
                  date={i.date}
                  head={i.heading}
                  id={i._id}
                />
              ))
              .reverse()}
            {data
              .map((i) => (
                <BlogCard
                  img={i.carouselImg}
                  blogLink={i.blogLink}
                  wid={`${100 / data.length}%`}
                  key={i._id}
                  blog={i.blog.slice(0, 200)}
                  date={i.date}
                  head={i.heading}
                  id={i._id}
                />
              ))
              .reverse()}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

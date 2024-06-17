import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { NavLink } from "react-router-dom";

export default function PcViewBlogCard({
  blog,
  head,
  img,
  id,
  wid,
  date,
  blogLink,
}) {
    console.log(img)
  return (
    <Box
      display={["none", "none", "flex", "flex"]}
      width={wid}
      height={"400x"}
      bgcolor={"#efefef"}
    >
      <Box
        width={"40%"}
        p={"20px"}
        overflow={"hidden"}
        display={"flex"}
        alignItems={"center"}
      >
        <img style={{ width: "100%", height: "400px" }} src={img} alt="" />
      </Box>
      <Box width={"60%"} p={"20px"} height={"100%"}>
        <Box
          height={"70%"}
          fontFamily={"Roboto, sans-serif"}
          display={"flex"}
          flexDirection={"column"}
          gap={"15px"}
          overflow={"hidden"}
        >
          <Typography fontSize={"30px"} color={"#564fa4"} fontWeight={"900"}>
            {head}
          </Typography>
          <Typography fontSize={"17px"} color={"gray"} fontWeight={"900"}>
            {date}
          </Typography>
          <Typography color={"black"} fontSize={["0", 0, "12px", "14px"]}>
            {blog}
            {blog}
            {blog}
          </Typography>
        </Box>
        <Box p={"10px"} height={"30%"} display={"flex"} alignItems={"center"}>
          <NavLink
            style={{ textDecoration: "none" }}
            target={"_blank"}
            to={`//${blogLink}`}
          >
            <Button
              sx={{
                background: "#564fa4",
                color: "white",
                fontFamily: "Roboto, sans-serif",
                "&:hover": {
                  background: "transparent",
                  color: "#564fa4",
                  border: " 2px solid #564fa4",
                },
              }}
            >
              Read More
            </Button>
          </NavLink>
        </Box>
      </Box>
    </Box>
  );
}

import { Box } from "@mui/system";
import { useContext } from "react";
import React from "react";
import { Context } from "../../ContextApi";
import { Typography } from "@mui/material";
import MissionCard from "./MissionCard";
export default function Certificates() {
  let { images } = useContext(Context);
  return (
    <Box
      width={"100%"}
      minHeight={"500px"}
      alignItems={"center"}
      justifyContent={"center"}
      display={"flex"}
      gap={"20px"}
      flexDirection={"column"}
    >
      <Typography
        fontWeight={"900"}
        fontSize={"40px"}
        m={"20px 0"}
        color={"rgb(86, 79, 164)"}
      >
        Mission
      </Typography>
      <Box
        width={["90%", "85%", "80%"]}
        display={"flex"}
        flexWrap={"wrap"}
        gap={"20px"}
        justifyContent={"center"}
        alignContent={"flex-start"}
      >
        <Typography variant="h4" fontWeight={700}>
          <em>Mission: Empowering Lives, Transforming Communities</em>
          <br />
        </Typography>
        <Typography
          fontWeight={"bold"}
          fontFamily={'"Roboto","Helvetica","Arial",sans-serif'}
        >
          Our mission is to transform the marginalized community member’s economic and social status through participatory based approach and practices which are sustainable. By focusing on empowering women, improving their health, education status. Income generation and improved social status. 
          
        </Typography>
        <Typography
          fontWeight={"bold"}
          fontFamily={'"Roboto","Helvetica","Arial",sans-serif'}
        >
Attainment of egalitarian society by improving the social and economic status of marginalized women & children through sustainable development program.

To establish an egalitarian society where there will be no discrimination among the people on the basis of Caste,Gender, Religion etc. Our organization gives priority to under privileged and marginalized peoples.
        </Typography>
      </Box>
      <Box></Box>
    </Box>
  );
}

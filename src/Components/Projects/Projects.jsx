import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import { Context } from "../../ContextApi";
// import { useContext } from "react";
// import { Context } from "../../ContextApi";
import ProjectCard from "./ProjectCard";
import s from "./Projects.module.css"

export default function Project() {
    let { projectsData } = useContext(Context);
    window.scrollTo(0,0)
    return (
        <Box display={"flex"} justifyContent={"center"} flexDirection={"column"} alignItems={"center"} width={"100vw"} marginBottom={"50px"}>
            <Box m={"40px 0"} width={"90%"} height={"10%"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                <Typography fontSize={["24px", "26px", "30px", "40px"]} fontWeight={"800"} color={"rgb(86, 79, 164)"}>PROJECTS</Typography>
            </Box>
            <Box className={"productsGrid"} p={"20px"} alignItems={"center"} gap={"20px"} display={"flex"} flexWrap={"wrap"} flexDirection={"column"} width={"100%"}>
                <Box className={s.productsGrid} display={"grid"} p={"20px"} minHeight={"500px"} width={"100%"} >
                {/* <Box display={"flex"} p={"20px"} flexWrap={"wrap"} columnGap={["0", "2%", "1%", "2%"]} minHeight={"500px"} rowGap={"20px"} width={"100%"} > */}
                {projectsData.map(i=>(
                    <ProjectCard key={i._id} img={i.images} heading={i.heading} volunteer={i.volunteer} description={i.description} id={i._id}/>
                ))}
                    
                    {/* <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard /> */}
                </Box>
            </Box>
        </Box>
    )
}
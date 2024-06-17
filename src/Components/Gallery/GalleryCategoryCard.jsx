// import { Typography } from "@mui/material";
// import { Box } from "@mui/system";
// import { NavLink } from "react-router-dom";



// export default function GalleryCategoryCard({ heading, description }) {
//     return (
//         <Box width={["100%", "90%", "90%", "85%"]} height={["0px","200px","280px","400px"]} display={["none", "flex", "flex", "flex"]} boxShadow={"rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px"} overflow={"hidden"}>
//             <NavLink style={{ textDecoration: "none", display: "flex", width: "100%" }} to={"helpFoundation1"}>
//                 <Box width={"40%"} minHeight={"300px"} overflow={"hidden"} p={"20px"}>
//                     <img style={{ height: "100%" }} src="https://thumbs.dreamstime.com/b/amazing-misty-autumn-scenery-lake-sorapis-dolomites-italy-beautiful-mountains-colorful-yellow-larches-shore-193683774.jpg" alt="bvds" />
//                 </Box>
//                 <Box width={"60%"} minHeight={"300px"} display={"flex"} flexDirection={"column"} p={"20px"} gap={"20px"} overflow={"hidden"}>
//                     <Typography fontSize={["20px","22px","24px","40px"]} fontWeight={"bold"} fontFamily={"'Roboto', sans-serif"} color={"black"}>
//                         {heading}
//                     </Typography>

//                     <Box height={"90%"} width={"100%"}  overflow={"hidden"}>
//                         <Typography fontSize={"13px"} color={"gray"}>
//                             Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum fuga placeat iure consequatur, voluptate quod laborum sed totam corporis expedita architecto vitae quo voluptas. Voluptas perspiciatis ex ipsa consectetur magni tempora praesentium iusto quam expedita. Voluptates repellat similique amet quo minus magnam commodi exercitationem enim, culpa quos quisquam nobis eligendi, eius distinctio ipsum nisi expedita voluptate quam. Magnam quis, sequi blanditiis quia reiciendis sunt quo labore, esse doloribus et eaque, dolores reprehenderit laborum? Voluptatem sed numquam officia minus illum modi ratione, dolor assumenda, accusamus quasi, consectetur nisi vel ad quibusdam unde dolores. Eum dolor vel similique ea autem commodi ipsum.
//                             Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum fuga placeat iure consequatur, voluptate quod laborum sed totam corporis expedita architecto vitae quo voluptas. Voluptas perspiciatis ex ipsa consectetur magni tempora praesentium iusto quam expedita. Voluptates repellat similique amet quo minus magnam commodi exercitationem enim, culpa quos quisquam nobis eligendi, eius distinctio ipsum nisi expedita voluptate quam. Magnam quis, sequi blanditiis quia reiciendis sunt quo labore, esse doloribus et eaque, dolores reprehenderit laborum? Voluptatem sed numquam officia minus illum modi ratione, dolor assumenda, accusamus quasi, consectetur nisi vel ad quibusdam unde dolores. Eum dolor vel similique ea autem commodi ipsum.
//                         </Typography>
//                     </Box>
//                 </Box>
//             </NavLink>
//         </Box>
//     )
// }
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";


export default function GalleryCategoryCard({ heading, description, img, index }) {
    const ref = useRef(null)
    const isInView = useInView(ref)

    const variants = {
        hidden: { opacity: 0, x: -150 },
        visible: { opacity: 1, x: 0 },
    };
    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.75 }}
            style={{background:"#efefef"}}
        >
              <NavLink style={{ textDecoration: "none", display: "flex", color: "black" }} to={`${index}`}>
            <Box display={["none", "flex", "flex", "flex"]} width={"90vw"} height={"26vw"} boxShadow={"rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px"} >
              
                    <Box width={"40%"} height={"100%"} p={"20px"}>
                        <img style={{ height: "100%", width: "100%" }} src={img} alt="bvds" />
                    </Box>
                    <Box width={"60%"} height={"100%"} p={"10px"} display={"flex"} flexDirection={"column"}>
                        <Box minHeight={"20%"} pb={"40px"}>
                            <Typography fontSize={["18px", "20px", "30px", "40px"]} fontWeight={"900"} color={"#564FA5"}>{heading}</Typography>
                        </Box>
                        <Box height={"80%"}>
                            <Typography fontSize={["10px", "10px", "14px", "16px"]} color={"gray"} fontWeight={"900"}>
                                {description}
                            </Typography>
                        </Box>
                    </Box>
            </Box>
                </NavLink>
        </motion.div>
    )
}

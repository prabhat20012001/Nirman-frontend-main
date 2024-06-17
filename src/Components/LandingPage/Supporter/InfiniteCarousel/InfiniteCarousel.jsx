import { Box } from "@mui/system";
import { useState } from "react";
import image1 from "../Supporters1.png"
import image2 from "../Supporters2.png"

export default function InfiniteCarousel() {
    let [arr] = useState([image1, image2, image1]);
    return (
        <Box className={"animateSupporters"} display={"flex"} height={"16.5vw"}>
            {arr.map((i, index) => (
                <img draggable={false} width={"100%"} key={index} src={i} alt={"supporters"} />
            ))}
        </Box>
    )
}
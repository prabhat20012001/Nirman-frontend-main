import { Box } from "@mui/system";
import { useEffect, useState } from "react";




export default function ProgressBar(){
    const [width,setWidth] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
          const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
          const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
          const scrolled = (winScroll / height) * 100;
          setWidth(scrolled);
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    return (
        <Box position={"fixed"} top={"0"} zIndex={"30"} width={"100%"} height={"5px"}>
            <Box width={`${width}%`} height={"100%"} bgcolor={"yellow"}></Box>
        </Box>
    )
}
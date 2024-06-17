import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import img1 from "./Supporters1.png"
import img2 from "./Supporters2.png"
import { motion } from "framer-motion"
import DownloadIcon from '@mui/icons-material/Download';
import { useContext } from "react";
import { Context } from "../../ContextApi";
export default function ActivityReport() {
    
    let {activityReportImages, activityReport} = useContext(Context)
    let [arr, setArr] = useState([])
    let [width, setWidth] = useState(0)
    let [images, setImages] = useState(0)
    let [marginLeft, setMarginLeft] = useState(0)
    let [offsetWidth, setOffsetWidth] = useState(0);
    const [windowWidth, setWindowWidth] = useState();
    let ref = useRef(null)
    let ref1 = useRef(null)
    const [isDragging, setIsDragging] = useState(false);
    useEffect(() => {
        setWindowWidth(window.innerWidth)
        function func() {
            setWindowWidth(window.innerWidth);
            setWidth(ref.current.scrollWidth - ref.current.offsetWidth)
            setOffsetWidth(ref.current.offsetWidth)
            console.log(width)
        }
        window.addEventListener("resize", func)
        // axios.get("https://helpapi.onrender.com/ActivityReports").then(res => {
        //     let data = res.data;
        //     for (let i = data.length - 1; i >= 0; i++) {
        //         if (data[i].images.length != 0) {
        //             setImages(data[i].images)
        //             break
        //         }
        //     }
        //     setArr(res.data);
        // });
        return () => window.removeEventListener("resize", func)
    }, [])
    useEffect(() => {
        // console.log(ref.current.scrollWidth - ref.current.offsetWidth)
        setWidth(ref.current.scrollWidth - ref.current.offsetWidth)
        setOffsetWidth(ref.current.offsetWidth)
    })

    useEffect(() => {
        const value = ref1.current.scrollWidth - ref1.current.offsetWidth;
        const root = document.querySelector(':root');
        root.style.setProperty('--my-variable', `-${value}px`);
    })

    const handleDragStart = () => {
        setIsDragging(true);
    }

    const handleDragEnd = () => {
        setIsDragging(false);
    }




    return (
        <Box minHeight={"600px"} width={"100%"} p={"20px"} display={"flex"} flexDirection={"column"} gap={"30px"}>
            <Box textAlign={"center"}>
                <Typography fontWeight={"900"} color={"rgb(86, 79, 164)"} fontSize={["30px", "34px", "40px"]}>
                    Activity Report
                </Typography>
            </Box>
            {/* className={"animate"} */}
            <Box ref={ref1} display={"flex"} overflow={"hidden"} height={windowWidth <= 450 ? "auto" : "300px"}>
                <Box className={"animate"} display={"flex"} height={"300px"}>
                    {activityReportImages.map((i, index) => (
                        <img draggable={false} width={windowWidth <= 450 ? `${windowWidth - 30}px` : "auto"} key={index} src={i} alt={"supporters"} />
                    ))}
                </Box>
            </Box>
            <Box m={"0 auto"} ref={ref} width={["95%", "90%", "85%"]} overflow={"hidden"} p={["0px", "15px", "30px"]}>
                < Typography marginBottom={"20px"} textAlign={"center"} fontWeight={"900"}>Swipe to See More -{">"}</Typography>
                <motion.div drag="x" dragConstraints={{ right: 0, left: -width }} style={{ display: "flex", gap: "10px", flexShrink: "0", minWidth: "100%" }}>
                    {
                        activityReport.map(item => (
                            <Box  width={windowWidth <= 450 ? `${offsetWidth - 40}px` : "300px"} flexShrink={0} p={"30px"} className="button button-2" sx={{display:"flex"}} justifyContent={"space-between"}>
                                <Typography>
                                    {item.heading}
                                </Typography>
                                <DownloadIcon onClick={(event) => {
                                openBase64FileInNewTab(item.pdf, item.heading)
                            }}/>

                            </Box>
                        ))
                    }
                </motion.div>

            </Box>
        </Box>
    )
}

function base64ToBlob(base64) {
    const [prefix, data] = base64.split(',');
    const binary = atob(data);
    const array = [];
    for (let i = 0; i < binary.length; i++) {
        array.push(binary.charCodeAt(i));
    }
    return new Blob([new Uint8Array(array)], { type: prefix.split(';')[0].split(':')[1] });
}

function downloadBase64File(base64, filename) {
    const blob = base64ToBlob(base64);
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = filename;
    link.click();
}
function openBase64FileInNewTab(base64, filename) {
    const blob = base64ToBlob(base64);
    const url = window.URL.createObjectURL(blob);
    const newTab = window.open(url, '_blank');
    newTab.onload = function () {
        window.URL.revokeObjectURL(url);
    };
}

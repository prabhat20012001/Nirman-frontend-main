
import { Box, Button, Typography } from "@mui/material";
import { useRef } from "react";
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import axios from "axios";
import JoditEditor from "jodit-react";
import React from "react";
import { useContext } from "react";
import { Context } from "../../../ContextApi";


export default function AddGalleryMedia() {
    // const [title, setTitle] = useState("");
    // const [description, setDescription] = useState("");
    // const [images, setImages] = useState([]);
    // const [date, setDate] = useState([]);
    let [image, setImage] = useState("");
    let headingRef = useRef(null);
    let dateRef = useRef(null);
    let imageConverter = useRef(null);
    let [html,setHtml] = useState("");
    let descriptionRef = useRef(null);
    const {apiLink} = useContext(Context)
    function handleSubmit() {
        let obj = {
            title: headingRef.current.value,
            date: dateRef.current.value,
            description: descriptionRef.current.value,
            images: image,
            fundRaised:0,
            html: html,
        }
        axios.post(apiLink+"/event", obj)
        console.log(obj)
        // axios.post("https://futuristic-unexpected-citrine.glitch.me/blogs",obj)
    }
    const handleFileChange = async (e) => {
        const file = e.target.files[0];
        const cloud_name = "dh4svxvhl";
        const upload_preset = "excjxkms";
        let formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", upload_preset);
        let link = await axios.post(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, formData);
        link = link.data;
        setImage(link.secure_url);
    };
    const handleFileChange1 = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            imageConverter.current.value = reader.result;
        };
    };
    return (
        // <Box width={"100%"} minHeight={"100%"} display={"flex"}>
        //     <Box p={"20px"} width={"50%"}>
        //         <Box mb={"10px"}>
        //             <Typography>Heading</Typography>
        //             <input value={title} onInput={(e) => setTitle(e.target.value)} style={{ width: "100%", height: "40px", padding: "20px", fontSize: "20px" }} />
        //         </Box>
        //         <Box mb={"10px"}>
        //             <Typography>Description</Typography>
        //             <textarea value={description} onInput={(e) => setDescription(e.target.value)} style={{ width: "100%", height: "100px", padding: "10px", fontSize: "16px", resize: "none" }} />
        //         </Box>
        //         <Box mb={"10px"}>
        //             <Typography>Date</Typography>
        //             <input type={"date"} onInput={(e) => setDate(e.target.value)} style={{ width: "100%", height: "40px", padding: "20px", fontSize: "20px" }} />
        //         </Box>
        //         <Box mb={"10px"}>
        //             <Typography>images</Typography>
        //             <Box display={"flex"} gap={"10px"}>
        //                 <input type={"file"} onChange={(e) => {
        //                     const file = e.target.files[0];
        //                     const reader = new FileReader();
        //                     reader.readAsDataURL(file);
        //                     reader.onloadend = () => {
        //                         setImages([...images, reader.result]);
        //                     };
        //                 }} />
        //             </Box>
        //         </Box>
        //         <Box mb={"10px"}>
        //             <Button onClick={() => {
        //                 let obj = { title, date, description, images,fundRaised:0 };
        //                 axios.post("http://localhost:3001/event", obj)
        //                 console.log(obj);
        //                 setTitle("");
        //                 setDescription("");
        //                 setImages([]);
        //             }}
        //                 sx={{ width: "100%", color: "black", background: "lightgreen" }}>Submit</Button>
        //         </Box>
        //     </Box>
        //     <Box p={"20px"} width={"50%"} display={"flex"} flexDirection={"column"} gap={"20px"}>
        //         <Box>
        //             <Typography mb={"5px"} fontWeight={"700"} fontSize={"28px"}>
        //                 {title}

        //             </Typography>
        //             <Typography mb={"5px"} fontSize={"20px"}>
        //                 {date}

        //             </Typography>
        //         </Box>
        //         <Typography fontSize={"14px"} minHeight={"100px"}>
        //             {description}
        //         </Typography>
        //         <Box display={"flex"} flexWrap={"wrap"} gap={"20px"}>
        //             {
        //                 images.map((i,index) => (
        //                     <Box position={"relative"} width={"30%"} minHeight={"100px"}>
        //                         <Box onClick={()=>{
        //                             setImages(images.filter((i,inde)=>index!=inde))
        //                         }} color={"white"} zIndex={"1"} display={"flex"} justifyContent={"center"} alignItems={"center"} width={"100%"} height={"100%"} position="absolute">
        //                             Delete
        //                         </Box>
        //                         <img style={{ width: "100%", height:"100%",flexShrink: "0",position:"absolute" }} src={i} />
        //                     </Box>
        //                 ))
        //             }
        //         </Box>
        //     </Box>
        // </Box>
        <Box width={"100%"} minHeight={"100%"} p={"20px"} display={"flex"} flexDirection={"column"}>
            <Box width={"100%"}>
                <Box width={"100%"}>
                    <Typography>Heading</Typography>
                    <input ref={headingRef} style={{ width: "100%", padding: "10px" }} type="text" />
                </Box>
                <Box width={"100%"}>
                    <Typography>Date</Typography>
                    <input ref={dateRef} style={{ width: "100%", padding: "10px" }} type="date" />
                </Box>
                <Box width={"100%"}>
                    <Typography>Description</Typography>
                    <textarea ref={descriptionRef} style={{ resize: "none", width: "100%", padding: "10px", minHeight: "300px" }} />
                </Box>
                <Box mb={"10px"}>
                    <Typography>images</Typography>
                    <Box display={"flex"} gap={"10px"}>
                        <input type={"file"} onChange={handleFileChange} />
                    </Box>
                </Box>
            </Box>
            <Box width={"100%"} display={"flex"} flexDirection={"column"} gap={"10px"}>
                <Typography fontWeight={"900"} fontSize={"40px"}>Convert Image to Link</Typography>
                <input type={"file"} onChange={handleFileChange1}/>
                <input style={{padding:"15px 10px"}} ref={imageConverter}/>
            </Box>
            <JoditEditor onChange={(val)=>{
                setHtml(val)
            }}></JoditEditor>
            <Button onClick={handleSubmit} sx={{marginTop:"20px" ,width: "100px", background: "lightgreen", color: "black", "&:hover": { background: "green", color: "white" } }}>
                Upload
            </Button>
        </Box>
    )
}
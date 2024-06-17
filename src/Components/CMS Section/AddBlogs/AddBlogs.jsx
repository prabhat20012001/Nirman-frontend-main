import { Button, FormControlLabel, FormGroup, Switch, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { set } from "mongoose";
import { useRef, useState } from "react";
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import JoditEditor from "jodit-react";
import { useContext } from "react";
import { Context } from "../../../ContextApi";


export default function AddBlogs() {
    let [image, setImage] = useState("")
    let headingRef = useRef(null);
    let dateRef = useRef(null);
    let blogRef = useRef(null);
    let blogLinkRef = useRef(null);
    const {apiLink} = useContext(Context)

    function handleSubmit() {
        let obj = {
            heading: headingRef.current.value,
            date: dateRef.current.value,
            blog: blogRef.current.value,
            carouselImg: image,
            blogLink: blogLinkRef.current.value,
        }

        axios.post(apiLink+"/blogs", obj)
        // axios.post("https://futuristic-unexpected-citrine.glitch.me/blogs",obj)
        console.log(obj);
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
    return (
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
                    <Typography>Blog</Typography>
                    <textarea ref={blogRef} style={{ resize: "none", width: "100%", padding: "10px", minHeight: "300px" }} />
                </Box>
                <Box width={"100%"}>
                    <Typography>Blog Link</Typography>
                    <input ref={blogLinkRef} style={{ width: "100%", padding: "10px" }} type="text" />
                </Box>
                <Box mb={"10px"}>
                    <Typography>Image</Typography>
                    <Box display={"flex"} gap={"10px"}>
                        <input type={"file"} onChange={handleFileChange} />
                    </Box>
                </Box>
            </Box>
            <Button onClick={handleSubmit} sx={{ width: "100px", background: "lightgreen", color: "black", "&:hover": { background: "green", color: "white" } }}>
                Upload
            </Button>
        </Box>
    )
}
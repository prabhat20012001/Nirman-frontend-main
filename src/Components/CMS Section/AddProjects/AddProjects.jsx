import { Button, Checkbox, FormControlLabel, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import JoditEditor from "jodit-react";
import { useContext } from "react";
import { useRef, useState } from "react";
import { Context } from "../../../ContextApi";


export default function AddProjects() {
    // let headingRef = useRef(null)
    // let descriptionRef = useRef(null)
    // let [volunteer,setVolunteer] = useState(false)
    // function handleSubmit() {
    //     let obj = {
    //         heading: headingRef.current.value,
    //         volunteer: volunteer,
    //         description: descriptionRef.current.value,
    //     }
    //     axios.post("http://localhost:3001/projects",obj)
    //     // axios.post("https://futuristic-unexpected-citrine.glitch.me/Projects",obj)
    //     console.log(obj);
    //     headingRef.current.value=""
    //     descriptionRef.current.value=""
    // }
    // return (
    //     <Box width={"100%"} minHeight={"100%"} p={"20px"} display={"flex"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"}>
    //         <Box width={"50%"}>
    //             <Typography>Heading</Typography>
    //             <input ref={headingRef} style={{width:"100%",padding:"10px"}} type="text" />
    //         </Box>

    //         <Box width={"50%"}>
    //             <Typography>Description</Typography>
    //             <textarea  ref={descriptionRef} style={{ resize: "none",width:"100%",padding:"10px",minHeight:"300px" }} />
    //         </Box>
    //         <Box width={"50%"} display={"flex"} p={"20px"} gap={"10px"}>
    //             <FormControlLabel control={<Checkbox onChange={(e)=>setVolunteer(e.target.checked)} defaultChecked />} label="Volunteer" />
    //         </Box>
    //         <Button onClick={handleSubmit} sx={{fontWeight:"bold",width:"50%",background:"lightgreen","&:hover":{background:"green",color:"white"}}}>Upload</Button>

    //     </Box>
    // )
    let [volunteer, setVolunteer] = useState(false)
    let headingRef = useRef(null)
    let dateRef = useRef(null)
    let blogRef = useRef(null)
    let [images, setImages] = useState("");
    let imageConverter = useRef(null);
    let [html, setHtml] = useState("");
    const {apiLink} = useContext(Context)
    function handleSubmit() {
        let obj = {
            heading: headingRef.current.value,
            volunteer: volunteer,
            description: blogRef.current.value,
            images: images,
            html: html
        }
        axios.post(apiLink+"/projects", obj)
        // axios.post("https://futuristic-unexpected-citrine.glitch.me/blogs",obj)
        console.log(obj);
        // headingRef.current.value = ""
        // dateRef.current.value = ""
        // blogRef.current.value = ""
        // setImages("")
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
        setImages(link.secure_url);

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
        <Box width={"100%"} minHeight={"100%"} p={"20px"} display={"flex"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"}>
            <Box width={"100%"} display={"flex"}>
                <Box width={"50%"}>
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
                    <input type={"file"} onChange={handleFileChange} />
                    <FormControlLabel control={<Checkbox onChange={(e) => setVolunteer(e.target.checked)} />} label="Volunteer" />
                </Box>
                <Box width={"50%"} display={"flex"} flexWrap={"wrap"} p={"20px"} gap={"10px"}>
                    <img width={"250px"} height={"200px"} src={images} alt="w" />
                </Box>
            </Box>
            <Box width={"100%"} display={"flex"} flexDirection={"column"} gap={"10px"}>
                <Typography fontWeight={"900"} fontSize={"40px"}>Convert Image to Link</Typography>
                <input type={"file"} onChange={handleFileChange1} />
                <input style={{ padding: "15px 10px" }} ref={imageConverter} />
            </Box>
            <Box width={"100%"}>
                <Typography fontWeight={"900"} fontSize={"40px"}>For Main Page</Typography>
                <JoditEditor onChange={(val) => {
                    setHtml(val)
                }}></JoditEditor>
            </Box>
            <Button onClick={handleSubmit} sx={{ fontWeight: "bold", width: "50%", background: "lightgreen", "&:hover": { background: "green", color: "white" } }}>Upload</Button>
        </Box>
    )
}
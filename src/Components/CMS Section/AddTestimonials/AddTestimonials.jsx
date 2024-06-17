import { Box, Button, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import Styles from "../AddTeam.module.css"
import { useContext } from "react";
import { Context } from "../../../ContextApi";

export default function AddTestimonials() {
    let [testimonials, setTestimonials] = useState("");
    let [name, setName] = useState();
    let [image, setImage] = useState();
    let [role, setRole] = useState();
    const {apiLink} = useContext(Context)

    const handleFileChange = async (e) => {
        const file = e.target.files[0];
        const cloud_name = "dh4svxvhl";
        const upload_preset = "excjxkms";
        let formData = new FormData();
        formData.append("file",file);
        formData.append("upload_preset",upload_preset);

        let link = await axios.post(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,formData);
        link = link.data;
        console.log(link.secure_url)
        setImage(link.secure_url)
    };


    return (
        <Box gap={"20px"} display={"flex"} p={"30px"} flexDirection={"column"} justifyContent={"center"} width={"100%"} alignItems={"center"} height={"600px"} >
            <Box sx={{ width: "50%" }}>
                <Typography>Testimonials</Typography>
                <input value={testimonials} onInput={(e) => {
                    setTestimonials(e.target.value)
                }} className={Styles.input} />
            </Box>
            <Box sx={{ width: "50%" }}>
                <Typography>Image</Typography>
                <input type="file" onChange={handleFileChange}/>
            </Box>
            <Box sx={{ width: "50%" }}>
                <Typography>Name</Typography>
                <input value={name} onInput={(e) => {
                    setName(e.target.value)
                }} className={Styles.input} />
            </Box>
            <Box sx={{ width: "50%" }}>
                <Typography>Company or Role</Typography>
                <input value={role} onInput={(e) => {
                    setRole(e.target.value)
                }} className={Styles.input} />
            </Box>
            <Button onClick={() => {
                let temp = {
                    testimonial: testimonials,
                    image: image,
                    name: name,
                    company: role
                }

                axios.post(apiLink+"/testimonials", temp);
                setTestimonials("")
                setRole("")
                setName("")
            }} variant="text" sx={{ "&:hover": { background: "#7912f7" }, color: "white", width: "40%", background: "#7912f7" }} >
                Add To Testimonials
            </Button>
        </Box>
    )
}


import { Box, Button, Typography } from "@mui/material";
import axios from "axios";
import { useRef, useState } from "react";
import s from "../AddTeam.module.css"
import { useContext } from "react";
import { Context } from "../../../ContextApi";

export default function CenterCard({ heading, func, id, location, description, img }) {
    let [isReadOnly, setIsReadOnly] = useState(true);
    let [image, setImage] = useState(img);
    let titleRef = useRef(null)
    let descriptionRef = useRef(null)
    let countRef = useRef(null);
    let {apiLink} = useContext(Context)
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
        <Box flexShrink={0} padding={"20px"} minHeight={"50px"} gap="20px" display={"flex"} alignItems={"center"} width={"100%"} boxShadow={"rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px"}>
            <Box display={"flex"} flexDirection={"column"}>
                <input ref={titleRef} style={{ fontSize: "30px" }} readOnly={isReadOnly} defaultValue={heading} />
                <Box display={"flex"} gap={"20px"}>
                    <input ref={countRef} style={{ fontSize: "30px" }} readOnly={isReadOnly} type={"text"} defaultValue={location} />
                </Box>
                <textarea ref={descriptionRef} defaultValue={description} className={s.TestimonialCardInput} readOnly={isReadOnly} rows="7" cols="200" style={{ width: "80%", height: "100%", resize: "none" }}>
                </textarea>
                <img src={image} width={"200px"} />
                Change Image
                <input onChange={handleFileChange} type={"file"} />
            </Box>

            <Box display={"flex"} gap={"20px"} flexDirection={"column"} width={"20%"}>
                <Button style={{ display: !isReadOnly ? "none" : "block" }} onClick={() => {
                    setIsReadOnly(false)
                }} variant="text" sx={{ "&:hover": { background: "#7912f7" }, color: "white", width: "100%", background: "#7912f7", height: "30px" }} >
                    Update
                </Button>
                <Button onClick={() => {
                    setIsReadOnly(true);
                    axios.patch(apiLink+`/centers/${id}`, {
                        heading: titleRef.current.value,
                        description: descriptionRef.current.value,
                        location: countRef.current.value,
                        image: image
                    })
                }}
                    style={{ display: isReadOnly ? "none" : "block" }} variant="text" sx={{ "&:hover": { background: "#7912f7" }, color: "white", width: "100%", background: "#7912f7", height: "30px" }}>
                    Save
                </Button>

                <Button onClick={func} variant="text" sx={{ "&:hover": { background: "#7912f7" }, color: "white", width: "100%", background: "#7912f7", height: "30px" }} >
                    Delete
                </Button>
            </Box>
        </Box>
    )
}
import { Box, Button, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import InputBox from "../InputBox";
import { useContext } from "react";
import { Context } from "../../../ContextApi";

export default function AddTeam() {
    
    const [name, setName] = useState("");
    const [imgSrc, setImg] = useState("");
    const [role, setRole] = useState("");
    const [summary, setSummary] = useState("");
    const [linkedin, setLinkedin] = useState("");
    const [instagram, setInstagram] = useState("");
    const [twitter, setTwitter] = useState("");
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
        setImg(link.secure_url)
    };

    return (
        <Box gap={"20px"} display={"flex"} p={"30px"} justifyContent={"center"} width={"100%"} alignItems={"center"} height={"600px"} >
            <Box display={"flex"} gap={"20px"} flexDirection={"column"} width={"50%"}>
                <InputBox value={name} typ={"text"} func={setName} Category={"Name"} />
                <InputBox value={role} typ={"text"} func={setRole} Category={"Role"} />
                <InputBox value={summary} typ={"text"} func={setSummary} Category={"Summary"} />
                <InputBox value={linkedin} typ={"text"} func={setLinkedin} Category={"LinkedIn"} />
                <InputBox value={instagram} typ={"text"} func={setInstagram} Category={"Instagram"} />
                <InputBox value={twitter} typ={"text"} func={setTwitter} Category={"Twitter"} />
                <Box>
                    <Typography>{"ImgSrc"}</Typography>
                    <input type={"file"} onChange={handleFileChange} />
                </Box>
                <Button variant="text" sx={{ "&:hover": { background: "#7912f7" }, color: "white", width: "40%", background: "#7912f7", margin: "auto" }} onClick={(e) => {
                    let data = {
                        name,
                        secondText: role,
                        description: summary,
                        img: imgSrc,
                        linkedin,
                        twitter,
                        instagram,
                    }
                    console.log(data);
                    axios.post(apiLink+"/team", data);
                    // axios.post("https://futuristic-unexpected-citrine.glitch.me/team", data);
                    setName("");
                    setRole("");
                    setSummary("");
                    setLinkedin("");
                    setInstagram("");
                    setTwitter("");
                }} >Add To Team</Button>
            </Box>

            <Box display={"flex"} alignItems={"center"} gap={"20px"} flexDirection={"column"} width={"50%"}>
                <Box display={"flex"} justifyContent={"center"} alignItems={"center"} height={"205px"} width={"205px"} overflow={"hidden"} border={"2px solid black"}>
                    {imgSrc ? <img draggable={false} width={"100%"} src={imgSrc} alt="logo" /> : <Typography textAlign={"center"} width={"70%"} fontSize={"40px"}>NO URL</Typography>}
                </Box>
                <Typography fontSize={"20px"}>{name || "Name"}</Typography>
                <Typography fontSize={"20px"}>{role || "Role"}</Typography>
                <Typography fontSize={"20px"}>{summary || "Summary"}</Typography>
                <Typography fontSize={"20px"}>{linkedin || "LinkedIn"}</Typography>
                <Typography fontSize={"20px"}>{instagram || "Instagram"}</Typography>
                <Typography fontSize={"20px"}>{twitter || "Twitter"}</Typography>
            </Box>
        </Box>
    )
}

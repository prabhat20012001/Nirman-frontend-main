import { Typography, Box } from "@mui/material";
import { useState } from "react";


export default function FooterInputBox({ text, width, height, placeholder, onInput,val }) {
    let [inputIext, setInputIext] = useState("");
    let [clas,setClas] = useState("footerInput");
    
    return (
        <Box width={width}>
            <Typography ml={"5px"} fontSize={"15px"} color={"white"}>{text}</Typography>
            <input value={val} required onInput={e => {
                if(e.target.value.length==0) setClas("footerInputRed");
                else setClas("footerInput");
                onInput(e.target.value);
                setInputIext(e.target.value);
            }} placeholder={placeholder} style={{ height: height ? height : "50px" }} className={clas} />
        </Box>
    )
}

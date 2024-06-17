import { Box, Typography } from "@mui/material";
import Styles from "./AddTeam.module.css"
export default function InputBox({value,Category,func, typ,name}) {
    return (
        <Box>
            <Typography>{Category || "Name"}</Typography>
            <input value={value} type={typ} name={name} onInput={(e)=>func(e.target.value)} className={Styles.input} />
        </Box>
    )
}
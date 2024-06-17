import { Box, Typography } from "@mui/material";


export default function Header() {
    return (
        <Box textAlign={"center"} height={"60px"} bgcolor={"#7912f7"} width={"80vw"}>
            <Typography letterSpacing={"5px"} color={"white"} fontSize={"40px"}>CMS</Typography>
        </Box>
    )
}
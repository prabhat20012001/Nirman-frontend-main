import { Box } from "@mui/material";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";


export default function MainWrapper() {
    return (
        <Box minHeight={"100vh"} width={"80%"} position={"relative"} right={"0"}>
            <Header />
            <Box flexDirection={"column"} width={"100%"} height={"calc(100% - 60px)"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
                <Box border={"2px solid #7912f7"} className={"styledScrollBar"} sx={{ overflowY: "scroll" }} width={"90%"} height={"90%"}>
                    <Outlet/>
                </Box>
            </Box>
        </Box>
    )
}
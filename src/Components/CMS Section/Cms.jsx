import Navigation from "./Navigation/Navigation";
import MainWrapper from "./mainWrapper/MainWrapper"
import { Box } from "@mui/system";


export default function CMS() {
    return (
        <Box minHeight={"100vh"} width={"100%"} >
            <Box display={"flex"}>
                <Navigation />
                <MainWrapper />
            </Box>
        </Box>
    )
}
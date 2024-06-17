import { Box } from "@mui/system";


export default function DropDown({children}){
    return (
        <Box p={"10px"} display={"flex"} alignItems={"center"} flexDirection={"column"} zIndex={10} position={"absolute"} width={"100%"} height={"100%"}>
            {children}
        </Box>
    )
}
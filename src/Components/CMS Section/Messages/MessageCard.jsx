import { Typography } from "@mui/material";
import { Box } from "@mui/system";


export default function MessageCard({name,email,address,subject,messag}){
    return (
        <Box p={"20px"} sx={{wordBreak:"break-all"}} display={"flex"} flexDirection={"column"} gap={"10px"} width={"100%"} minHeight={"150px"} border={"1px solid gray"}>
            <Typography  width={"100%"} fontSize={"20px"}>
                Name: {name}
            </Typography>
            <Typography width={"100%"}>
                Email: {email}
            </Typography>
            <Typography width={"100%"}>
                Phone: {address}
            </Typography>
            <Typography width={"100%"}>
                Subject: {subject}
            </Typography>
            <Typography width={"100%"}>
                Message: {messag}
            </Typography>
        </Box>
    )
}
import { Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function MessageCard({ name, qualification, age, resume }) {
    return (
        <Box p={"20px"} sx={{ wordBreak: "break-all" }} display={"flex"} flexDirection={"column"} gap={"10px"} width={"100%"} minHeight={"150px"} border={"1px solid gray"}>
            <Typography width={"100%"} fontSize={"20px"}>
                Name: {name}
            </Typography>
            <Typography width={"100%"}>
                Qualification: {qualification}
            </Typography>
            <Typography width={"100%"}>
                Age: {age}
            </Typography>
            <button onClick={() => downloadBase64File(resume, "resume.pdf")}>Download Resume</button>
        </Box>
    )
}

function base64ToBlob(base64) {
    const [prefix, data] = base64.split(',');
    const binary = atob(data);
    const array = [];
    for (let i = 0; i < binary.length; i++) {
        array.push(binary.charCodeAt(i));
    }
    return new Blob([new Uint8Array(array)], { type: prefix.split(';')[0].split(':')[1] });
}

function downloadBase64File(base64, filename) {
    const blob = base64ToBlob(base64);
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = filename;
    link.click();
}
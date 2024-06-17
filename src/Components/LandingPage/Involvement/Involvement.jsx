import { Box } from "@mui/system";
import involved1 from "./involved1.png"
import involved3 from "./involved3.png"
import Card from "./card"
import { Typography } from "@mui/material";
export default function Involvements() {
    return <Box overflow={"hidden"} minHeight={["100vw", "65vw", "45vw"]} sx={{ display: "flex", alignItems: "center", flexDirection: "column", color: "black" }} justifyContent={"space-evenly"} bgcolor={"#efefef"} borderBottom={" 2px solid rgb(86, 79, 164)"}>
        <Typography sx={{ marginTop: "20px", letterSpacing: "4px" }} fontWeight="700" variant="h4" mb={"20px"} color={"rgb(86, 79, 164)"} >GET INVOLVED</Typography>
        <Box flexDirection={["column", "row", "row", "row"]} width={"calc(100vw - 20px)"} display={"flex"} height="80%" alignItems={"center"} gap={"20px"} justifyContent="space-evenly">
            <Card linkk={"Projects"} text={"Get in Touch"} imgSrc={"https://media.istockphoto.com/id/1256603011/photo/business-network-concept-customer-support-shaking-hands.jpg?s=612x612&w=0&k=20&c=uRYJ6c2EyNO92w0wQlCScEVwbdoyHaXzfIxw1q7zNLA="} scroll={true}></Card>
            <Card linkk={"Projects"} text={"Donate"} imgSrc={"https://thumbs.dreamstime.com/b/donate-letterpress-word-written-vintage-type-42205146.jpg"}></Card>
            <Card linkk={"Projects"} text={"Volunteer"} imgSrc={"https://cdn.pixabay.com/photo/2016/07/29/03/40/volunteer-1550328_960_720.jpg"}></Card>
        </Box>
        <Box height={"20px"}></Box>
    </Box>
}
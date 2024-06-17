import { Box } from "@mui/system";
import InfiniteCarousel from "./InfiniteCarousel/InfiniteCarousel";


export default function Supporter() {
    return (
        <Box overflow={"hidden"} display={"flex"} alignItems={"center"} height={"25vw"}>
            <InfiniteCarousel />
        </Box>
    )
    //  <Box textAlign={"center"} m={"20px 0"}>
    //     <Typography mt={"20px"} variant="h4" fontWeight={900}>Our Supporters</Typography>
    //     <Box>
    //         <img src={Supporters} width={"100%"} />
    //     </Box>
    // </Box>
}
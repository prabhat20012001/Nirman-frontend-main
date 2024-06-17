import { Box } from "@mui/system";
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import styles from "./socialMedia.module.css"
import { Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
export default function SocialMedia() {
    return (
        <Box className={styles.mainSocialMediaBox} display={["none", "none", "block", "block"]} borderRadius={" 0 30px 30px 0px"} height={"250px"} position={"fixed"} zIndex={3} left={0} top={"calc( 50% - 125px )"} overflow={"hidden"}>
            <Box width={"100%"} height={"100%"} position={"absolute"} zIndex={1} bgcolor={"black"} sx={{ opacity: "70%" }}></Box>
            <Box width={"100%"} height={"100%"} position={"absolute"} zIndex={1} display={"flex"} flexDirection={"column"} justifyContent={"space-evenly"} pl={"10px"} pr={"10px"}>
                <NavLink to={"//twitter.com"} target="_black">
                    <Box className={styles.IndividualMediabox1} height="40px" display={"flex"} alignItems={"center"} gap={"10px"} overflow={"hidden"}>
                        <TwitterIcon sx={{ color: "white", width: "40px", height: "40px", cursor: "pointer" }} />
                        <Typography color={"white"} fontSize={"17px"} fontWeight={"bold"}>Twitter</Typography>
                    </Box>
                </NavLink>
                <NavLink to={"//linkedin.in"} target="_black">
                    <Box className={styles.IndividualMediabox2} height="40px" display={"flex"} alignItems={"center"} gap={"10px"} overflow={"hidden"}>
                        <LinkedInIcon sx={{ color: "white", width: "40px", height: "40px", cursor: "pointer" }} />
                        <Typography color={"white"} fontSize={"17px"} fontWeight={"bold"}>LinkedIn</Typography>
                    </Box>
                </NavLink>
                <NavLink to={"//instagram.com"} target="_black">
                    <Box className={styles.IndividualMediabox3} height="40px" display={"flex"} alignItems={"center"} gap={"10px"} overflow={"hidden"}>
                        <InstagramIcon sx={{ color: "white", width: "40px", height: "40px", cursor: "pointer" }} />
                        <Typography color={"white"} fontSize={"17px"} fontWeight={"bold"}>
                            Instagram
                        </Typography>
                    </Box>
                </NavLink>
                <NavLink to={"//fb.com"} target="_black">
                    <Box className={styles.IndividualMediabox2} height="40px" display={"flex"} alignItems={"center"} gap={"10px"} overflow={"hidden"}>
                        <FacebookIcon sx={{ color: "white", width: "40px", height: "40px", cursor: "pointer" }} />
                        <Typography color={"white"} fontSize={"17px"} fontWeight={"bold"}>
                            Facebook
                        </Typography>
                    </Box>
                </NavLink>
            </Box>
        </Box>
    )
}
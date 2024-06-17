import { Button, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { NavLink } from "react-router-dom";
import Hamburger from "./Hamburger";
import Logo from "./logo.jpg";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
export default function Navbar() {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "100px",
          display: "flex",
          justifyContent: "space-between",
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
        }}
      >
        <Box
          width={["60%", "60%", "900px", "70%"]}
          sx={{
            height: "100%",
            display: "flex",
            justifyContent: "center",
            fontSize: "24px",
          }}
          display={["none", "none", "none", "flex"]}
        >
          <Box
            sx={{ height: "100%", display: "flex", alignItems: "center" }}
            display={"flex"}
            width={"35%"}
            justifyContent={"center"}
          >
            <NavLink
              to={"/"}
              style={{
                display: "flex",
                textDecoration: "none",
                color: "black",
                alignItems: "center",
              }}
            >
              <img
                style={{ borderRadius: "50%", width: "50px",backgroundBlendMode:"color-burn" }}
                src={Logo}
                alt="logo"
              />
              <Typography
                sx={{
                  fontFamily: "Roboto, sans-serif",
                  fontSize: "18px",
                  width: "135px",
                  fontWeight: "900",
                  ml: "10px",
                }}
              >
                NIRMAN
              </Typography>
            </NavLink>
          </Box>

          <Box
            sx={{
              alignItems: "center",
              width: "80%",
              height: "100%",
              justifyContent: "center",
              fontSize: "24px",
              color: "white",
            }}
            display={["none", "none", "flex"]}
          >
          {/* <Box
              className={"dropDown1"}
              width={"20%"}
              height={"70%"}
              display={"flex"}
              alignItems={"center"}
              position={"relative"}
            >
              <Box width={"100%"} height={"100%"}>
                <NavLink
                  className={"underLine"}
                  style={({ isActive }) => {
                    if (isActive) {
                      return {
                        // border: "2px solid black",
                        textDecoration: "none",
                        fontFamily: "Roboto, sans-serif",
                        fontSize: "20px",
                        fontWeight: "700",
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      };
                    } else {
                      return {
                        color: "black",
                        textDecoration: "none",
                        fontFamily: "Roboto, sans-serif",
                        fontSize: "20px",
                        fontWeight: "700",
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      };
                    }
                  }}
                  to={"/login"}
                >
                  Login
                </NavLink>
              </Box>
            </Box> */}
          
            <Box
              className={"dropDown1"}
              width={"20%"}
              height={"70%"}
              display={"flex"}
              alignItems={"center"}
              position={"relative"}
            >
              <Box width={"100%"} height={"100%"}>
                <NavLink
                  className={"underLine"}
                  style={({ isActive }) => {
                    if (isActive) {
                      return {
                        border: "2px solid black",
                        textDecoration: "none",
                        fontFamily: "Roboto, sans-serif",
                        fontSize: "20px",
                        fontWeight: "700",
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      };
                    } else {
                      return {
                        color: "black",
                        textDecoration: "none",
                        fontFamily: "Roboto, sans-serif",
                        fontSize: "20px",
                        fontWeight: "700",
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      };
                    }
                  }}
                  to={"/"}
                >
                  Home
                </NavLink>
              </Box>
            </Box>
            <Box
              className={"dropDown1"}
              width={"20%"}
              height={"70%"}
              display={"flex"}
              alignItems={"center"}
              position={"relative"}
            >
              <Box width={"100%"} height={"100%"}>
                <Box
                  className={"underLine"}
                  color={"black"}
                  style={{
                    textDecoration: "none",
                    fontFamily: "Roboto, sans-serif",
                    fontSize: "20px",
                    fontWeight: "700",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer",
                    gap: "10px",
                  }}
                >
                  About <KeyboardArrowDownIcon />{" "}
                </Box>
              </Box>
              <Box
                boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
                className={"open"}
                width={"102%"}
                bgcolor={"white"}
                position={"absolute"}
                top={"68.5px"}
                display={"none"}
                flexDirection={"column"}
                zIndex={"2"}
              >
                <NavLink
                  to={"/Team"}
                  className={"hoverEffect"}
                  style={({ isActive }) => {
                    if (!isActive) {
                      return {
                        padding: "10px 20px",
                        textDecoration: "none",
                        fontFamily: "Roboto, sans-serif",
                        fontSize: "16px",
                        fontWeight: "700",
                      };
                    } else {
                      return {
                        padding: "10px 20px",
                        textDecoration: "none",
                        fontFamily: "Roboto, sans-serif",
                        fontSize: "16px",
                        fontWeight: "700",
                        background: "black",
                        color: "white",
                      };
                    }
                  }}
                >
                  TEAM
                </NavLink>
                <NavLink
                  to={"/Mission"}
                  className={"hoverEffect"}
                  style={({ isActive }) => {
                    if (!isActive) {
                      return {
                        padding: "10px 20px",
                        textDecoration: "none",
                        fontFamily: "Roboto, sans-serif",
                        fontSize: "16px",
                        fontWeight: "700",
                      };
                    } else {
                      return {
                        padding: "10px 20px",
                        textDecoration: "none",
                        fontFamily: "Roboto, sans-serif",
                        fontSize: "16px",
                        fontWeight: "700",
                        background: "black",
                        color: "white",
                      };
                    }
                  }}
                >
                  MISSION
                </NavLink>
                {/* <NavLink to={"/Career"} className={"hoverEffect"} style={({ isActive }) => {
                                    if (!isActive) {
                                        return { padding: "10px 20px", textDecoration: "none", fontFamily: "Roboto, sans-serif", fontSize: "16px", fontWeight: "700" }
                                    }
                                    else {
                                        return { padding: "10px 20px", textDecoration: "none", fontFamily: "Roboto, sans-serif", fontSize: "16px", fontWeight: "700", background: "black", color: "white" }
                                    }
                                }} >CAREER</NavLink> */}
                <NavLink
                  className={"hoverEffect dropDownParent"}
                  style={{
                    padding: "10px 20px",
                    textDecoration: "none",
                    fontFamily: "Roboto, sans-serif",
                    fontSize: "16px",
                    fontWeight: "700",
                    position: "relative",
                  }}
                >
                  REPORT
                  <Box
                    bgcolor={"white"}
                    className={"doubleDropDown"}
                    position={"absolute"}
                    width={"120%"}
                    display={"none"}
                    flexDirection={"column"}
                    top={"0"}
                    left={"100%"}
                  >
                    <NavLink
                      to={"/ActivityReport"}
                      className={"hoverEffect"}
                      style={({ isActive }) => {
                        if (!isActive) {
                          return {
                            padding: "10px 20px",
                            textDecoration: "none",
                            fontFamily: "Roboto, sans-serif",
                            fontSize: "16px",
                            fontWeight: "700",
                          };
                        } else {
                          return {
                            padding: "10px 20px",
                            textDecoration: "none",
                            fontFamily: "Roboto, sans-serif",
                            fontSize: "16px",
                            fontWeight: "700",
                            background: "black",
                            color: "white",
                          };
                        }
                      }}
                    >
                      ACTIVITY REPORT
                    </NavLink>
                    <NavLink
                      to={"/AuditReport"}
                      className={"hoverEffect"}
                      style={({ isActive }) => {
                        if (!isActive) {
                          return {
                            padding: "10px 20px",
                            textDecoration: "none",
                            fontFamily: "Roboto, sans-serif",
                            fontSize: "16px",
                            fontWeight: "700",
                          };
                        } else {
                          return {
                            padding: "10px 20px",
                            textDecoration: "none",
                            fontFamily: "Roboto, sans-serif",
                            fontSize: "16px",
                            fontWeight: "700",
                            background: "black",
                            color: "white",
                          };
                        }
                      }}
                    >
                      AUDIT REPORT{" "}
                    </NavLink>
                  </Box>
                </NavLink>
              </Box>
            </Box>
            <Box
              className={"dropDown1"}
              width={"20%"}
              height={"70%"}
              display={"flex"}
              alignItems={"center"}
              position={"relative"}
            >
              <Box width={"100%"} height={"100%"}>
                <NavLink
                  className={"underLine"}
                  style={({ isActive }) => {
                    if (isActive) {
                      return {
                        border: "2px solid black",
                        textDecoration: "none",
                        fontFamily: "Roboto, sans-serif",
                        fontSize: "20px",
                        fontWeight: "700",
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      };
                    } else {
                      return {
                        color: "black",
                        textDecoration: "none",
                        fontFamily: "Roboto, sans-serif",
                        fontSize: "20px",
                        fontWeight: "700",
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      };
                    }
                  }}
                  to={"/Projects"}
                >
                  Projects{" "}
                </NavLink>
              </Box>
            </Box>

            <Box
              className={"dropDown1"}
              width={"20%"}
              height={"70%"}
              display={"flex"}
              alignItems={"center"}
              position={"relative"}
            >
              <Box width={"100%"} height={"100%"}>
                <Box
                  className={"underLine"}
                  color={"black"}
                  style={{
                    textDecoration: "none",
                    fontFamily: "Roboto, sans-serif",
                    fontSize: "20px",
                    fontWeight: "700",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer",
                    gap: "10px",
                  }}
                >
                  Initiatives <KeyboardArrowDownIcon />
                </Box>
              </Box>
              <Box
                boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
                className={"open"}
                width={"102%"}
                bgcolor={"white"}
                position={"absolute"}
                top={"68.5px"}
                display={"none"}
                flexDirection={"column"}
                zIndex={"2"}
              >
                <NavLink
                  to={"/Impact"}
                  className={"hoverEffect"}
                  style={({ isActive }) => {
                    if (!isActive) {
                      return {
                        padding: "10px 20px",
                        textDecoration: "none",
                        fontFamily: "Roboto, sans-serif",
                        fontSize: "16px",
                        fontWeight: "700",
                      };
                    } else {
                      return {
                        padding: "10px 20px",
                        textDecoration: "none",
                        fontFamily: "Roboto, sans-serif",
                        fontSize: "16px",
                        fontWeight: "700",
                        background: "black",
                        color: "white",
                      };
                    }
                  }}
                >
                  IMPACT
                </NavLink>
                {/* <NavLink to={"/OngoingInitiatives"} className={"hoverEffect"} style={({ isActive }) => {
                                    if (!isActive) {
                                        return { padding: "10px 20px", textDecoration: "none", fontFamily: "Roboto, sans-serif", fontSize: "16px", fontWeight: "700", lineHeight: "25px" }
                                    }
                                    else {
                                        return { padding: "10px 20px", textDecoration: "none", fontFamily: "Roboto, sans-serif", fontSize: "16px", fontWeight: "700", background: "black", color: "white", lineHeight: "25px" }
                                    }
                                }} >ONGOING INITIATIVES</NavLink> */}
                <NavLink
                  to={"/Centers"}
                  className={"hoverEffect"}
                  style={({ isActive }) => {
                    if (!isActive) {
                      return {
                        padding: "10px 20px",
                        textDecoration: "none",
                        fontFamily: "Roboto, sans-serif",
                        fontSize: "16px",
                        fontWeight: "700",
                      };
                    } else {
                      return {
                        padding: "10px 20px",
                        textDecoration: "none",
                        fontFamily: "Roboto, sans-serif",
                        fontSize: "16px",
                        fontWeight: "700",
                        background: "black",
                        color: "white",
                      };
                    }
                  }}
                >
                  CENTERS
                </NavLink>
              </Box>
            </Box>
            <Box
              className={"dropDown1"}
              width={"20%"}
              height={"70%"}
              display={"flex"}
              alignItems={"center"}
              position={"relative"}
            >
              <Box width={"100%"} height={"100%"}>
                <Box
                  className={"underLine"}
                  color={"black"}
                  style={{
                    textDecoration: "none",
                    fontFamily: "Roboto, sans-serif",
                    fontSize: "20px",
                    fontWeight: "700",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer",
                    gap: "10px",
                  }}
                >
                  Media <KeyboardArrowDownIcon />
                </Box>
              </Box>
              <Box
                boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
                className={"open"}
                width={"110%"}
                bgcolor={"white"}
                position={"absolute"}
                top={"68.5px"}
                display={"none"}
                flexDirection={"column"}
                zIndex={"2"}
              >
                <NavLink
                  to={"/Gallery"}
                  className={"hoverEffect"}
                  style={({ isActive }) => {
                    if (!isActive) {
                      return {
                        padding: "10px 20px",
                        textDecoration: "none",
                        fontFamily: "Roboto, sans-serif",
                        fontSize: "16px",
                        fontWeight: "700",
                      };
                    } else {
                      return {
                        padding: "10px 20px",
                        textDecoration: "none",
                        fontFamily: "Roboto, sans-serif",
                        fontSize: "16px",
                        fontWeight: "700",
                        background: "black",
                        color: "white",
                      };
                    }
                  }}
                >
                  GALLERY
                </NavLink>
                {/* <NavLink to={"/MediaCoverage"} className={"hoverEffect"} style={({ isActive }) => {
                                    if (!isActive) {
                                        return { padding: "10px 20px", textDecoration: "none", fontFamily: "Roboto, sans-serif", fontSize: "16px", fontWeight: "700", lineHeight: "25px" }
                                    }
                                    else {
                                        return { padding: "10px 20px", textDecoration: "none", fontFamily: "Roboto, sans-serif", fontSize: "16px", fontWeight: "700", background: "black", color: "white", lineHeight: "25px" }
                                    }
                                }} >MEDIA COVERAGE</NavLink>
                                <NavLink to={"/Certificates"} className={"hoverEffect"} style={({ isActive }) => {
                                    if (!isActive) {
                                        return { padding: "10px 20px", textDecoration: "none", fontFamily: "Roboto, sans-serif", fontSize: "16px", fontWeight: "700" }
                                    }
                                    else {
                                        return { padding: "10px 20px", textDecoration: "none", fontFamily: "Roboto, sans-serif", fontSize: "16px", fontWeight: "700", background: "black", color: "white" }
                                    }
                                }} >CERTIFICATES</NavLink> */}
              </Box>
            </Box>
            
          </Box>
          
        </Box>
        
        <Box
          display={["none", "none", "none", "flex"]}
          justifyContent={"center"}
          alignItems={"center"}
          height={"100%"}
          width={"30%"}
        >
          <NavLink
            style={{ textDecoration: "none", height: "70%", width: "50%" }}
            to={"/Projects"}
          >
            <Button
              variant="text"
              style={{
                fontFamily: "Roboto, sans-serif",
                fontSize: "20px",
                width: "100%",
                height: "100%",
                background: "#564fa4",
                color: "white",
                borderRadius: "10px",
                fontWeight: "800",
              }}
            >
              Start Donation
            </Button>
          </NavLink>
        </Box>
        <Hamburger />
      </Box>
    </>
  );
}

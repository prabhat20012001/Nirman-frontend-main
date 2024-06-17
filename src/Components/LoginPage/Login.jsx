import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useContext, useRef } from "react";
import { Navigate } from "react-router-dom";
import { Context } from "../../ContextApi";

export default function LoginPage() {
    let {isAdmin,setIsAdmin} = useContext(Context)
    let users = [
        {email:"sumitsaurabh@gmail.com",password:"sumitsaurabh123"},
        {email:"ishanyadav13290@gmail.com",password:"ishanyadav13290@gmail.com"},
        {email:"raghbirsingh9101@gmail.com",password:"raghbirsingh9101@gmail.com"},
        {email:"yashwantsharma@gmail.com",password:"yashwantsharma123"},
        {email:"nirman.bihar02@gmail.com",password:"nirman.bihar02@gmail.com"}
    ]
    let emailRef = useRef(null)
    let passRef = useRef(null)
    function handleLogin(e){
        let email = emailRef.current.value;
        let pass = passRef.current.value;
        for(let i of users){
            if(i.email==email && i.password==pass){
                console.log("Login Successful !");
                setIsAdmin(true)
                // localStorage.setItem("loginStatus",true)
                return;
            }
        }
        console.log("InValid Email or PAssword")
    };

    if(isAdmin) return <Navigate to={"/CMS"}/>
    return (
        <Box width={"100%"} minHeight={"100vh"} p={"20px"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
            <Box width={"500px"} p={"30px"} minHeight={"400px"} boxShadow={"rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px"} display={"flex"} flexDirection={"column"} gap={"20px"} alignItems={"center"}>
                <Typography fontWeight={"900"} fontSize={"40px"}>Login</Typography>

                <Box width={"100%"}>
                    <Typography>Email</Typography>
                    <input ref={emailRef} type={"email"} style={{ width: "100%", padding: "10px" }} />
                </Box>
                <Box width={"100%"}>
                    <Typography>Password</Typography>
                    <input ref={passRef} type={"password"} style={{ width: "100%", padding: "10px" }} />
                </Box>
                <Button onClick={handleLogin} sx={{width:"80%",background:"lightgreen",color:"black",fontWeight:"900","&:hover":{background:"green",color:"white"}}}>Login</Button>
            </Box>

        </Box>
    )
}
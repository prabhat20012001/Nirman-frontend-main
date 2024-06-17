import React, { useContext } from 'react';
import Carousel from 'react-material-ui-carousel'
import {  Button, Typography } from '@mui/material'
import { Box } from '@mui/system';
import { Context } from '../../ContextApi';

export default function Caroussel() {
    let {items} = useContext(Context)
    console.log(items)
    return (
        <>
            <Carousel navButtonsAlwaysInvisible={true} sx={{ height: "100%" }} next={(next, active) => console.log(`we left ${active}, and are now at ${next}`)}
                prev={(prev, active) => console.log(`we left ${active}, and are now at ${prev}`)}>
                {items.map((e) => (
                    <Item key={Date.now()} i={e.img} name={e.name} secText={e.secondText} description={e.description}></Item>
                ))}
            </Carousel>
        </>
    )
}
// width={["30%","30%","40%","50%"]}  height={["20px","30px","40px","50px"]}
//{props.item.description} {props.item.name}
function Item(props) {
    console.log(props)
    return (
        <Box sx={{ display: "flex", justifyContent: "center",paddingBottom:"40px" }}>
            <Box height={["120vw", "40vw", "40vw","40vw"]} sx={{ width: "95vw", display: "flex", justifyContent: "center", alignItems: "center" }} >
                <Box flexDirection={["column", "row", "row", "row"]} width={"100%"} height={"80%"} display={"flex"} justifyContent={"center"}>
                    <Box width={["100%", "50%", "50%", "50%"]}>
                        <img draggable={"false"} style={{ height: "100%", width: "100%", objectFit: "contain" }} src={props.i} alt="Logo1" />
                    </Box>
                    <Box  width={["100%", "50%", "50%", "50%"]} p={"20px 40px"} gap={["10px", "10px", "20px", "40px"]}  display={"flex"} flexDirection={"column"} justifyContent={"center"}>
                        <Typography fontWeight={"700"} fontSize={["14px", "16px", "18px", "22px"]}>{props.name}</Typography>
                        <Typography fontWeight={"700"} fontSize={["12px", "14px", "16px", "18px"]}>{props.secText}</Typography>
                        <Typography fontSize={["10px", "12px", "13px", "14px"]}>{props.description}
                        </Typography>
                        <Box width={"100px"} height={"40px"}>
                            <Button style={{width:"100%",height:"100%", background: "black", color: "white", fontSize: "10px" }}>Get in Touch</Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
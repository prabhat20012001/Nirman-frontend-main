import { Box } from "@mui/system";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../ContextApi";
import GalleryCard from "./GalleryCard";
import s from "./gallery.module.css"
import { useParams } from "react-router-dom";



export default function GalleryImageViewer() {
    let { images } = useContext(Context);
    let {index} = useParams();
    const [data,setData] = useState([])
    window.scrollTo(0,0)
    return (
        <Box display={"grid"} className={s.GalleryGrid} width={"100%"} minHeight={"100vh"} p={"30px"}>
            {
                images[index]?.images.map((i,inde) => {
                    return <GalleryCard  key={inde} img={i} data={images[index].images || []} defaultIndex={inde}/>
                })
            }
        </Box>
    )
}

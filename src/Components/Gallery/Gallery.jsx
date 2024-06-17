import { Box } from "@mui/system";
import { useContext, useEffect, useState } from "react";
import React from "react";
import { Context } from "../../ContextApi";
import { Pagination, Typography } from "@mui/material";
import s from "./gallery.module.css";
import GalleryCard from "./GalleryCard";
import { NavLink } from "react-router-dom";
import GalleryCategoryCard from "./GalleryCategoryCard";
import GalleryCategoryCardMobile from "./GalleryCategoryCardMobile";
import axios from "axios";
export default function Gallery() {
  const { images, setImages } = useContext(Context);
  const { page, setPage } = useContext(Context);
  const { maxPage, setMaxPage } = useContext(Context);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [images]);
  return (
    <Box
      width={"100%"}
      alignItems={"center"}
      p={"20px"}
      pb={"100px"}
      display={"flex"}
      gap={"30px"}
      flexDirection={"column"}
      minHeight={"100vh"}
      position={"relative"}
    >
      <Typography
        fontWeight={"900"}
        fontSize={"40px"}
        m={"20px 0"}
        color={"rgb(86, 79, 164)"}
      >
        Gallery
      </Typography>
      {images.map((i, inde) => (
        <GalleryCategoryCard
          key={i._id}
          heading={i?.title}
          description={i?.description}
          img={i?.images[0]}
          index={inde}
        />
      ))}
      {images.map((i, inde) => (
        <GalleryCategoryCardMobile
          key={i._id}
          heading={i?.title}
          description={i?.description}
          img={i?.images[0]}
          index={inde}
        />
      ))}
      <Pagination
        sx={{ position: "absolute", bottom: "20px" }}
        onChange={(e, value) => {
          setPage(value);
        }}
        count={maxPage}
        size="large"
      />
    </Box>
  );
}
{
  /* {
                    images.map((i) => (
                        <Box bgcolor={"black"} >
                            <img style={{width:"100%"}} src={i.img} alt="" />
                        </Box>
                    ))
                } */
}

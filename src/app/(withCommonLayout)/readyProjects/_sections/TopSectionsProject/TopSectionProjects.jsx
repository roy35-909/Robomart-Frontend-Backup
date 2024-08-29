"use client";
import Image from "next/image";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { Grid, Typography } from "@mui/material";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import RecentProjects from "./RecentProjects";
const TopSectionProjects = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Swiper
            modules={[Navigation, Pagination]}
            pagination={{ clickable: true }}
            navigation={true}
            autoplay={true}
          >
            <SwiperSlide style={{ display: "flex", justifyContent: "center" }}>
              {" "}
              {/* Add a key for each slide */}
              <Image
                // style={{ width: "100% " }}
                src={`/assets/robop2.png`}
                alt="hero image"
                width={1040}
                height={550}
                layout="responsive" // Or 'fill'
                objectFit="cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              {/* Add a key for each slide */}
              <Image
                // style={{ width: "100% " }}
                src={`/assets/robop.png`}
                alt="hero image"
                width={1040}
                height={550}
                layout="responsive" // Or 'fill'
                objectFit="cover"
              />
            </SwiperSlide>
          </Swiper>
        </Grid>
        <Grid item xs={12} md={4} padding={2}>
          <div style={{ border: "1px solid #d1d1d16b", height: "100%" }}>
            <Typography style={{fontFamily:"var(--primaryFont)",textAlign:"center",fontWeight:"bold",fontSize:"18px"}}>
              {" "}
              Recent Projects View{" "}
            </Typography>
            <RecentProjects />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default TopSectionProjects;

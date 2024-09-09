"use client";
import Image from "next/image";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { useGetHomeDataQuery } from "@/redux/api/api";
import { CircularProgress, Grid, Skeleton, Typography } from "@mui/material";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import RecentProjects from "./RecentProjects";
const TopSectionProjects = () => {
  const { data: homeData1, isLoading: homeLoading } = useGetHomeDataQuery();

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3} padding={2}>
          <div
            style={{
              border: "1px solid #d1d1d16b",
              height: "100%",
              marginLeft: "2px",
            }}
          >
            <Typography
              style={{
                fontFamily: "var(--primaryFont)",
                textAlign: "center",
                fontWeight: "bold",
                fontSize: "18px",
              }}
            >
              Most Recent
            </Typography>
            <RecentProjects />
          </div>
        </Grid>
        <Grid item xs={12} md={7}>
          <Swiper
            modules={[Navigation, Pagination]}
            pagination={{ clickable: true }}
            navigation={true}
            autoplay={true}
          >
            {homeLoading ? (
              <Skeleton variant="rectangular" width="100%" height={450} />
            ) : (
              <>
                {homeData1?.homeslider?.slice(-2).map((sliderImg) => (
                  <>
                    {" "}
                    <SwiperSlide
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      {" "}
                      {/* Add a key for each slide */}
                      <Image
                        // style={{ width: "100% " }}
                        src={`${
                          sliderImg?.poster
                            ? sliderImg.poster
                            : "/assets/no-img.jpg"
                        }`}
                        alt="hero image"
                        width={1040}
                        height={550}
                        layout="responsive" // Or 'fill'
                        objectFit="cover"
                      />
                    </SwiperSlide>
                  </>
                ))}
              </>
            )}
          </Swiper>
        </Grid>
      </Grid>
    </div>
  );
};

export default TopSectionProjects;

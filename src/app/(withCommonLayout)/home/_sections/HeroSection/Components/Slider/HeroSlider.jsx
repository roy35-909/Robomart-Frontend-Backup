import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { useGetHomeDataQuery } from "@/redux/api/api";
import Image from "next/image";

const HeroSlider = () => {
  const { data: homeData1, isLoading: homeLoading } = useGetHomeDataQuery();
  console.log(homeData1);
  if (homeLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination]}
        pagination={{ clickable: true }}
        navigation={true}
        autoplay={true}
      >
        {homeData1?.homeslider?.map((sliderImg) => (
          <SwiperSlide key={sliderImg.id}>
            {" "}
            {/* Add a key for each slide */}
            <Image
              style={{ width: "100% " }}
              src={`${
                sliderImg?.poster ? sliderImg.poster : "/assets/no-img.jpg"
              }`}
              alt="hero image"
              width={1113}
              height={477}
              layout="responsive" // Or 'fill'
              objectFit="cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;

import { backendUrl } from "@/utils/backendApiUrlProvider";
import { Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Image from "next/image";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./OurPartnerClinet.module.scss";
const OurCorporateClients = () => {
  const theme = useTheme();
  const isMScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`${backendUrl}/api/our_client`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div style={{ padding: "3vh 5vh", marginBottom: "15vh" }}>
      <div>
        <Typography
          variant="h5"
          sx={{
            fontFamily: "Poppins",
            fontWeight: "bold",
            textAlign: "center",
            padding: "2vh 0",
          }}
        >
          Our Corporate Clients
        </Typography>
        <>
          <Swiper
            slidesPerView={5}
            spaceBetween={20}
            navigation={true}
            autoplay={{
              delay: 2500,
            }}
            modules={[Navigation, Autoplay]}
            breakpoints={{
              300: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              500: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 6,
                spaceBetween: 2,
              },
            }}
            className="mySwiper"
          >
            {data?.map((company, idx) => (
              <SwiperSlide key={idx} className={styles.singlePartner}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      width: "150px",
                      height: "150px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      // border: "1px solid #e2e2e2",
                    }}
                  >
                    <Image
                      style={{
                        width: "150px",
                        // border: "1px solid #e2e2e2",
                      }}
                      // src={`https://i.ibb.co/zbyRK5d/small-product.png`}
                      src={`${company?.logo}`}
                      alt="no-image"
                      width={150}
                      height={150}
                    />
                  </div>
                </div>

                <Typography
                  variant="subtitle1"
                  textAlign={"center"}
                  fontWeight={"bold"}
                  fontFamily={"Poppins"}
                >
                  {company?.name}
                </Typography>
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      </div>
    </div>
  );
};

export default OurCorporateClients;

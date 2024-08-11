"use client";

import { backendUrl } from "@/utils/backendApiUrlProvider";
import { CircularProgress, Typography } from "@mui/material";
import { lazy, Suspense, useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const SingleProductCard = lazy(() =>
  import("@/Shared/SingleProductCard/SingleProductCard")
);
const RelatedProducts = ({ categoriesId }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      const newData = [];

      for (const id of categoriesId) {
        try {
          const response = await fetch(
            `${backendUrl}/api/catagory/${id}/category`
          );
          if (response.ok) {
            const categoryData = await response.json();
            newData.push(categoryData);
          }
        } catch (error) {
          console.log(error);
        }
      }

      setData(...newData);
      setIsLoading(false);
    };

    fetchData();
  }, [categoriesId]);

  return (
    <>
      <div style={{ padding: "3vh 0vh" }}>
        <Typography
          variant="h5"
          sx={{ fontFamily: "Poppins", fontWeight: "bold" }}
        >
          Related Products
        </Typography>
        {isLoading && <CircularProgress />}
        <>
          <Swiper
            slidesPerView={5}
            spaceBetween={20}
            navigation={true}
            modules={[Navigation]}
            breakpoints={{
              300: {
                slidesPerView: 1,
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
              // 1024: {
              //   slidesPerView: 5,
              //   spaceBetween: 50,
              // },
            }}
            className="mySwiper"
          >
            {data?.map((product, idx) => (
              <SwiperSlide key={idx}>
                {/* <Link
                  style={{
                    textDecoration: "none",
                    color: "#4f4f4f",
                    "&:hover": { color: "black !important" },
                  }}
                  href={`/product/${product?.id}/${product?.name?.replace(
                    / /g,
                    "_"
                  )}`}
                >
                  <Box
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      style={{
                        width: "200px",
                        height: "150px",
                        border: "1px solid #e2e2e2",
                      }}
                      src={`${
                        product?.photo ? product?.photo : "/assets/no-img.jpg"
                      }`}
                      alt={product.name}
                      width={200}
                      height={150}
                    />
                  </Box>
                  <p style={{ textAlign: "center" }}>{product?.name}</p>
                </Link> */}
                <Suspense fallback={() => ""}>
                  {" "}
                  <SingleProductCard product={product} />
                </Suspense>
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      </div>
    </>
  );
};

export default RelatedProducts;

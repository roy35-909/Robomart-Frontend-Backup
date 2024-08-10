"use client"
import Image from 'next/image';
import React, { useCallback, useState } from 'react';

const LeftImageCom = ({ productDetails }) => {
      const [bgPosition, setBgPosition] = useState("50% 50%");
      const [imageIndex, setImageIndex] = useState(0);
  const zoom = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setBgPosition(`${x}% ${y}%`);
  };

  const revImgArr = [
    "https://i.ibb.co/109P1Zm/p1.jpg",
    "https://i.ibb.co/FYdfgW9/p2.jpg",
    "https://i.ibb.co/wrLn7wf/Arduino-Uno-R3-SMD-01.jpg",
  ];
  const changeMainImage = useCallback((event) => {
    const selectedImgIndex = Number(
      event.currentTarget.getAttribute("imgindex")
    );
    setImageIndex(selectedImgIndex);
  }, []);


    return (
      <>
        {productDetails?.media?.length > 0 && (
          <>
            {" "}
            <div className={styles.images}>
              {productDetails?.media?.map((item, index) => (
                <Image
                  onClick={changeMainImage}
                  imgindex={index}
                  className={
                    index === imageIndex ? styles.activeImage : styles.notActive
                  }
                  src={item?.photo ? item?.photo : "/assets/no-img.jpg"}
                  key={index}
                  alt={`${productDetails?.name} image`}
                  // objectFit="contain"
                  width={200}
                  height={200}
                />
              ))}
            </div>
            <div
              className={styles.mainImage}
              onMouseMove={zoom}
              style={{
                backgroundImage: `url(${
                  productDetails?.media &&
                  productDetails?.media[imageIndex]?.photo
                    ? productDetails?.media[imageIndex]?.photo
                    : "/assets/no-img.jpg"
                })`,
                backgroundPosition: bgPosition,
              }}
            >
              <Image
                src={`${
                  productDetails?.media &&
                  productDetails?.media[imageIndex]?.photo
                    ? productDetails?.media[imageIndex]?.photo
                    : "/assets/no-img.jpg"
                }`}
                alt={`${productDetails?.name} image`}
                style={{
                  border: "1px solid #f2f2f2",
                  boxShadow: "1px 1px 20px #e1e1e185",
                  borderRadius: "5px",
                }}
                // layout="fill" // Or 'fill'
                // objectFit="contain"
                width={300}
                height={300}
              />
            </div>
          </>
        )}

        {productDetails?.media?.length == 0 && (
          <>
            {" "}
            <div className={styles.images}></div>
            <div
              className={styles.mainImage}
              onMouseMove={zoom}
              style={{
                backgroundImage: `url(${
                  productDetails?.photo
                    ? productDetails?.photo
                    : "/assets/no-img.jpg"
                })`,
                backgroundPosition: bgPosition,
              }}
            >
              <Image
                src={`${
                  productDetails?.photo
                    ? productDetails?.photo
                    : "/assets/no-img.jpg"
                }`}
                alt={`${productDetails?.name} image`}
                style={{
                  border: "1px solid #f2f2f2",
                  boxShadow: "1px 1px 20px #e1e1e185",
                  borderRadius: "5px",
                }}
                width={100}
                height={100}
              />
            </div>
          </>
        )}
      </>
    );
};

export default LeftImageCom;
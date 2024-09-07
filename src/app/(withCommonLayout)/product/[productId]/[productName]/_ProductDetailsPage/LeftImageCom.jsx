"use client";
import Image from "next/image";
import { useCallback, useState } from "react";
import styles from "./ProductDetail.module.scss";

const LeftImageCom = ({ productDetails }) => {
  const [checkDuplicate, setCheckDuplicate] = useState(false);
  const [bgPosition, setBgPosition] = useState("50% 50%");
  const [imageIndex, setImageIndex] = useState(0);
 

  const zoom = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setBgPosition(`${x}% ${y}%`);
  };

  const changeMainImage = useCallback((event) => {
    const selectedImgIndex = Number(
      event.currentTarget.getAttribute("imgindex")
    );
    setImageIndex(selectedImgIndex);
  }, []);

  const getValidImageSrc = (imageSrc) => {
    return imageSrc ? imageSrc : "/assets/no-img.jpg";
  };

  const mainImageSrc =
    productDetails?.media?.[imageIndex]?.photo ||
    productDetails?.photo ||
    "/assets/no-img.jpg";
  if (typeof window !== "undefined") {
    const cacheRecentView = localStorage?.getItem("recentViewProducts");
 const recentProjectView = localStorage?.getItem("recentProjectsView");
//! in production it should 12
 if (productDetails?.catagorys[0] === 2) {
   if (!recentProjectView) {
     const recentArr = [];
     recentArr.push(productDetails);
     localStorage.setItem("recentProjectsView", JSON.stringify(recentArr));
   } else {
     const pastRecentArr = JSON.parse(recentProjectView);

     const checkDuplicateInput = pastRecentArr.some(
       (item) => JSON.stringify(item) === JSON.stringify(productDetails)
     );

     if (!checkDuplicateInput) {
       if (pastRecentArr.length >= 5) {
         pastRecentArr.shift();
       }
       pastRecentArr.push(productDetails);
       localStorage.setItem(
         "recentProjectsView",
         JSON.stringify(pastRecentArr)
       );
     }
   }
 }


    if (!cacheRecentView) {
      const recentArr = [];
      recentArr.push(productDetails);
      localStorage.setItem("recentViewProducts", JSON.stringify(recentArr));
    } else {
      const pastRecentArr = JSON.parse(cacheRecentView);

      const checkDuplicateInput = pastRecentArr.some(
        (item) => JSON.stringify(item) === JSON.stringify(productDetails)
      );

      if (!checkDuplicateInput) {
        pastRecentArr.push(productDetails);
        localStorage.setItem(
          "recentViewProducts",
          JSON.stringify(pastRecentArr)
        );
      }
    }
  }

  return (
    <>
      {productDetails?.media?.length > 0 ? (
        <>
          <div className={styles.images}>
            {productDetails.media.map((item, index) => (
              <Image
                key={index}
                onClick={changeMainImage}
                imgindex={index.toString()}
                className={
                  index === imageIndex ? styles.activeImage : styles.notActive
                }
                src={getValidImageSrc(item?.photo)}
                alt={`${productDetails?.name} image`}
                width={200}
                height={200}
              />
            ))}
          </div>
          <div
            className={styles.mainImage}
            onMouseMove={zoom}
            style={{
              backgroundImage: `url(${getValidImageSrc(
                productDetails.media[imageIndex]?.photo
              )})`,
              backgroundPosition: bgPosition,
            }}
          >
            <Image
              src={getValidImageSrc(mainImageSrc)}
              alt={`${productDetails?.name} image`}
              style={{
                border: "1px solid #f2f2f2",
                boxShadow: "1px 1px 20px #e1e1e185",
                borderRadius: "5px",
              }}
              width={300}
              height={300}
            />
          </div>
        </>
      ) : (
        <div className={styles.mainImage}>
          <Image
            src={getValidImageSrc(productDetails?.photo)}
            alt={`${productDetails?.name} image`}
            style={{
              border: "1px solid #f2f2f2",
              boxShadow: "1px 1px 20px #e1e1e185",
              borderRadius: "5px",
            }}
            width={300}
            height={300}
          />
        </div>
      )}
    </>
  );
};

export default LeftImageCom;

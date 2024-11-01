//!static code
// import { getSingleProduct } from "@/utils/ApiCall/productApicall";
// import ProductDetailsPage from "./_ProductDetailsPage/ProductDetailsPage";

// // eslint-disable-next-line @next/next/no-async-client-component

// export async function generateMetadata({ params }, parent) {
//   const productDetails = await getSingleProduct(params.productId);
//   // const metaKeywords = tagArray.split(",");
//   const metaKeywords = productDetails?.product_tags;

//   const metaData = {
//     title: productDetails?.name,
//     description: productDetails?.discription,
//     keywords: metaKeywords,
//     alternates: {
//       canonical: `https://www.robomartbd.com/product/${
//         productDetails?.id
//       }/${encodeURI(productDetails?.name)}`,
//     },
//     openGraph: {
//       images: [`${productDetails?.media[0]?.photo}`],
//     },
//   };
//   return metaData;
// }
// const SingleProduct = async ({ params }) => {
//   try {
//     const productDetails = await getSingleProduct(params.productId);

//     return (
//       <>
//         <ProductDetailsPage productDetails={productDetails} />
//       </>
//     );
//   } catch (error) {
//     console.error("Error in SingleProduct component:", error);
//     // Optionally handle the error state in your component, e.g., show an error message
//     return (
//       <div>
//         <h1>Error loading product details</h1>
//         <p>{error.message}</p>
//       </div>
//     );
//   }
// };

// export default SingleProduct;

//! Dynamic COde
"use client"; // Make sure this is a client component
import { getSingleProduct } from "@/utils/ApiCall/productApicall";
import Head from "next/head";
import { useEffect, useState } from "react";
import ProductDetailsPage from "./_ProductDetailsPage/ProductDetailsPage";
import { CircularProgress } from "@mui/material";

const SingleProduct = ({ params }) => {
  const [productDetails, setProductDetails] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProductDetails() {
      try {
        const data = await getSingleProduct(params.productId);
        setProductDetails(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching product details:", error);
        setError(error);
      }
    }

    fetchProductDetails();
  }, [params.productId]);

  if (error) {
    return (
      <div>
        <h1>Error loading product details</h1>
        <p>{error.message}</p>
      </div>
    );
  }

  return (
    <>
      {productDetails ? (
        <>
          {/* Set metadata dynamically */}
          <Head>
            <title>{productDetails.name}</title>
            <meta name="description" content={productDetails.description} />
            <meta name="keywords" content={productDetails.product_tags} />
            <link
              rel="canonical"
              href={`https://www.robomartbd.com/product/${
                productDetails.id
              }/${encodeURI(productDetails.name)}`}
            />
            <meta
              property="og:image"
              content={productDetails.media[0]?.photo}
            />
          </Head>
          <ProductDetailsPage productDetails={productDetails} />
        </>
      ) : (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress /> <p>Loading product details...</p>
        </div>
      )}
    </>
  );
};

export default SingleProduct;

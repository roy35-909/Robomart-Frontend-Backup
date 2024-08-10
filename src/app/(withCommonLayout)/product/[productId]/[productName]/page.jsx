"use client";

import { useParams } from "next/navigation";
import ProductDetailsPage from "./_ProductDetailsPage/ProductDetailsPage";

const SingleProduct = () => {
  const params = useParams();
  console.log(params);

  // const detailsPageParams = {
  //   productId: params.slug[0],
  // };
  return (
    <>
      <ProductDetailsPage params={params} />
    </>
  );
};

export default SingleProduct;

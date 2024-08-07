"use client";

import ProductDetailsPage from "./_ProductDetailsPage/ProductDetailsPage";

const SingleProduct = ({ params }) => {
  console.log(params);
  
  const detailsPageParams = {
    productId: params.slug[0],
  };
  return (
    <>
      <ProductDetailsPage params={detailsPageParams} />
    </>
  );
};

export default SingleProduct;

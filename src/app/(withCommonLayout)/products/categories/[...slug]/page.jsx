"use client";
import SingleCategoryProducts from "./_SingleCategoryProducts/SingleCategoryProducts";

const CategoryProducts = ({ params }) => {
  const singleCategoryParams = {
    categoryId: params.slug[0],
    categoryName: params.slug[1],
  };
  return (
    <>
      <SingleCategoryProducts params={singleCategoryParams} />
    </>
  );
};

export default CategoryProducts;

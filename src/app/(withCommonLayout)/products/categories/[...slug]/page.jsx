"use client";
import SingleCategoryProducts from "./_SingleCategoryProducts/SingleCategoryProducts";

const CategoryProducts = ({ params }) => {
  const singleCategoryParams = {
    categoryId: params.slug[0],
    categoryName: params.slug[1],
  };
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <SingleCategoryProducts params={singleCategoryParams} />
    </div>
  );
};

export default CategoryProducts;

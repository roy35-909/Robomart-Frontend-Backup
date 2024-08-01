"use client"
import SubCategoryProducts from "./_SingleSubCategoryProduct/SubCategoryProducts";

const SubCategoryWiseProduct = ({ params }) => {
  const subCategoryParams = {
    subCategoryId: params.slug[0],
    subCategoryName: params.slug[1],
  };
  return (
    <>
      <SubCategoryProducts params={subCategoryParams} />
    </>
  );
};

export default SubCategoryWiseProduct;

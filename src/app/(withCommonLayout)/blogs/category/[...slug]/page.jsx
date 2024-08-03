"use client";

import SingleCategoryAllTutorial from "@/app/(withCommonLayout)/tutorials/_AllTutorials/Components/SingleCategoryAllTutorial/SingleCategoryAllTutorial";

const CategoryBlogs = ({ params }) => {
  const categoryTutorialParams = {
    categoryId: params.slug[0],
    categoryName: params.slug[1],
  };
  return (
    <>
      <SingleCategoryAllTutorial params={categoryTutorialParams} />
    </>
  );
};

export default CategoryBlogs;

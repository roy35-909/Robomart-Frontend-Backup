"use client";

import SingleCategoryAllTutorial from "@/app/(withCommonLayout)/tutorials/_AllTutorials/Components/SingleCategoryAllTutorial/SingleCategoryAllTutorial";


const CategoryBlogs = ({ params }) => {
  return (
    <>
      <SingleCategoryAllTutorial params={params} />
    </>
  );
};

export default CategoryBlogs;

import SingleCategoryAllTutorial from "../../_AllTutorials/Components/SingleCategoryAllTutorial/SingleCategoryAllTutorial";

const CategoryBaseAllTutorial = ({ params }) => {
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

export default CategoryBaseAllTutorial;

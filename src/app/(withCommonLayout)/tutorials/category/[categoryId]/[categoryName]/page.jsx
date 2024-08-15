import SingleCategoryAllTutorial from "../../../_AllTutorials/Components/SingleCategoryAllTutorial/SingleCategoryAllTutorial";
export async function generateMetadata({ params }, parent) {
  const metaData = {
    title: `${decodeURI(params?.categoryName)} - RobomartBD tutorials tag`,
    alternates: {
      canonical: `https://www.robomartbd.com/tutorials/category/${params?.categoryId}/${params?.categoryName}`,
    },
  };
  return metaData;
}
const CategoryBaseAllTutorial = ({ params }) => {
  return (
    <>
      <SingleCategoryAllTutorial params={params} />
    </>
  );
};

export default CategoryBaseAllTutorial;


import SingleCategoryAllTutorial from "@/app/(withCommonLayout)/tutorials/_AllTutorials/Components/SingleCategoryAllTutorial/SingleCategoryAllTutorial";
export async function generateMetadata({ params }, parent) {
  const metaData = {
    title: `${decodeURI(params?.categoryName)} - RobomartBD tutorials tag`,
    alternates: {
      canonical: `https://www.robomartbd.com/blogs/category/${params?.categoryId}/${params?.categoryName}`,
    },
  };
  return metaData;
}

const CategoryBlogs = ({ params }) => {
  return (
    <>
      <SingleCategoryAllTutorial params={params} />
    </>
  );
};

export default CategoryBlogs;

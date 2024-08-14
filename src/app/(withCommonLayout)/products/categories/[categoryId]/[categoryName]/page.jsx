import { categoryAllProducts } from "@/utils/ApiCall/productApicall";
import SingleCategoryProducts from "./_SingleCategoryProducts/SingleCategoryProducts";

export async function generateMetadata({ params }, parent) {
  const metaData = {
    title: `${decodeURI(params?.categoryName)} - RobomartBD`,
    alternates: {
      canonical: `https://www.robomartbd.com/categories/${params?.categoryId}/${params?.categoryName}`,
    },
  };
  return metaData;
}
// eslint-disable-next-line @next/next/no-async-client-component
const CategoryProducts = async ({ params }) => {
  const categoryProducts = await categoryAllProducts(params);
  // console.log(categoryProducts);

  return (
    <>
      {/* {categoryProducts?.length && ( */}
      <SingleCategoryProducts data={categoryProducts} params={params} />
    </>
  );
};

export default CategoryProducts;

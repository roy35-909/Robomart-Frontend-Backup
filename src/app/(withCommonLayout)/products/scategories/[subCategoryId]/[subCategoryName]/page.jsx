import { subCategoryAllProducts } from "@/utils/ApiCall/productApicall";
import SubCategoryProducts from "./_SingleSubCategoryProduct/SubCategoryProducts";
export async function generateMetadata({ params }, parent) {
  const metaData = {
    title: `${decodeURI(params?.subCategoryName)} - RobomartBD`,
    alternates: {
      canonical: `https://www.robomartbd.com/scategories/${params?.subCategoryId}/${params?.subCategoryName}`,
    },
  };
  return metaData;
}
const SubCategoryWiseProduct = async ({ params }) => {
  const categoryProducts = await subCategoryAllProducts(params);
  return (
    <>
      <SubCategoryProducts data={categoryProducts} params={params} />
    </>
  );
};

export default SubCategoryWiseProduct;

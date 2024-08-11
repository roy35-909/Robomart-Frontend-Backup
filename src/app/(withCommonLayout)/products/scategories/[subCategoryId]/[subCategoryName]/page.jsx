import { subCategoryAllProducts } from "@/utils/ApiCall/productApicall";
import SubCategoryProducts from "./_SingleSubCategoryProduct/SubCategoryProducts";

const SubCategoryWiseProduct = async ({ params }) => {
  const categoryProducts = await subCategoryAllProducts(params);
  return (
    <>
      <SubCategoryProducts data={categoryProducts} params={params} />
    </>
  );
};

export default SubCategoryWiseProduct;

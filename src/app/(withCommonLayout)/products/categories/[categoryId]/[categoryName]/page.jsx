import { categoryAllProducts } from "@/utils/ApiCall/productApicall";
import SingleCategoryProducts from "./_SingleCategoryProducts/SingleCategoryProducts";

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

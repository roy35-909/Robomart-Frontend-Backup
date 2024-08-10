"use client";
import { getSingleProducts } from "@/utils/ApiCall/productApicall";
import { useParams } from "next/navigation";
import ProductDetailsPage from "./_ProductDetailsPage/ProductDetailsPage";

// eslint-disable-next-line @next/next/no-async-client-component
const SingleProduct = async () => {
  const params = useParams();
  const productDetails = await getSingleProducts(params.productId);
  return (
    <>
      <ProductDetailsPage productDetails={productDetails} />
    </>
  );
};

export default SingleProduct;

// export async function generateStaticParams() {
//   const products = await getAllProducts();

//   return products.map((product) => ({
//     productId: product.id.toString(),
//   }));
// }

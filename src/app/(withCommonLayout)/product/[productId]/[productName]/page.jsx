import {
  getAllProducts,
  getSingleProduct,
} from "@/utils/ApiCall/productApicall";
import ProductDetailsPage from "./_ProductDetailsPage/ProductDetailsPage";

// eslint-disable-next-line @next/next/no-async-client-component
const SingleProduct = async ({ params }) => {
  try {
    const productDetails = await getSingleProduct(params.productId); // Log the product details

    return (
      <>
        <ProductDetailsPage productDetails={productDetails} />
      </>
    );
  } catch (error) {
    console.error("Error in SingleProduct component:", error);
    // Optionally handle the error state in your component, e.g., show an error message
    return (
      <div>
        <h1>Error loading product details</h1>
        <p>{error.message}</p>
      </div>
    );
  }
};

export default SingleProduct;

export async function generateStaticParams() {
  try {
    const products = await getAllProducts();
    return products.map((product) => ({
      productId: product.id.toString(),
    }));
  } catch (error) {
    console.error("Error generating static params:", error);
    // Optionally handle the error state
    return [];
  }
}

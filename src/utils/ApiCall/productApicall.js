import { backendUrl } from "../backendApiUrlProvider";

export const getAllProducts = async () => {
  const result = await fetch(`${backendUrl}/api/products`);
  return result.json();
};
export const getSingleProducts = async (id) => {
  const result = await fetch(`${backendUrl}/api/product/${id}`);
  return result.json();
};

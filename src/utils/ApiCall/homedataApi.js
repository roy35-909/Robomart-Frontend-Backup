import { backendUrl } from "../backendApiUrlProvider";

export const getHomeData = async () => {
  const result = await fetch(`${backendUrl}/api/home`);
  return await result.json();
};

export const getAllPartner = async () => {
  const result = await fetch(`${backendUrl}/api/our_supplier`);
  return await result.json();
};
export const getAllClient = async () => {
  const result = await fetch(`${backendUrl}/api/our_client`);
  return await result.json();
};
// export const getAllBlogs = async () => {
//   const result = await fetch(`${backendUrl}/blog/get_blog?page=1`);
//   const data = await result.json();
//   return data;
// };

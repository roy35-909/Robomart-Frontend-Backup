import { backendUrl } from "../backendApiUrlProvider";

export const getAllProducts = async () => {
  const result = await fetch(`${backendUrl}/api/products`);
  return result.json();
};
export const getSingleProducts = async (id) => {
  const result = await fetch(`${backendUrl}/api/product/${id}`);
  return result.json();
};

export const storeRecentViewProduct = (data) => {
  const cacheRecentView = localStorage.getItem("recentViewProducts");
  if (!cacheRecentView) {
    const recentArr = [];
    recentArr.push(data);
    localStorage.setItem("recentViewProducts", JSON.stringify(recentArr));
  } else {
    const pastRecentArr = JSON.parse(cacheRecentView);

    const checkDuplicateInput = cacheRecentView.includes(JSON.stringify(data));

    if (!checkDuplicateInput) {
      pastRecentArr.push(data);
      localStorage.setItem("recentViewProducts", JSON.stringify(pastRecentArr));
    }
  }
};

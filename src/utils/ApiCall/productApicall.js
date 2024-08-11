import { backendUrl } from "../backendApiUrlProvider";

export const getAllProducts = async () => {
  try {
    const result = await fetch(`${backendUrl}/api/products`, {
      next: {
        revalidate: 10,
      },
    });
    if (!result.ok) {
      throw new Error(`Error: ${result.statusText}`);
    }
    return await result.json();
  } catch (error) {
    console.error("Error fetching all products:", error);
    throw error;
  }
};

export const getSingleProduct = async (id) => {
  try {
    const result = await fetch(`${backendUrl}/api/product/${id}`);
    if (!result.ok) {
      throw new Error(`Error: ${result.statusText}`);
    }
    return await result.json();
  } catch (error) {
    console.error(`Error fetching product with id ${id}:`, error);
    throw error;
  }
};

export const storeRecentViewProduct = (data) => {
  if (typeof window !== "undefined") {
    const cacheRecentView = localStorage?.getItem("recentViewProducts");
    if (!cacheRecentView) {
      const recentArr = [];
      recentArr.push(data);
      localStorage.setItem("recentViewProducts", JSON.stringify(recentArr));
    } else {
      const pastRecentArr = JSON.parse(cacheRecentView);

      const checkDuplicateInput = pastRecentArr.some(
        (item) => JSON.stringify(item) === JSON.stringify(data)
      );

      if (!checkDuplicateInput) {
        pastRecentArr.push(data);
        localStorage.setItem(
          "recentViewProducts",
          JSON.stringify(pastRecentArr)
        );
      }
    }
  }
};

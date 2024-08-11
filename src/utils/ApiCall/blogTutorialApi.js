import { backendUrl } from "../backendApiUrlProvider";

// export const getAllTutorialData = async () => {
//   try {
//     const result = await fetch(`${backendUrl}/api/products`, {
//       next: {
//         revalidate: 10,
//       },
//     });
//     if (!result.ok) {
//       throw new Error(`Error: ${result.statusText}`);
//     }
//     return await result.json();
//   } catch (error) {
//     console.error("Error fetching all products:", error);
//     throw error;
//   }
// };

export const getSingleTutorialData = async (id) => {
  try {
    const result = await fetch(`${backendUrl}/blog/get_blog/${id}`);
    if (!result.ok) {
      throw new Error(`Error: ${result.statusText}`);
    }
    return await result.json();
  } catch (error) {
    console.error(`Error fetching product with id ${id}:`, error);
    throw error;
  }
};
export const getSingleCategoryTutorialData = async (id) => {
  try {
    const result = await fetch(
      `${backendUrl}/blog/get_all_blog_by_category/${id}`
    );
    if (!result.ok) {
      throw new Error(`Error: ${result.statusText}`);
    }
    return await result.json();
  } catch (error) {
    console.error(`Error fetching product with id ${id}:`, error);
    throw error;
  }
};
export const getSingleTagTutorialData = async (id) => {
  try {
    const result = await fetch(`${backendUrl}/blog/get_all_blog_by_tag/${id}`);
    if (!result.ok) {
      throw new Error(`Error: ${result.statusText}`);
    }
    return await result.json();
  } catch (error) {
    console.error(`Error fetching product with id ${id}:`, error);
    throw error;
  }
};

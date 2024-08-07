import CategoryWiseProductLoading from "@/components/Skeletons/Home/CategoryWiseProductLoading";
import { useGetHomeDataQuery } from "@/redux/api/api";
import { lazy, Suspense } from "react";

const SingleCategoryProducts = lazy(() => import("./SingleCategoryProducts"));

const CategoryProducts = () => {
  const { data: homeData, isLoading, isError } = useGetHomeDataQuery();

  return (
    <>
      {isLoading ? (
        <>
          <CategoryWiseProductLoading />
          <CategoryWiseProductLoading />
          <CategoryWiseProductLoading />
        </>
      ) : (
        <Suspense
          fallback={
            <div>
              {" "}
              <CategoryWiseProductLoading />
              <CategoryWiseProductLoading />
              <CategoryWiseProductLoading />
            </div>
          }
        >
          {" "}
          {homeData?.catagory?.map((category, idx) => (
            <SingleCategoryProducts
              key={idx}
              title={category?.name}
              id={category?.id}
              fetchProducts={category?.product}
            />
          ))}
        </Suspense>
      )}
    </>
  );
};

export default CategoryProducts;

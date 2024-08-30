"use client";
import CategoryWiseProductLoading from "@/components/Skeletons/Home/CategoryWiseProductLoading";
import { Grid } from "@mui/material";
import { lazy, Suspense, useState } from "react";
const SingleProductCard = lazy(() =>
  import("@/Shared/SingleProductCard/SingleProductCard")
);

const FilteredProductList = (productLoading, productList) => {
  const [isLoading] = useState(productLoading);
  console.log(productList);

  return (
    <>
      {isLoading ? (
        <CategoryWiseProductLoading />
      ) : (
        <Grid container spacing={2} paddingY={5}>
          <Suspense
            fallback={<div>{/* <CategoryWiseProductLoading /> */}</div>}
          >
            {productList?.map((product) => (
              <Grid
                item
                xs={6}
                sm={6}
                md={3}
                lg={3}
                xl={2}
                display={"flex"}
                justifyContent={"center"}
                key={product?.id}
              >
                <SingleProductCard product={product} />
              </Grid>
            ))}
          </Suspense>
        </Grid>
      )}
    </>
  );
};

export default FilteredProductList;

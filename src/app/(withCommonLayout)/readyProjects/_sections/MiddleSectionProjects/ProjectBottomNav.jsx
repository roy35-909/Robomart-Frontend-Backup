"use client";
import CategoryWiseProductLoading from "@/components/Skeletons/Home/CategoryWiseProductLoading";
import { useGetCategoryListProductsQuery } from "@/redux/api/api";
import { backendUrl } from "@/utils/backendApiUrlProvider";
import { Button, Grid, Skeleton } from "@mui/material";
import { lazy, Suspense, useEffect, useState } from "react";
const SingleProductCard = lazy(() =>
  import("@/Shared/SingleProductCard/SingleProductCard")
);
const ProjectBottomNav = () => {
  const [selectedTab, setSelectedTab] = useState("all");
  const [productLoading, setProductLoading] = useState(false);

  const {
    data: categoryList,
    isLoading,
    isError,
  } = useGetCategoryListProductsQuery();

  const [data, setData] = useState([]);

  const [productList, setProductList] = useState([]);

  useEffect(() => {
    categoryList?.map((category) => {
      if (category?.id === 2) {
        setData(category?.sub_category);
      }
    });
  }, [categoryList]);
  const setAllProduct = () => {
    setSelectedTab("all");
    fetch(`${backendUrl}/api/catagory/${2}/category`)
      .then((res) => res.json())
      .then((data) => setProductList(data));
  };
  useEffect(() => {
    setAllProduct();
  }, []);
  useEffect(() => {
    fetch(`${backendUrl}/api/catagory/${selectedTab}/subcategory`)
      .then((res) => res.json())
      .then((data) => setProductList(data));
  }, [selectedTab]);

  if (isLoading) {
    return (
      <>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Skeleton width={80} height={50} sx={{ marginRight: "2px" }} />
          <Skeleton width={80} height={50} sx={{ marginX: "2px" }} />
          <Skeleton width={80} height={50} sx={{ marginX: "2px" }} />
          <Skeleton width={80} height={50} sx={{ marginX: "2px" }} />
        </div>
        <div>
          <CategoryWiseProductLoading />
        </div>
      </>
    );
  }
  return (
    <div>
      <div
        style={{
          marginBottom: "10px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div>
          {data?.length > 0 && (
            <Button
              size={"small"}
              onClick={() => setAllProduct()}
              key={"all"}
              variant={selectedTab === "all" ? "contained" : "outlined"}
              sx={{
                marginX: "2px",
                color: `${
                  selectedTab === "all" ? "white" : "var(--primaryColor)"
                }`,
                backgroundColor: `${
                  selectedTab === "all" ? "var(--primaryColor)" : ""
                }`,
                borderColor: "var(--primaryColor)",
                "&:hover": {
                  backgroundColor: "var(--primaryColor)",
                  color: "white",
                },
              }}
            >
              All
            </Button>
          )}
          {data?.map((scat, idx) => (
            <>
              <Button
                size={"small"}
                onClick={() => setSelectedTab(scat?.id)}
                key={scat?.id}
                variant={selectedTab === scat?.id ? "contained" : "outlined"}
                sx={{
                  marginX: "2px",
                  color: `${
                    selectedTab === scat?.id ? "white" : "var(--primaryColor)"
                  }`,
                  backgroundColor: `${
                    selectedTab === scat?.id ? "var(--primaryColor)" : ""
                  }`,
                  borderColor: "var(--primaryColor)",
                  "&:hover": {
                    backgroundColor: "var(--primaryColor)",
                    color: "white",
                  },
                }}
              >
                {scat?.name}
              </Button>
            </>
          ))}
        </div>
      </div>

      
      <Grid container spacing={2} paddingY={5}>
        <Suspense fallback={<div>{/* <CategoryWiseProductLoading /> */}</div>}>
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
    </div>
  );
};

export default ProjectBottomNav;

import {
  Box,
  CircularProgress,
  Divider,
  Grid,
  Pagination,
  Typography,
} from "@mui/material";
import { lazy, Suspense, useEffect, useState } from "react";
const SingleProductCard = lazy(() =>
  import("@/Shared/SingleProductCard/SingleProductCard")
);

import AllCategorySideMenu from "@/Shared/AllCategoryListSideMenu/AllCategorySideMenu";
import { useGetCategoryListProductsQuery } from "@/redux/api/api";
import { backendUrl } from "@/utils/backendApiUrlProvider";

const SubCategoryProducts = ({ params }) => {
  const {
    data: categoryList,
    isLoading: catLoading,
    isError,
  } = useGetCategoryListProductsQuery();
  const [isLoading, setIsLoading] = useState(false);
  const [categoryProducts, setCategoryProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(50); // Set the number of items per page

  useEffect(() => {
    setIsLoading(true);
    fetch(`${backendUrl}/api/catagory/${params.subCategoryId}/subcategory`)
      .then((res) => res.json())
      .then((data) => {
        setCategoryProducts(data);
        setIsLoading(false);
      });
  }, [params]);

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = categoryProducts.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      {" "}
      <Grid container sx={{ backgroundColor: "#f2f2f2", minHeight: "80vh" }}>
        <Grid item xs={2} padding={2} hidden={{ xs: true }}>
          {categoryList && <AllCategorySideMenu category={categoryList} />}
        </Grid>
        <Grid item xs={10}>
          <Typography marginTop={3} variant="h6" fontFamily={"Poppins"}>
            {params?.subCategoryName.replace(/ /g, "_")} :
          </Typography>
          <Divider />
          {isLoading && <CircularProgress />}

          <Box paddingY={1} marginY={1}>
            <Box paddingY={2} display={"flex"} justifyContent={"space-around"}>
              <Grid container spacing={2}>
                <Suspense
                  fallback={<div>{/* <CategoryWiseProductLoading /> */}</div>}
                >
                  {currentItems?.length > 0 &&
                    !isLoading &&
                    currentItems?.map((product) => (
                      <Grid
                        item
                        xs={6}
                        sm={6}
                        md={3}
                        lg={3}
                        xl={2}
                        display={"flex"}
                        justifyContent={"center"}
                        key={product.id}
                      >
                        <SingleProductCard product={product} />
                      </Grid>
                    ))}
                </Suspense>
              </Grid>
            </Box>
          </Box>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Pagination
              color="success"
              count={Math.ceil(categoryProducts.length / itemsPerPage)}
              page={currentPage}
              onChange={(event, page) => paginate(page)}
            />
          </div>
        </Grid>
      </Grid>
      <hr style={{ color: "#e2e2e2" }} />
    </div>
  );
};

export default SubCategoryProducts;

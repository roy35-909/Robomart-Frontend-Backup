"use client";

import AllCategorySideMenu from "@/Shared/AllCategoryListSideMenu/AllCategorySideMenu";
import CategoryWiseProductLoading from "@/components/Skeletons/Home/CategoryWiseProductLoading";
import { useGetCategoryListProductsQuery } from "@/redux/api/api";
import {
  Box,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  Typography,
} from "@mui/material";
import { lazy, Suspense, useState } from "react";
const SingleProductCard = lazy(() =>
  import("@/Shared/SingleProductCard/SingleProductCard")
);

const SingleCategoryProducts = ({ data, params }) => {
  const {
    data: categoryList,
    isLoading: catLoading,
    isError,
  } = useGetCategoryListProductsQuery();
  const [isLoading, setIsLoading] = useState(false);
  const [categoryProducts, setCategoryProducts] = useState(
    data?.length > 0 ? data : []
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemPerPage] = useState(50); // Set the number of items per page

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems =
    categoryProducts?.length > 0 &&
    categoryProducts.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const handleChange = (e) => {
    setItemPerPage(e.target.value);
  };
  return (
    <div>
      <Grid
        container
        sx={{ backgroundColor: "#f2f2f2", minHeight: "80vh" }}
        display={"flex"}
        justifyContent={"center"}
      >
        <Grid item xs={2} padding={2} hidden={{ xs: true }}>
          {categoryList && <AllCategorySideMenu category={categoryList} />}
        </Grid>
        <Grid item xs={12} sm={12}>
          {isLoading ? (
            <CategoryWiseProductLoading />
          ) : (
            <>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{marginX:"5px"}}>
                  <Typography marginTop={3} variant="h6" fontFamily={"Poppins"}>
                    {decodeURIComponent(params?.categoryName)} :
                  </Typography>
                </div>
                <FormControl
                  sx={{
                    marginTop: "10px",
                    width: "90px",
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "var(--primaryColor)", // Default border color
                      },
                      "&:hover fieldset": {
                        borderColor: "var(--primaryColor)", // Border color when hovering
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "var(--primaryColor)", // Border color when focused
                      },
                    },
                    "& label.Mui-focused": {
                      color: "var(--primaryColor)", // Label color when focused
                    },
                  }}
                >
                  <InputLabel id="demo-simple-select-label">Items</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={itemsPerPage}
                    label="Items"
                    onChange={handleChange}
                    size="small"
                  >
                    <MenuItem value={50}>50</MenuItem>
                    <MenuItem value={100}>100</MenuItem>
                    <MenuItem value={150}>150</MenuItem>
                    <MenuItem value={200}>200</MenuItem>
                  </Select>
                </FormControl>
              </div>

              <Divider />
              <Box paddingY={1} marginY={1}>
                {categoryProducts?.length == 0 && !isLoading && (
                  <Typography
                    marginTop={3}
                    variant="h6"
                    textAlign={"center"}
                    fontFamily={"Poppins"}
                  >
                    No products
                  </Typography>
                )}
                <Box
                  paddingY={2}
                  display={"flex"}
                  justifyContent={"space-around"}
                >
                  <Grid container spacing={2}>
                    <Suspense
                      fallback={
                        <div>{/* <CategoryWiseProductLoading /> */}</div>
                      }
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
            </>
          )}

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "5vh 0",
            }}
          >
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

export default SingleCategoryProducts;

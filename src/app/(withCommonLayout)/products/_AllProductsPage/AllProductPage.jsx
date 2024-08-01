import AllCategorySideMenu from "@/Shared/AllCategoryListSideMenu/AllCategorySideMenu";
import PartnerClientSkeleton from "@/components/Skeletons/Home/PartnerClientSkeleton";
import { useGetCategoryListProductsQuery } from "@/redux/api/api";
import { Container, Grid } from "@mui/material";
import { lazy, Suspense } from "react";
import AllProductsSection from "./Components/AllProductsSection/AllProductsSection";
const CategorySection = lazy(() =>
  import("./Components/CategorySection/CategorySection")
);

const AllProductPage = () => {
  const {
    data: categoryList,
    isLoading,
    isError,
  } = useGetCategoryListProductsQuery();

  return (
    <div>
      <Grid container>
        <Grid item xs={12} sm={12} md={2} padding={2} paddingTop={0}>
          <AllCategorySideMenu category={categoryList} />
        </Grid>
        <Grid item xs={12} sm={12} md={10} paddingY={2}>
          <Container maxWidth="xxl" sx={{ borderLeft: "1px solid #f2f2f2" }}>
            {isLoading ? (
              <>
                <PartnerClientSkeleton />
              </>
            ) : (
              <Suspense fallback={"Loading"}>
                <CategorySection categoryList={categoryList} />
              </Suspense>
            )}

            <AllProductsSection />
          </Container>
        </Grid>
      </Grid>
    </div>
  );
};

export default AllProductPage;

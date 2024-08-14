"use client";
import BottomPagination from "@/app/(withCommonLayout)/tutorials/_AllTutorials/Components/PaginationsFilter/BottomPagination/BottomPagination";
import PaginationFilter from "@/app/(withCommonLayout)/tutorials/_AllTutorials/Components/PaginationsFilter/PaginationFilter";
import SingleTutorialCard from "@/app/(withCommonLayout)/tutorials/_AllTutorials/Components/Tutorial_Card/SingleTutorialCard";
import TutorialCategoryNav from "@/app/(withCommonLayout)/tutorials/_AllTutorials/Components/TutorialCategoryNav/TutorialCategoryNav";
import CategoryWiseProductLoading from "@/components/Skeletons/Home/CategoryWiseProductLoading";
import { backendUrl } from "@/utils/backendApiUrlProvider";
import { Container, Divider, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const AllBlogsPage = () => {
  const [load, setLoad] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(30);
  const [blogsData, setBlogsData] = useState([]);

  /* pagination value */
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  /* get tutorials data  */

  const getBlogsData = async () => {
    setLoad(true);
    const dataToDb = await fetch(
      `${backendUrl}/blog/get_blog?page=${currentPage}`
    );
    const result = await dataToDb.json();
    if (result?.results) {
      setLoad(false);
    }

    setBlogsData(result?.results);
  };

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = blogsData?.slice(indexOfFirstItem, indexOfLastItem);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    getBlogsData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  return (
    <div style={{ minHeight: "70vh" }}>
      <Container maxWidth={"xl"}>
        <Typography
          variant="h5"
          style={{
            fontFamily: "Poppins",
            fontWeight: "bold",
            textAlign: "center",
            paddingTop: "3vh",
          }}
        >
          {" "}
          Robomart BD Blogs
        </Typography>
      </Container>
      <Divider style={{ borderColor: "#e2e2e2" }} />
      {/* search Bar */}
      <div style={{ backgroundColor: "#F7F7F7", padding: "10vh 0vh 5vh 0vh" }}>
        <p style={{ textAlign: "center" }}>
          <Typography
            variant="title1"
            style={{
              fontFamily: "Poppins",
              fontWeight: "bold",
              textAlign: "center",
              padding: "3vh 0",
            }}
          >
            {" "}
            Choose your favorite category
          </Typography>
        </p>
        <Container maxWidth={"xl"}>
          {/* <TutorialSearchBar /> */}

          {/* Category Nav */}
          <TutorialCategoryNav />
        </Container>
      </div>
      <Divider style={{ borderColor: "#e2e2e2" }} />

      {load ? (
        <CategoryWiseProductLoading />
      ) : (
        <>
           {" "}
          {/* Pagination and tags */}
          <Container maxWidth={"xl"}>
            <PaginationFilter
              handlePageChange={handlePageChange}
              totalPages={Math.ceil(blogsData?.length / itemsPerPage)}
              page={currentPage}
            />
          </Container>
          {/* blogs */}
          <Container maxWidth="xl" style={{ padding: "5vh 0" }}>
            <Grid container spacing={2} padding={1}>
              {/* {load && <CircularProgress />} */}
              {!load && blogsData?.length == 0 && <h5>No tutorials </h5>}
              {currentItems?.length &&
                currentItems?.map((tutorial, idx) => (
                  <Grid key={idx} item xs={6} sm={6} md={4} lg={3}>
                    <SingleTutorialCard tutorial={tutorial} />
                  </Grid>
                ))}
            </Grid>
          </Container>
        </>
      )}

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "2vh 0",
        }}
      >
        <BottomPagination
          handlePageChange={handlePageChange}
          totalPages={Math.ceil(blogsData?.length / itemsPerPage)}
          page={currentPage}
        />
      </div>
    </div>
  );
};

export default AllBlogsPage;

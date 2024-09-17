"use client";
import SingleProjectCard from "@/Shared/SingleProductCard/SingleProjectCard";
import { backendUrl } from "@/utils/backendApiUrlProvider";
import { Container, Grid } from "@mui/material";
import { lazy, Suspense, useEffect, useState } from "react";

const SingleProductCard = lazy(() =>
  import("@/Shared/SingleProductCard/SingleProductCard")
);
const AllProjects = () => {
  const [data, setData] = useState([]);
  const [productLoading, setProductLoading] = useState(true);
  useEffect(() => {
    fetch(`${backendUrl}/api/catagory/${12}/category`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setProductLoading(false);
      });
  }, []);
  return (
    <div>
      <Container maxWidth={"xl"}>
        <Grid container spacing={2} paddingY={5}>
          <Suspense fallback={<div></div>}>
            {data?.map((product) => (
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                lg={4}
                xl={4}
                display={"flex"}
                justifyContent={"center"}
                key={product?.id}
              >
                <SingleProjectCard product={product} />
              </Grid>
            ))}
          </Suspense>
        </Grid>
      </Container>
    </div>
  );
};

export default AllProjects;

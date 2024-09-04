"use client";
import CategoryWiseProductLoading from "@/components/Skeletons/Home/CategoryWiseProductLoading";
import { useGetAllProductsQuery } from "@/redux/api/api";
import SingleProductCard from "@/Shared/SingleProductCard/SingleProductCard";
import { Container, Divider, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import styles from "./ProductSearch.module.scss";

export default function ProductSearch({ searchTerm }) {
  const [loading, setLoading] = useState(false);
  // const [data, setData] = useState(retrieveAndDecryptData());
  const { data, isLoading, isError } = useGetAllProductsQuery();
  const [products, setProducts] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    setLoading(true);
    const filteredSuggestions = data?.filter((product) =>
      product?.name?.toLowerCase().includes(searchTerm?.toLowerCase())
    );
    setProducts(filteredSuggestions);
    if (data) {
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data,searchTerm]);

  return (
    <div style={{ minHeight: "70vh" }}>
      <Container maxWidth>
        <Typography
          variant="h5"
          style={{ textAlign: "center", paddingTop: "3vh" }}
        >
          Your desired products for:{" "}
          <span style={{ fontWeight: "bold" }}>{searchTerm}</span>
        </Typography>
        <Divider />

        {loading ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CategoryWiseProductLoading />
          </div>
        ) : (
          <>
            {products?.length === 0 && !loading && (
              <Typography
                variant="h5"
                style={{ textAlign: "center", padding: "5vh 0" }}
              >
                No result found
              </Typography>
            )}

            <Grid container spacing={2} paddingY={3}>
              {products?.map((product) => (
                <React.Fragment key={product.id}>
                  <Grid
                    item
                    xs={6}
                    sm={6}
                    md={3}
                    lg={2}
                    xl={2}
                    display={"flex"}
                    justifyContent={"center"}
                    className={styles.item_small_screen}
                  >
                    <SingleProductCard product={product} />
                  </Grid>
                  <Grid
                    item
                    style={{ display: "block" }}
                    className={styles.item_big_screen}
                  >
                    <SingleProductCard product={product} />
                  </Grid>
                </React.Fragment>
              ))}
            </Grid>
          </>
        )}
      </Container>
    </div>
  );
}

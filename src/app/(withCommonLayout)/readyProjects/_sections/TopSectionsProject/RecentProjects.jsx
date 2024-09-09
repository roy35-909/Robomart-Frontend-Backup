"use client";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./recentProject.module.scss";
export default function RecentProjects() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const productsData = localStorage.getItem("recentProjectsView");
    const parseData = JSON.parse(productsData);
    const reverseData = parseData?.reverse();
    setData(reverseData);
  }, []);
  return (
    <>
      {data?.map((product) => (
        <>
          <Card sx={{ display: "flex", margin: "5px" }} disableElevation>
            <Link
              href={`/product/${product?.id}/${encodeURIComponent(
                product?.name
              )}`}
            >
              {" "}
              <CardMedia
                component="img"
                sx={{ width: "70px", height: "70px" }}
                image={`${
                  product?.photo ? product?.photo : "/assets/no-img.jpg"
                }`}
                alt="Live from space album cover"
              />
            </Link>

            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Link
                  href={`/product/${product?.id}/${encodeURIComponent(
                    product?.name
                  )}`}
                  
                  className={`${styles.link}`}
                >
                  <Typography component="div" variant="subtitle1">
                    {product?.name.slice(0,80)}...
                  </Typography>
                </Link>
              </CardContent>
            </Box>
          </Card>
        </>
      ))}
    </>
  );
}

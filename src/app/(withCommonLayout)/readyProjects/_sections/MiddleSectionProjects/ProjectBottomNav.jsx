"use client";
import { useGetCategoryListProductsQuery } from "@/redux/api/api";
import { Button, Skeleton } from "@mui/material";
import { useEffect, useState } from "react";
const ProjectBottomNav = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const {
    data: categoryList,
    isLoading,
    isError,
  } = useGetCategoryListProductsQuery();

  const [data, setData] = useState([]);
  useEffect(() => {
    categoryList?.map((category) => {
      if (category?.id === 12) {
        setData(category?.sub_category);
      }
    });
  }, [categoryList]);
  if (isLoading) {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Skeleton width={80} height={50} sx={{ marginRight: "2px" }} />
        <Skeleton width={80} height={50} sx={{ marginX: "2px" }} />
        <Skeleton width={80} height={50} sx={{ marginX: "2px" }} />
        <Skeleton width={80} height={50} sx={{ marginX: "2px" }} />
      </div>
    );
  }
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>
          {data?.map((scat, idx) => (
            <Button
              size={"small"}
              onClick={() => setSelectedTab(idx)}
              key={scat?.id}
              variant="outlined"
              sx={{
                marginX: "2px",
                color: `${
                  selectedTab === idx ? "white" : "var(--primaryColors)"
                }`,
                backgroundColor: `${
                  selectedTab === idx ? "var(--primaryColors)" : ""
                }`,
                borderColor: "var(--primaryColor)",
              }}
            >
              {scat?.name}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectBottomNav;

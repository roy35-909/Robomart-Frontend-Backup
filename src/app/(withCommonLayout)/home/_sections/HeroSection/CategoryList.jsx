import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useState } from "react";

import styles from "./Hero.module.scss";
import SingleListItem from "./SingleListItem";
import { useRouter } from "next/navigation";
import { useGetHomeDataQuery } from "@/redux/api/api";
const CategoryList = () => {
  const [toggle, setToggle] = useState(false);
  const { data: homeData1, isLoading: homeLoading } = useGetHomeDataQuery();
  const router = useRouter();


  const handleNavigation = (id) => {
    router.push(`/products/categories/${id}`);
  };

  return (
    <>
      <Box
        className={styles.categoryList}
        sx={{
          width: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
          borderRadius: "10px",
          boxShadow: "2px 1px 25px #e9e9e9",
        }}
      >
        <div style={{ backgroundColor: "var(--primaryColor)" }}>
          <h2
            style={{
              marginLeft: "1rem",
              padding: "10px 0",
              fontFamily: "Roboto",
              fontWeight: "bold",
            }}
          >
            Categories
          </h2>
        </div>

        <div>
          <List component="nav">
            {homeData1?.catagorylist?.slice(0, 7)?.map((category) => (
              <SingleListItem
                key={"a"}
                category={category}
                setToggle={setToggle}
                toggle={toggle}
              />
            ))}

            {/* Add more categories and subcategories */}
            <ListItemButton>
              <ListItemText
                style={{ textAlign: "center" }}
                primary="View all"
              />
            </ListItemButton>
          </List>
        </div>
        <Divider />
      </Box>
    </>
  );
};

export default CategoryList;

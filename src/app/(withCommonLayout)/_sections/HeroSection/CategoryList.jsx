import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useEffect, useState } from "react";

import { useRouter } from "next/navigation";
import styles from "./Hero.module.scss";
import SingleListItem from "./SingleListItem";
const CategoryList = async () => {
  const [toggle, setToggle] = useState(false);
  // const homeData1 = await getHomeData();
  const { data: homeData1, isLoading: homeLoading } = useGetHomeDataQuery();
  const router = useRouter();
  const [sliceCount, setSliceCount] = useState(7);

  const handleNavigation = (id) => {
    router.push(`/products/categories/${id}`);
  };

  useEffect(() => {
    // Function to handle screen resize
    const handleResize = () => {
      if (window.innerWidth < 1300) {
        setSliceCount(5);
      } else {
        setSliceCount(10);
      }
    };

    // Set the initial slice count based on the current window width
    handleResize();

    // Add event listener to handle window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
            {homeData1?.catagorylist?.slice(0, sliceCount)?.map((category) => (
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

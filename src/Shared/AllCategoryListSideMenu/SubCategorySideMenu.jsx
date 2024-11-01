import { useGetHomeDataQuery } from "@/redux/api/api";
import { List, ListItemButton, Skeleton } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "./CategorySideMenu.module.scss";
const SubCategorySideMenu = ({ items }) => {
  const router = useRouter();

  const navigateToSubcategory = (path) => {
    router.push(`/${path}`);
  };

  

  return (
    <List
      sx={{
        width: "100%",
        position: "absolute",
        top: 0,
        left: "100%",
        display: "none",
      }}
      className={styles.sub_menu}
    >
      {items?.map((item, index) => (
        <ListItemButton key={index} className={styles.sub_menu_item}>
          <Link
            href={`/products/scategories/${item?.id}/${item?.name?.replace(
              / /g,
              "_"
            )}`}
            style={{ textDecoration: "none", color: "black" }}
            className={styles.subMenuName}
          >
            {item?.name}
          </Link>
        </ListItemButton>
      ))}
    </List>
  );
};

export default SubCategorySideMenu;

import ContactMailIcon from "@mui/icons-material/ContactMail";
import HomeIcon from "@mui/icons-material/Home";
import PlayLessonIcon from "@mui/icons-material/PlayLesson";
import RssFeedSharpIcon from "@mui/icons-material/RssFeedSharp";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import StorefrontIcon from "@mui/icons-material/Storefront";
import { Box } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./PageNavigation.module.scss";
const PageNavigationBar = () => {
  const pathname = usePathname();

  return (
    <Box
      id="page-menu"
      className={styles.navigationMenu_wrapper}
      sx={{}}
      display={`flex`}
      justifyContent={`space-center`}
      alignItems={`center`}
    >
      <Link
        href={`/`}
        className={`${
          pathname === "/home" || pathname === "/home" ? styles.activeRoute : ""
        } ${styles.navigationMenu_Item}`}
      >
        <HomeIcon /> <span>Home</span>
      </Link>
      <Link
        href="/products"
        className={`${pathname === "/products" ? styles.activeRoute : ""} ${
          styles.navigationMenu_Item
        }`}
      >
        <StorefrontIcon /> <span> Shop </span>
      </Link>
      <Link
        href="/tutorials"
        className={`${pathname === "/tutorials" ? styles.activeRoute : ""} ${
          styles.navigationMenu_Item
        }`}
      >
        <PlayLessonIcon /> <span>Tutorials</span>
      </Link>
      <Link
        href="/blogs"
        className={`${pathname === "/blogs" ? styles.activeRoute : ""} ${
          styles.navigationMenu_Item
        }`}
      >
        <RssFeedSharpIcon /> <span> Blog</span>
      </Link>
      <Link
        href="/contact_us"
        className={`${pathname === "/contact_us" ? styles.activeRoute : ""} ${
          styles.navigationMenu_Item
        }`}
      >
        <>
          <ContactMailIcon />{" "}
          <span style={{ marginLeft: "5px" }}> Contact</span>
        </>
      </Link>
      <Link
        href="/readyProjects"
        className={`${
          pathname === "/readyProjects" ? styles.activeRoute : ""
        } ${styles.navigationMenu_Item}`}
      >
        <>
          <SmartToyIcon /> <span style={{ marginLeft: "5px" }}> Projects </span>
        </>
      </Link>
    </Box>
  );
};

export default PageNavigationBar;

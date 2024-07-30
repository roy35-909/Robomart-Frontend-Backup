import ContactMailIcon from "@mui/icons-material/ContactMail";
import HomeIcon from "@mui/icons-material/Home";
import PlayLessonIcon from "@mui/icons-material/PlayLesson";
import RssFeedSharpIcon from "@mui/icons-material/RssFeedSharp";
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
        passHref
        className={`${
          pathname === "/" || pathname === "/home" ? styles.activeRoute : ""
        } ${styles.navigationMenu_Item}`}
      >
        <HomeIcon /> <span>Home</span>
      </Link>
      <Link
        href="/products"
        passHref
        className={`${pathname === "/products" ? styles.activeRoute : ""} ${
          styles.navigationMenu_Item
        }`}
      >
        <StorefrontIcon /> <span> Shop </span>
      </Link>
      <Link
        href="/tutorials"
        passHref
        className={`${pathname === "/tutorials" ? styles.activeRoute : ""} ${
          styles.navigationMenu_Item
        }`}
      >
        <PlayLessonIcon /> <span>Tutorials</span>
      </Link>
      <Link
        href="/blogs"
        passHref
        className={`${pathname === "/blogs" ? styles.activeRoute : ""} ${
          styles.navigationMenu_Item
        }`}
      >
        <RssFeedSharpIcon /> <span> Blog</span>
      </Link>
      <Link
        href="/contact_us"
        passHref
        className={`${pathname === "/contact_us" ? styles.activeRoute : ""} ${
          styles.navigationMenu_Item
        }`}
      >
        <>
          <ContactMailIcon />{" "}
          <span style={{ marginLeft: "5px" }}> Contact</span>
        </>
      </Link>
    </Box>
  );
};

export default PageNavigationBar;

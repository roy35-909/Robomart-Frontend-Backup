import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import CloseIcon from "@mui/icons-material/Close";
import LoginIcon from "@mui/icons-material/Login";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
} from "@mui/material";
import { useState } from "react";

import Link from "next/link";
import { useGetUserQuery } from "../../../redux/api/api";
import styles from "./MobileNavigation.module.scss";

const NavigationDrawer = () => {
  const { data: userData, isLoading, isError } = useGetUserQuery();

  const [open, setOpen] = useState();
  const [isSearchTrigger, setIsSearchTrigger] = useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      <IconButton variant="text" onClick={toggleDrawer} sx={{ color: "white" }}>
        <MenuIcon sx={{ fontWeight: "bold", fontSize: "35px" }} />{" "}
      </IconButton>
      <Drawer anchor="right" open={open} onClose={toggleDrawer}>
        <List className={styles.drawerList}>
          <ListItem sx={{ borderBottom: "1px solid gray" }}>
            <Button
              onClick={toggleDrawer}
              startIcon={<CloseIcon />}
              sx={{ width: "100%" }}
              variant="contained"
              className={styles.searchBtn}
              disableElevation
            >
              Close
            </Button>
            <Divider />
          </ListItem>

          <ListItem
            sx={{ borderBottom: "1px solid #cfcfcfdb" }}
            className={styles.drawerListItem}
            onClick={toggleDrawer}
          >
            <Link href={"/shopping-cart"} className={styles.iLink}>
              <ShoppingCartIcon />
              Cart
            </Link>
          </ListItem>

          <ListItem
            sx={{ borderBottom: "1px solid #cfcfcfdb" }}
            className={styles.drawerListItem}
            onClick={toggleDrawer}
          >
            <Link href={"/auth/login"} className={styles.iLink}>
              <LoginIcon />
              Login
            </Link>
          </ListItem>
          <ListItem
            sx={{ borderBottom: "1px solid #cfcfcfdb" }}
            className={styles.drawerListItem}
            onClick={toggleDrawer}
          >
            <Link href={"/auth/register"} className={styles.iLink}>
              <AppRegistrationIcon />
              Register
            </Link>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default NavigationDrawer;

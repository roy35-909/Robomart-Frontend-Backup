// "use client";
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const AvaterBtnMeny = ({ data }) => {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleLogout = () => {
    handleCloseUserMenu();
    localStorage.clear();
    router.push("/");
    window.location.reload();
  };

  const handleSearch = () => {
    // Add your search logic here
    navigate(`/products/search=/${query}`);
    handleCloseUserMenu();
    setQuery("");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <>
      <Box sx={{ flexGrow: 0 }}>
        <Tooltip title={`Your dashboard`}>
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <Avatar alt="Remy Sharp" style={{ backgroundColor: "black" }} />
          </IconButton>
        </Tooltip>
        <br />
        <small style={{ color: "black", fontFamily: "Poppins" }}>
          {data && data?.first_name}
        </small>
        <Menu
          sx={{ mt: "45px" }}
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          <Link
            href="/dashboard/user/profile"
            style={{ textDecoration: "none", color: "black" }}
          >
            <MenuItem onClick={handleCloseUserMenu}>
              <Typography textAlign="center">Profile</Typography>
            </MenuItem>
          </Link>
          <Divider />
          <Link
            href="/shopping-cart"
            style={{ textDecoration: "none", color: "black" }}
          >
            <MenuItem onClick={handleCloseUserMenu}>
              <Typography textAlign="center">Go to Cart</Typography>
            </MenuItem>
          </Link>
          <Divider />
          <Link
            href="/dashboard/user/order_history"
            style={{ textDecoration: "none", color: "black" }}
          >
            <MenuItem onClick={handleCloseUserMenu}>
              <Typography textAlign="center">Order History</Typography>
            </MenuItem>
          </Link>
          <Divider />

          <MenuItem onClick={handleLogout}>
            <Typography textAlign="center">Logout</Typography>
          </MenuItem>
          <Divider />
        </Menu>
      </Box>
    </>
  );
};

export default AvaterBtnMeny;

"use client";
import HomeIcon from "@mui/icons-material/Home";
import PlayLessonIcon from "@mui/icons-material/PlayLesson";
import RssFeedSharpIcon from "@mui/icons-material/RssFeedSharp";
import StoreIcon from "@mui/icons-material/Store";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";

import SmartToyIcon from "@mui/icons-material/SmartToy";
const MobileNavigation = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleNavigation = (link) => {
    router.push(`${link}`);
  };

  return (
    <>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 100 }}
        elevation={3}
        className="mobile-bottom-navigation"
      >
        <BottomNavigation
          style={{ backgroundColor: "var(--primaryColor)" }}
          showLabels
        >
          <BottomNavigationAction
            onClick={() => handleNavigation("/home")}
            sx={{
              color: "white",
              fontSize: "20px",
              borderRight: "1px solid #78bd68",
              transition: "all 0.1s ease-in-out",
              border: pathname === "/home" ? "1px solid #e2e2e2" : "",
              backgroundColor: pathname === "/home" ? "black" : "",
              borderRadius: pathname === "/home" ? "5px" : "",
              borderBottom: "none",
            }}
            label="Home"
            icon={<HomeIcon />}
          />
          <BottomNavigationAction
            onClick={() => handleNavigation("/products")}
            sx={{
              color: "white",
              fontSize: "20px",
              borderRight: "1px solid #78bd68",
              borderLeft: "1px solid #53ad3f",
              transition: "all 0.1s ease-in-out",
              border: pathname === "/products" ? "1px solid #e2e2e2" : "",
              backgroundColor: pathname === "/products" ? "black" : "",
              borderRadius: pathname === "/products" ? "5px" : "",
              borderBottom: "none",
            }}
            label="Shop"
            icon={<StoreIcon />}
          />
          <BottomNavigationAction
            onClick={() => handleNavigation("/readyProjects")}
            sx={{
              color: "white",
              fontSize: "20px",
              borderRight: "1px solid #78bd68",
              borderLeft: "1px solid #53ad3f",
              transition: "all 0.1s ease-in-out",
              border: pathname === "/products" ? "1px solid #e2e2e2" : "",
              backgroundColor: pathname === "/readyProjects" ? "black" : "",
              borderRadius: pathname === "/readyProjects" ? "5px" : "",
              borderBottom: "none",
            }}
            label="Projects"
            icon={<SmartToyIcon />}
          />

          <BottomNavigationAction
            onClick={() => handleNavigation("/tutorials")}
            sx={{
              color: "white",
              fontSize: "20px",
              borderRight: "1px solid #78bd68",
              borderLeft: "1px solid #53ad3f",
              transition: "all 0.1s ease-in-out",
              border: pathname === "/tutorials" ? "1px solid #e2e2e2" : "",
              backgroundColor: pathname === "/tutorials" ? "black" : "",
              borderRadius: pathname === "/tutorials" ? "5px" : "",
              borderBottom: "none",
            }}
            label="Tutorial"
            icon={<PlayLessonIcon />}
          />

          <BottomNavigationAction
            onClick={() => handleNavigation("/blogs")}
            sx={{
              color: "white",
              fontSize: "20px",
              borderLeft: "1px solid #53ad3f",
              transition: "all 0.1s ease-in-out",
              border: pathname === "/blogs" ? "1px solid #e2e2e2" : "",
              backgroundColor: pathname === "/blogs" ? "black" : "",
              borderRadius: pathname === "/blogs" ? "5px" : "",
              borderBottom: "none",
            }}
            label="Blogs"
            icon={<RssFeedSharpIcon />}
          />
        </BottomNavigation>
      </Paper>
    </>
  );
};

export default MobileNavigation;

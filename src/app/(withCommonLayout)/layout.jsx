"use client";

import store from "@/redux/store";
import Footer from "@/Shared/Footer/Footer";
import MobileNavigation from "@/Shared/NavigationBars/MobileNavigationBar/MobileNavigation";
import MobileTopNavigation from "@/Shared/NavigationBars/MobileNavigationBar/MobileTopNavigation";
import NavigationBar from "@/Shared/NavigationBars/NavigationBar";
import ScrollToTop from "@/utils/ScrollToTop";
import { CircularProgress } from "@mui/material";
import { usePathname } from "next/navigation";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";

const CommonLayout = ({ children }) => {
  const pathName = usePathname();
  const canonicalUrl = `https://www.mywebsite.com${pathName}`;

  return (
    <>
      <Provider store={store}>
        <NavigationBar />
        <MobileTopNavigation />
        <Toaster />
        <ScrollToTop />
        <div style={{ minHeight: "100vh" }}>
          {children ? children : <CircularProgress />}
        </div>

        <Footer />
        <MobileNavigation />
      </Provider>
    </>
  );
};

export default CommonLayout;

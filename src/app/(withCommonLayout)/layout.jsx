"use client";

import Footer from "@/Shared/Footer/Footer";
import MobileNavigation from "@/Shared/NavigationBars/MobileNavigationBar/MobileNavigation";
import MobileTopNavigation from "@/Shared/NavigationBars/MobileNavigationBar/MobileTopNavigation";
import NavigationBar from "@/Shared/NavigationBars/NavigationBar";
import ScrollToTop from "@/utils/ScrollToTop";
import { Toaster } from "react-hot-toast";

const CommonLayout = ({ children }) => {
  return (
    <>
      <NavigationBar />
      <MobileTopNavigation />
      <Toaster />
      <ScrollToTop />
      {children}
      <Footer />
      <MobileNavigation />
    </>
  );
};

export default CommonLayout;

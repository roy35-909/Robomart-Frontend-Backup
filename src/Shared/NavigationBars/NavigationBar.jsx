"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import CommonNavigation from "./CommonNavigationBar/CommonNavigation";
import HeroNavigation from "./HeroNavigationBar/HeroNavigation";
export const metadata = {
  title: "RobomartBD-Home",
  description:
    "Welcome to RoboMartBD, your premier destination for all things robotics. Discover a vast array of high-quality components including sensors, parts, and equipment, carefully curated to power your innovative projects. From servos to cutting-edge sensors, we offer a diverse selection to cater to every robotics enthusiast. Our commitment to quality, affordability, and expert curation sets us apart. Shop with confidence knowing you'll find the best deals and fast shipping on components engineered for excellence. Join our global community of robotics enthusiasts and embark on your DIY journey with RoboMartBD, where creativity meets technical excellence.",
};
const NavigationBar = () => {
  const pathname = usePathname();

  const [normalNavigation, setNormalNavigation] = useState(false);

  return (
    <>
      <div className="desktop-navigation">
       
        {pathname.includes("tutorials") || pathname.includes("blogs") ? (
          <CommonNavigation />
        ) : (
          <HeroNavigation />
        )}
      </div>
    </>
  );
};

export default NavigationBar;

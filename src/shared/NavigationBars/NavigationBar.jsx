"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import CommonNavigation from "./CommonNavigationBar/CommonNavigation";
import HeroNavigation from "./HeroNavigationBar/HeroNavigation";

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

import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "RobomartBd",
  description:
    "Welcome to RoboMartBD, your premier destination for all things robotics. Discover a vast array of high-quality components including sensors, parts, and equipment, carefully curated to power your innovative projects. From servos to cutting-edge sensors, we offer a diverse selection to cater to every robotics enthusiast. Our commitment to quality, affordability, and expert curation sets us apart. Shop with confidence knowing you'll find the best deals and fast shipping on components engineered for excellence. Join our global community of robotics enthusiasts and embark on your DIY journey with RoboMartBD, where creativity meets technical excellence.",
  generator: "RobomartBd- Online Robotics Shop",
  applicationName: "Robomart BD",
  referrer: "https://robomartbd.com",
  keywords: [
    "Bangladesh large robotics shop",
    "Robotics component shop",
    "Robot shop",
    "educational component shop",
  ],

  authors: [
    { name: "Md Hafizur Rahman" },
    { name: "RobomartBd", url: "https://robomartbd.com" },
  ],
  creator: "mdsabbir.dev",
  publisher: "https://robomartbd.com",
  alternates: {
    canonical: `https://www.robomartbd.com`,
  },
  // formatDetection: {
  //   email: false,
  //   address: false,
  //   telephone: false,
  // },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="canonical" href="" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}

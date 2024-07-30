"use client";
import { useGetHomeDataQuery } from "@/redux/api/api";
import { backendUrl } from "../../utils/backendApiUrlProvider";

const HomePage = () => {
  const { data: homeData1, isLoading: homeLoading } = useGetHomeDataQuery();
  console.log(homeData1);
  
  return (
    <div>
     
      HomePage
    </div>
  );
};

export default HomePage;

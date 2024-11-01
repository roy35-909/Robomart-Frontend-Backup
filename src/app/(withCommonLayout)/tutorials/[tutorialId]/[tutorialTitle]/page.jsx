//! static
// import { getSingleTutorialData } from "@/utils/ApiCall/blogTutorialApi";
// import SIngleTutorialPage from "./_SingleTutorial/SIngleTutorialPage";

// export async function generateMetadata({ params }, parent) {
//   const tutorialDetails = await getSingleTutorialData(params.tutorialId);
//   const metaKeywords = tutorialDetails?.blog_tag;
//   console.log(tutorialDetails);
  
//   const metaData = {
//     title: tutorialDetails?.title,
//     description: tutorialDetails?.title,
//     keywords: metaKeywords,
//     alternates: {
//       canonical: `https://www.robomartbd.com/tutorials/${params?.tutorialId}/${params?.tutorialTitle}`,
//     },
//   };
//   return metaData;
// }

// const TutorialDetailsPage = async ({ params }) => {
//   const tutorialDetails = await getSingleTutorialData(params?.tutorialId);

//   return (
//     <>
//       <SIngleTutorialPage tutorialDetails={tutorialDetails} params={params} />{" "}
//     </>
//   );
// };

// export default TutorialDetailsPage;


//! dynamic

"use client"; // This component will run client-side
import { useEffect, useState } from "react";
import { getSingleTutorialData } from "@/utils/ApiCall/blogTutorialApi";
import SIngleTutorialPage from "./_SingleTutorial/SIngleTutorialPage";
import Head from "next/head";

const TutorialDetailsPage = ({ params }) => {
  const [tutorialDetails, setTutorialDetails] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchTutorialDetails() {
      try {
        const data = await getSingleTutorialData(params?.tutorialId);
        setTutorialDetails(data);
      } catch (err) {
        console.error("Error fetching tutorial details:", err);
        setError(err);
      }
    }

    fetchTutorialDetails();
  }, [params?.tutorialId]);

  return (
    <>
      {tutorialDetails ? (
        <>
          {/* Dynamically update metadata */}
          <Head>
            <title>{tutorialDetails.title}</title>
            <meta name="description" content={tutorialDetails.title} />
            <meta name="keywords" content={tutorialDetails.blog_tag} />
            <link
              rel="canonical"
              href={`https://www.robomartbd.com/tutorials/${
                params?.tutorialId
              }/${encodeURI(tutorialDetails.title)}`}
            />
          </Head>
          <SIngleTutorialPage tutorialDetails={tutorialDetails} />
        </>
      ) : error ? (
        <div>Error loading tutorial details: {error.message}</div>
      ) : (
        <p>Loading tutorial details...</p>
      )}
    </>
  );
};

export default TutorialDetailsPage;

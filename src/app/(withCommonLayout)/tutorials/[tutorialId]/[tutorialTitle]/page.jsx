import { getSingleTutorialData } from "@/utils/ApiCall/blogTutorialApi";
import SIngleTutorialPage from "./_SingleTutorial/SIngleTutorialPage";

export async function generateMetadata({ params }, parent) {
  const tutorialDetails = await getSingleTutorialData(params.tutorialId);
  const metaData = {
    title: tutorialDetails?.title,
    description: tutorialDetails?.title,
    alternates: {
      canonical: `https://www.robomartbd.com/tutorials/${params?.tutorialId}/${params?.tutorialtTitle}`,
    },
  };
  return metaData;
}

const TutorialDetailsPage = async ({ params }) => {
  const tutorialDetails = await getSingleTutorialData(params?.tutorialId);

  return (
    <>
      <SIngleTutorialPage tutorialDetails={tutorialDetails} params={params} />{" "}
    </>
  );
};

export default TutorialDetailsPage;

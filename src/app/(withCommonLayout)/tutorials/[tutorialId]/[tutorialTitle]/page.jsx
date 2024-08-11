import { getSingleTutorialData } from "@/utils/ApiCall/blogTutorialApi";
import SIngleTutorialPage from "./_SingleTutorial/SIngleTutorialPage";

const TutorialDetailsPage = async ({ params }) => {
  const tutorialDetails = await getSingleTutorialData(params?.tutorialId);

  return (
    <>
      <SIngleTutorialPage tutorialDetails={tutorialDetails} params={params} />{" "}
    </>
  );
};

export default TutorialDetailsPage;

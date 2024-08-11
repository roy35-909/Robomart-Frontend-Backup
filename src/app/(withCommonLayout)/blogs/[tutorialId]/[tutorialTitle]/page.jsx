import SIngleTutorialPage from "@/app/(withCommonLayout)/tutorials/[tutorialId]/[tutorialTitle]/_SingleTutorial/SIngleTutorialPage";
import { getSingleTutorialData } from "@/utils/ApiCall/blogTutorialApi";

const SingleBlogDetails = async ({ params }) => {
  const tutorialDetails = await getSingleTutorialData(params?.tutorialId);

  return (
    <>
      <SIngleTutorialPage tutorialDetails={tutorialDetails} params={params} />
    </>
  );
};

export default SingleBlogDetails;

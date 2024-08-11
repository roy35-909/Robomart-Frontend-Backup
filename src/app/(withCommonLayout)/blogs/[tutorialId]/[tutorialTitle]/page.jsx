import SIngleTutorialPage from "@/app/(withCommonLayout)/tutorials/[tutorialId]/[tutorialTitle]/_SingleTutorial/SIngleTutorialPage";
import { getSingleTutorialData } from "@/utils/ApiCall/blogTutorialApi";


export async function generateMetadata({ params }, parent) {
  const tutorialDetails = await getSingleTutorialData(params.tutorialId);
  const metaData = {
    title: tutorialDetails?.title,
    description: tutorialDetails?.title,
  };
  return metaData;
}

const SingleBlogDetails = async ({ params }) => {
  const tutorialDetails = await getSingleTutorialData(params?.tutorialId);

  return (
    <>
      <SIngleTutorialPage tutorialDetails={tutorialDetails} params={params} />
    </>
  );
};

export default SingleBlogDetails;

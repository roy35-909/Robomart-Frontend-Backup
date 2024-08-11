import SIngleTutorialPage from "../../tutorials/[tutorialId]/[tutorialTitle]/_SingleTutorial/SIngleTutorialPage";
const SingleBlogDetails = ({ params }) => {
  const blogDetailsParams = {
    tutorialId: params.slug[0],
  };
  return (
    <>
      <SIngleTutorialPage params={blogDetailsParams} />
    </>
  );
};

export default SingleBlogDetails;

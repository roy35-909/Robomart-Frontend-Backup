import SIngleTutorialPage from "../../tutorials/[...slug]/_SingleTutorial/SIngleTutorialPage";
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

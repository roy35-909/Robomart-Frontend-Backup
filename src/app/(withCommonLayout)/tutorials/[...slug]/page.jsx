import SIngleTutorialPage from "./_SingleTutorial/SIngleTutorialPage";

const TutorialDetailsPage = ({ params }) => {
  const tutorialDetailsParams = {
    tutorialId: params.slug[0],
  };
  return (
    <>
      {" "}
      <SIngleTutorialPage params={tutorialDetailsParams} />{" "}
    </>
  );
};

export default TutorialDetailsPage;

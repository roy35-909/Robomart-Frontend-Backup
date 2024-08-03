import SingleTagAllTutorial from "../../_AllTutorials/Components/SingleTagAllTutorial/SingleTagAllTutorial";

const SingleTagTutorials = ({ params }) => {
  const tagTutorialParams = {
    tagId: params.slug[0],
    tagName: params.slug[1],
  };
  return (
    <>
      <SingleTagAllTutorial params={tagTutorialParams} />
    </>
  );
};

export default SingleTagTutorials;

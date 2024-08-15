import SingleTagAllTutorial from "../../../_AllTutorials/Components/SingleTagAllTutorial/SingleTagAllTutorial";
export async function generateMetadata({ params }, parent) {
  const metaData = {
    title: `${decodeURI(params?.tagName)} - RobomartBD tutorials tag`,
    alternates: {
      canonical: `https://www.robomartbd.com/tutorials/${params?.tagId}/${params?.tagName}`,
    },
  };
  return metaData;
}
const SingleTagTutorials = ({ params }) => {
  return (
    <>
      <SingleTagAllTutorial params={params} />
    </>
  );
};

export default SingleTagTutorials;

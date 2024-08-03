"use client"
import SingleTagAllTutorial from "@/app/(withCommonLayout)/tutorials/_AllTutorials/Components/SingleTagAllTutorial/SingleTagAllTutorial";

const TagBlogs = ({ params }) => {
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

export default TagBlogs;

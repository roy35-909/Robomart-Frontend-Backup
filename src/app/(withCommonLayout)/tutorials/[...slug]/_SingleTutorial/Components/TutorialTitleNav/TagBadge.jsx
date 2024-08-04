import { useRouter } from "next/navigation";
import styles from "../../SingleTutorial.module.scss";

const TagBadge = ({ tag, tagId }) => {
  const router = useRouter();
  const handleTagNavigate = () => {
    router.push(`/tutorials/tag/${tagId}/${tag.replace(/ /g, "_")}`);
  };
  return (
    <>
      <small
        onClick={handleTagNavigate}
        className={styles.tagStyle}
        style={{
          margin: "10px 5px ",
          padding: "5px",
          backgroundColor: "black",
          fontWeight: "500",
          color: "white",
          fontSize: "14px",
          borderRadius: "10px",
        }}
      >
        {tag}
      </small>
    </>
  );
};

export default TagBadge;

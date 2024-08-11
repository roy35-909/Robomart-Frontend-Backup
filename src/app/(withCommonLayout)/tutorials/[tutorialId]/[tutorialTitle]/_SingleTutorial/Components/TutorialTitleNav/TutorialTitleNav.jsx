import { backendUrl } from "@/utils/backendApiUrlProvider";
import { Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "../../SingleTutorial.module.scss";
import TagBadge from "./TagBadge";
const TutorialTitleNav = ({
  activeSection,
  setActiveSection,
  tutorialDetails,
}) => {
  const [allTags, setAllTags] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch(`${backendUrl}/blog/get_all_tag`);
      const data = await response.json();

      const newArr = [];
      data.forEach((element) => {
        if (tutorialDetails?.tag?.includes(element?.id)) {
          newArr.push(element);
        }
      });
      setAllTags(newArr);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tutorialDetails]);

  return (
    <div style={{ width: "100%" }}>
      <ListItem
        style={{
          backgroundColor: "#f2f2f2",
          width: "360px",
          borderRadius: "5px 5px 0 0",
        }}
      >
        <Typography
          variant="h6"
          style={{ fontFamily: "Roboto", fontWeight: "bold" }}
        >
          Sections
        </Typography>
      </ListItem>

      <List
        sx={{
          border: "1px solid #e2e2e2",
          borderRadius: "5px",
          width: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
          position: "relative",
          overflow: "auto",
          maxHeight: "70vh",
          "& ul": { padding: 0 },
        }}
      >
        {tutorialDetails?.pages?.length > 0 &&
          tutorialDetails?.pages?.map((singlePage, idx) => (
            <Link
              key={idx}
              href={`#sec${singlePage?.page_no}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <ListItem
                style={{
                  borderBottom: "1px solid #e2e2e2",
                }}
                className={`${styles.listItemSections}  `}
              >
                <ListItemText primary={singlePage?.page_title} />
              </ListItem>
            </Link>
          ))}

        {/* Tags */}
        <ListItem style={{ padding: "3vh 0 0 0" }}>
          <div style={{ marginLeft: "10px" }}>
            <Typography
              variant="h6"
              style={{ fontFamily: "Roboto", fontWeight: "bold" }}
            >
              Tags
            </Typography>
          </div>
        </ListItem>
        <div
          style={{
            border: "1px solid #e2e2e2",
            maxWidth: "340px",
            width: "100% !important",
            borderRadius: "5px",
            minHeight: "100px",
            margin: "5px",
            padding: "10px",
          }}
        >
          {allTags?.map((tag, idx) => (
            <TagBadge key={idx} tag={tag?.tag_name} tagId={tag?.id} />
          ))}
        </div>
      </List>
    </div>
  );
};

export default TutorialTitleNav;

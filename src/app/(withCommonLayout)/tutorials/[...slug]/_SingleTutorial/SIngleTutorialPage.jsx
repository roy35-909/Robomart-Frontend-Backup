"use client";
import { backendUrl } from "@/utils/backendApiUrlProvider";
import { Container, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import AllComments from "./Components/CommentSection/AllComments";
import TutorialProducts from "./Components/TutorialProducts/TutorialProducts";
import TutorialRelatedProducts from "./Components/TutorialRelatedProducts/TutorialRelatedProducts";
import TutorialSections from "./Components/TutorialSectionsScroll/TutorialSections";
import TutorialTitleNav from "./Components/TutorialTitleNav/TutorialTitleNav";
import TutorialHead from "./Components/TutorialsHead/TutorialHead";
import styles from "./SingleTutorial.module.scss";
const SIngleTutorialPage = ({ params }) => {
  const [activeSection, setActiveSection] = useState(null);
  const [changePosition, setChangePosition] = useState(false);
  const [tutorialDetails, setTutorialDetails] = useState({});

  useEffect(() => {
    fetch(`${backendUrl}/blog/get_blog/${params?.tutorialId}`)
      .then((res) => res.json())
      .then((data) => setTutorialDetails(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 0.1 * window.innerHeight) {
        setChangePosition(true);
      } else {
        setChangePosition(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Container maxWidth={"xl"} style={{ minHeight: "80vh" }}>
        <Typography
          variant="h4"
          style={{
            padding: "5vh 0 0vh 0vh",
            fontFamily: "Poppins",
            fontWeight: "bold",
          }}
          className={styles.tutorialTitle}
        >
          {tutorialDetails?.title}
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12} md={12} lg={8}>
            <TutorialHead
              setActiveSection={setActiveSection}
              activeSection={activeSection}
              tutorialDetails={tutorialDetails}
            />
            <TutorialProducts tutorialDetails={tutorialDetails} />
            <div style={{ width: "100%" }} className={styles.allSections}>
              {" "}
              <TutorialSections
                setActiveSection={setActiveSection}
                activeSection={activeSection}
                tutorialDetails={tutorialDetails}
              />
            </div>

            <TutorialRelatedProducts data={tutorialDetails?.related_Product} />
            {/* Comments Section */}
            <AllComments params={params} />
          </Grid>
          <Grid item md={12} lg={4}>
            <div
              style={{
                // width: "100%",
                position: changePosition ? "sticky" : "",
                top: changePosition ? "20px" : "",
                marginBottom: "3vh",
              }}
            >
              <TutorialTitleNav
                setActiveSection={setActiveSection}
                activeSection={activeSection}
                tutorialDetails={tutorialDetails}
              />
            </div>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default SIngleTutorialPage;

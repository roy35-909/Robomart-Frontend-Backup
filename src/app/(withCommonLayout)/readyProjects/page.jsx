import { Container } from "@mui/material";
import ProjectBottom from "./_sections/BottomSectionsProjects/ProjectBottom";
import MiddleSectionProjects from "./_sections/MiddleSectionProjects/MiddleSectionProjects";
import TopSectionProjects from "./_sections/TopSectionsProject/TopSectionProjects";

const ReadyProjectPage = () => {
  return (
    <div>
      <TopSectionProjects />
      <Container maxWidth={"xl"}>
        <MiddleSectionProjects />
      </Container>
      <Container maxWidth={"xl"}>
        <ProjectBottom></ProjectBottom>
      </Container>
    </div>
  );
};

export default ReadyProjectPage;

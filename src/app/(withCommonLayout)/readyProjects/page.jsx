import { Container } from "@mui/material";
import MiddleSectionProjects from "./_sections/MiddleSectionProjects/MiddleSectionProjects";
import TopSectionProjects from "./_sections/TopSectionsProject/TopSectionProjects";

const ReadyProjectPage = () => {
  return (
    <div>
      <TopSectionProjects />
      <Container maxWidth={"lg"}>
        <MiddleSectionProjects />
      </Container>
    </div>
  );
};

export default ReadyProjectPage;

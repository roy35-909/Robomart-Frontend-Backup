import { Typography } from "@mui/material";
import ProjectBottomNav from "./ProjectBottomNav";

const MiddleSectionProjects = () => {
  return (
    <div>
      <div>
        <Typography
          marginTop={3}
          variant="h5"
          marginBottom={5}
          textAlign={"center"}
          fontFamily={"Poppins"}
        >
          Project Category
        </Typography>
      </div>
      <ProjectBottomNav />
    </div>
  );
};

export default MiddleSectionProjects;

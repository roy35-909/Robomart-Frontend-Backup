import { Typography } from "@mui/material";
import CustomProjectFrom from "./CustomProjectFrom";

const ProjectBottom = () => {
  return (
    <div style={{ marginBottom: "10px" }}>
      {" "}
      <Typography
        variant="h5"
        mb={2}
        mt={10}
        fontWeight={"bold"}
        fontFamily={"var(--primaryFont)"}
        textAlign="center"
      >
        Custom Project Request Form
      </Typography>
      <CustomProjectFrom />
    </div>
  );
};

export default ProjectBottom;

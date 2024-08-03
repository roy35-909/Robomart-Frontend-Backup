"use client"
import {
  CircularProgress,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { backendUrl } from "@/utils/backendApiUrlProvider";
import SingleTutorialCard from "../Tutorial_Card/SingleTutorialCard";
import { useParams } from "next/navigation";

const SingleCategoryAllTutorial = ({params}) => {
  const [load, setLoad] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoad(true);
    fetch(`${backendUrl}/blog/get_all_blog_by_category/${params?.categoryId}`)
      .then((res) => res.json())
      .then((getData) => {
        setData(getData?.results);
        setLoad(false);
      });
  }, [params]);

  return (
    <div style={{ minHeight: "70vh" }}>
      <Container maxWidth="xl" style={{ padding: "5vh 0" }}>
        <Typography variant="h5" paddingY={4} fontFamily={"Poppins"}>
          {" "}
          <span style={{ fontWeight: "bold" }}>Category:</span>{" "}
          {params?.categoryName}{" "}
        </Typography>
        <Divider />
        <Grid container spacing={2} paddingY={5}>
          {load && <CircularProgress />}
          {!load && data?.length == 0 && <h5>No tutorials </h5>}
          {data?.length &&
            data?.map((tutorial,idx) => (
              <Grid key={idx} item xs={6} sm={6} md={4} lg={3}>
                <SingleTutorialCard tutorial={tutorial} />
              </Grid>
            ))}
        </Grid>
      </Container>
    </div>
  );
};

export default SingleCategoryAllTutorial;

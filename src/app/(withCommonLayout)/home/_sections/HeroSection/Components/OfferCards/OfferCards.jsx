import { Container, Grid, Skeleton } from "@mui/material";

import { useGetHomeDataQuery } from "@/redux/api/api";
import Image from "next/image";

const OfferCards = () => {
  const { data: homeData1, isLoading: homeLoading } = useGetHomeDataQuery();

  if (homeLoading) {
    return (
      <>
        <Container>
          <Skeleton variant="rectangular" height={200} /> <br />
          <Skeleton variant="rectangular" height={200} />
        </Container>
      </>
    );
  }

  return (
    <>
      <Grid container>
        {homeData1?.spacialoffer?.map((offer) => (
          // eslint-disable-next-line react/jsx-key
          <Grid
            item
            xs={6}
            md={6}
            lg={12}
            paddingY={1}
            display={"flex"}
            justifyContent={"center"}
          >
            {/* <img
              src={`${offer?.poster}`}
              alt="offer card"
              style={{ width: "80% " }}
            /> */}
            <Image
              src={`${offer?.poster ? offer.poster : "/assets/no-img.jpg"}`}
              alt="offer card"
              layout="responsive" // Or 'fill'
              objectFit="cover"
              width={300} // Optional, for initial layout
              height={200} // Optional, for initial layout
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default OfferCards;

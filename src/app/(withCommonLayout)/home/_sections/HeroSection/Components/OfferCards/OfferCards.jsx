import { Grid, Skeleton } from "@mui/material";

import { useGetHomeDataQuery } from "@/redux/api/api";
import Image from "next/image";

const OfferCards = () => {
  const { data: homeData1, isLoading: homeLoading } = useGetHomeDataQuery();

  return (
    <>
      {homeLoading ? (
        <Grid container>
          <Grid
            item
            xs={6}
            md={6}
            lg={12}
            paddingY={1}
            display={"flex"}
            justifyContent={"center"}
          >
            <Skeleton width={300} height={200} />
          </Grid>
          <Grid
            item
            xs={6}
            md={6}
            lg={12}
            paddingY={1}
            display={"flex"}
            justifyContent={"center"}
          >
            <Skeleton width={300} height={200} />
          </Grid>
        </Grid>
      ) : (
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
      )}
    </>
  );
};

export default OfferCards;

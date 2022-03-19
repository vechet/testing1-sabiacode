import { Typography, Stack, styled, Grid } from "@mui/material";
import React from "react";
import SeeAllButton from "../../../components/SeeAllButton";
import Image from "next/image";
import { gridDatas } from "./utils";

const Discover = React.memo(() => {
  return (
    <StyledMain>
      <Typography className="title">Discover</Typography>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        pt={1}
        pb={4}
      >
        <Typography className="description">{`Genres & Moods`}</Typography>
        <SeeAllButton pageName={"genres"} />
      </Stack>
      <Grid container spacing={1.2}>
        {gridDatas.map((data, index) => {
          return (
            <Grid item xs={6}>
              <Image
                src={data.imageUrl}
                alt="Picture of the author"
                width={191}
                height={123}
                className="image"
              />
            </Grid>
          );
        })}
      </Grid>
    </StyledMain>
  );
});

const StyledMain = styled(Stack)`
  width: 390px;
  margin-left: 60px;
  .title {
    font-weight: 500;
    font-size: 16px;
    color: #949494;
  }
  .description {
    font-weight: 600;
    font-size: 25px;
    color: #1d1b1a;
  }
  .image {
    border-radius: 5px;
    min-width: 24%;
    min-height: 24%;
  }
`;

export default Discover;

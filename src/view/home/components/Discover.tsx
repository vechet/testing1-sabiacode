import { Typography, Stack, styled } from "@mui/material";
import React from "react";
import GridListing from "../../../components/GridListing";
import SeeAllButton from "../../../components/SeeAllButton";

const Discover = React.memo(() => {
  return (
    <StyledWrapper>
      <Typography className="title">Discover</Typography>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        pt={1}
        pb={4}
      >
        <Typography className="description">{`Genres & Moods`}</Typography>
        <SeeAllButton pageName={"News"} />
      </Stack>
      <GridListing />
    </StyledWrapper>
  );
});

const StyledWrapper = styled(Stack)`
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
`;

export default Discover;

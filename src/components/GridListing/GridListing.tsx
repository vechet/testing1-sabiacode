import { Stack } from "@mui/material";
import Grid from "@mui/material/Grid";
import React from "react";
import styled from "styled-components";
import GridItem from "./GridItem";

const GridListing = React.memo(() => {
  return (
    <StyledWrapper>
      <Grid container spacing={1.2}>
        <GridItem />
      </Grid>
    </StyledWrapper>
  );
});

const StyledWrapper = styled(Stack)`
  && {
    overflow-y: auto;
    max-height: calc(100vh - 240px);
    min-height: calc(100vh - 240px);
  }
`;
export default GridListing;

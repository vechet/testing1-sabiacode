import { Stack } from "@mui/material";
import React from "react";
import styled from "styled-components";
import Listing from "../../../components/Listing";

const HotTrack = React.memo(() => {
  return (
    <StyledWrapper flex={1}>
      <Listing topTitle={"Hot Track"} topDescription={"Global Top 50"} />
    </StyledWrapper>
  );
});

const StyledWrapper = styled(Stack)`
  .list-item {
    max-height: calc(100vh - 240px);
    min-height: calc(100vh - 240px);
    overflow: auto;
  }
`;

export default HotTrack;

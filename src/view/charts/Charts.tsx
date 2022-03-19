import { Stack, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import Listing from "../../components/Listing";

const Charts = React.memo(() => {
  return (
    <StyledWrapper>
      <Stack>
        <Typography className="description">Charts</Typography>
      </Stack>
      <Stack>
        <Listing type={"charts"} />
      </Stack>
    </StyledWrapper>
  );
});

const StyledWrapper = styled(Stack)`
  .description {
    font-weight: 600;
    font-size: 25px;
    color: #1d1b1a;
  }
`;
export default Charts;

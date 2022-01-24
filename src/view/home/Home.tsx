import { Divider, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import React from "react";
import styled from "styled-components";
import EditorPicks from "../../components/Home/EditorPicks";
import HotTrack from "../../components/Home/HotTrack";
import Discover from "../../components/Home/Discover";
import New from "../../components/Home/New";
import YouMayLike from "../../components/Home/YouMayLike";

const Home = React.memo(() => {
  return (
    <Stack direction="column">
      <New />
      <StyledDivider />
      <Stack direction="row">
        <HotTrack />
        <Discover />
      </Stack>
      <StyledDivider />
      <EditorPicks />
      <StyledDivider />
      <YouMayLike />
      <StyledDivider />
    </Stack>
  );
});

const StyledDivider = styled(Divider)`
  padding-top: 50px;
  margin-bottom: 50px;
`;

export default Home;

import { Stack, Typography } from "@mui/material";
import React from "react";
import Listing from "../../components/Listing";

const Charts = React.memo(() => {
  return (
    <Stack>
      <Stack>
        <Typography>Charts</Typography>
      </Stack>
      <Stack>
        <Listing type={"charts"} />
      </Stack>
    </Stack>
  );
});

export default Charts;

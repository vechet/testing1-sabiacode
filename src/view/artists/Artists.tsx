import React from "react";
import { Stack, styled, Typography, Button, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Artists = React.memo(() => {
  return (
    <StyledWrapper flex={1} justifyContent="center">
      <Stack alignItems="center">
        <Typography className="title">
          Your favourite artists will appear here
        </Typography>
      </Stack>
      <Stack alignItems="center" py={3}>
        <Button
          className="btn-search"
          variant="contained"
          startIcon={<SearchIcon className="search-icon" />}
        >
          Search
        </Button>
      </Stack>
    </StyledWrapper>
  );
});

const StyledWrapper = styled(Stack)`
  max-height: calc(100vh - 180px);
  min-height: calc(100vh - 180px);
  && {
    .title {
      font-size: 25px;
      font-weight: 600;
      color: #1d1b1a;
    }
    .btn-search {
      height: 50px;
      min-width: 165px;
      text-transform: none;
      background-color: #1d1b1a;
      color: #fff;
      font-weight: 500;
      border-radius: 24px;
      font-size: 16px;
    }
    .search-icon {
      width: 24px;
      height: 24px;
    }
  }
`;
export default Artists;

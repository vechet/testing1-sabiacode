import React from "react";
import { Stack, Typography, Card, CardContent, CardMedia } from "@mui/material";
import Grid from "@mui/material/Grid";
import styled from "styled-components";
import { datas } from "./components/utils";

const Genres = React.memo(() => {
  return (
    <StyledWrapper>
      <Typography className="description">{`Genres & Moods`}</Typography>
      <Grid container spacing={2.5}>
        {datas.map((data, index) => {
          return (
            <Grid item xs={3}>
              <Stack>
                <img src={data.imageUrl} className="image" />
                <Typography noWrap px={2}>
                  {data.title}
                </Typography>
              </Stack>
            </Grid>
          );
        })}
      </Grid>
    </StyledWrapper>
  );
});

const StyledWrapper = styled(Stack)`
  .description {
    font-weight: 600;
    font-size: 25px;
    color: #1d1b1a;
    margin-bottom: 30px;
  }
  .image {
    border-radius: 5px;
    min-width: 24%;
    min-height: 24%;
  }
  .MuiTypography-root {
    position: relative;
    bottom: 50px;
    color: white;
    font-weight: 600;
    text-align: center;
  }
  :hover {
    cursor: pointer;
  }
`;

export default Genres;

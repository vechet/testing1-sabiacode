import React from "react";
import { Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import styled from "styled-components";
import CardItem from "../../components/CardItem";
import { datas } from "./components/utils";

const New = React.memo(() => {
  return (
    <StyledWrapper>
      <Typography className="description">New Releases</Typography>
      <Grid container spacing={2.5}>
        {datas.map((data, index) => {
          return (
            <Grid item xs={3}>
              <CardItem
                title={data.title}
                description={data.description}
                imageUrl={data.imageUrl}
              />
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
`;
export default New;

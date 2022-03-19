import { Stack } from "@mui/material";
import Grid from "@mui/material/Grid";
import React from "react";
import { gridDatas } from "../../view/home/components/utils";
import Image from "next/image";
import styled from "styled-components";

const GridItem = React.memo(() => {
  return (
    <>
      {gridDatas.map((data, index) => {
        return (
          <Grid item xs={6}>
            <StyledWrapper>
              <Image
                src={data.imageUrl}
                alt="Picture of the author"
                width={191}
                height={123}
                className="image"
              />
            </StyledWrapper>
          </Grid>
        );
      })}
    </>
  );
});

const StyledWrapper = styled(Stack)`
  && {
    .image {
      border-radius: 5px;
    }
  }
`;

export default GridItem;

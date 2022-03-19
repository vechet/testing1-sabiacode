import { Card, CardMedia } from "@mui/material";
import Grid from "@mui/material/Grid";
import React from "react";
import { gridDatas } from "../../view/home/components/utils";

const GridItem = React.memo(() => {
  return (
    <>
      {gridDatas.map((data, index) => {
        return (
          <Grid item xs={6}>
            <Card>
              <CardMedia
                component="img"
                width="191"
                height="123"
                image={data.imageUrl}
                alt="green iguana"
              />
            </Card>
          </Grid>
        );
      })}
    </>
  );
});

export default GridItem;

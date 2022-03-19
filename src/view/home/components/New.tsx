import { Stack } from "@mui/material";
import React from "react";
import CarouselSlide from "../../../components/Carousel";

const New = React.memo(() => {
  return (
    <CarouselSlide
      topTitle={"New"}
      topDescription={"Releases"}
      showSeeMoreBtn={true}
      pageName={"new"}
    />
  );
});

export default New;

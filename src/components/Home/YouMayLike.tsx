import React from "react";
import CarouselSlide from "../Carousel";

const YouMayLike = React.memo(() => {
  return (
    <CarouselSlide
      topTitle={"You May Like"}
      topDescription={"In the car"}
      showSeeMoreBtn={true}
    />
  );
});

export default YouMayLike;

import React from "react";
import CarouselSlide from "../Carousel";

const EditorPicks = React.memo(() => {
  return (
    <CarouselSlide
      topTitle={"Editor's picks"}
      topDescription={"Featured Playlists"}
    />
  );
});

export default EditorPicks;

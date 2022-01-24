import React from "react";
import Listing from "../Listing";

const HotTrack = React.memo(() => {
  return <Listing topTitle={"Hot Track"} topDescription={"Global Top 50"} />;
});

export default HotTrack;

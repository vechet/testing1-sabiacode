import { Divider, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import React, { useEffect } from "react";
import EditorPicks from "./components/EditorPicks";
import HotTrack from "./components/HotTrack";
import Discover from "./components/Discover";
import New from "./components/New";
import YouMayLike from "./components/YouMayLike";
import { spotifyApi } from "../../components/Serivces/SpotifyApi";

const Home = React.memo(() => {
  const getUser = () => {
    spotifyApi
      .getUserPlaylists() // note that we don't pass a user id
      .then(
        function (data) {
          console.log("User playlists", data);
        },
        function (err) {
          console.error(err);
        }
      );
  };

  useEffect(() => {
    getUser();
  });

  return (
    <Stack direction="column">
      <New />
      <Stack py={3}>
        <Divider />
      </Stack>
      <Stack direction="row">
        <HotTrack />
        <Discover />
      </Stack>
      <Stack py={3}>
        <Divider />
      </Stack>
      <EditorPicks />
      <Stack py={3}>
        <Divider />
      </Stack>
      <YouMayLike />
    </Stack>
  );
});

export default Home;

import React from "react";
import { Stack, IconButton, Slider, Typography, Icon } from "@mui/material";
import styled from "styled-components";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import LoopIcon from "@mui/icons-material/Loop";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useDispatch, useSelector } from "react-redux";
import {
  selectPlayer,
  setpauseTrack,
  setplayTrack,
  setFavorite,
  setRemoveFavorite,
  setRemovePlayRepeat,
  setPlayRepeat,
} from "../../../@redux/reducers/playerSlice";

const Playing = React.memo(() => {
  const dispatch = useDispatch();
  const player = useSelector(selectPlayer);
  const { playing, favorite, playRepeat } = player;

  const handlePlay = () => {
    dispatch(playing ? setpauseTrack() : setplayTrack());
  };

  const handleFavorite = () => {
    dispatch(favorite ? setRemoveFavorite() : setFavorite());
  };
  const handlePalyRepeat = () => {
    dispatch(playRepeat ? setRemovePlayRepeat() : setPlayRepeat());
  };

  return (
    <StyledWrapper direction="row" alignItems="center" spacing={2}>
      <Stack direction="row" alignItems="center" spacing={1}>
        <IconButton>
          <SkipPreviousIcon />
        </IconButton>
        <StyledPlay onClick={handlePlay}>
          {playing ? <PauseIcon /> : <PlayArrowIcon />}
        </StyledPlay>
        <IconButton>
          <SkipNextIcon />
        </IconButton>
      </Stack>
      <Stack flex="1" direction="row" alignItems="center" spacing={2}>
        <Typography>0:10</Typography>
        <Slider defaultValue={10} aria-label="Small" valueLabelDisplay="auto" />
        <Typography>3:20</Typography>
      </Stack>
      <Stack direction="row" alignItems="center" spacing={3}>
        <IconButton>
          <VolumeUpIcon />
        </IconButton>
        <IconButton onClick={handleFavorite}>
          {favorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </IconButton>
        <IconButton onClick={handlePalyRepeat}>
          <LoopIcon
            className={playRepeat ? "loop-icon-black" : "loop-icon-normal"}
          />
        </IconButton>
      </Stack>
    </StyledWrapper>
  );
});

const StyledWrapper = styled(Stack)`
  && {
    height: 100px !important;
    background-color: white;
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 1400;
    height: var(--playing_h);
    padding: 20px 35px;
    box-shadow: 10px -6px 15px 0 rgb(168 179 211 / 24%);
    .loop-icon-black {
      color: #1d1b1a;
    }
    .loop-icon-normal {
      color: #7d7d7d;
    }
  }
`;
const StyledPlay = styled(IconButton)`
  && {
    border: 2px solid;
  }
`;
export default Playing;

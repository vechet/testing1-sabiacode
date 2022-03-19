import { Typography, Stack, IconButton, Button } from "@mui/material";
import React from "react";
import styled from "styled-components";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddIcon from "@mui/icons-material/Add";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { listDatas } from "../../view/home/components/utils";
import { useDispatch, useSelector } from "react-redux";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import {
  selectPlayer,
  setpauseTrack,
  setplayTrack,
  setFavorite,
  setRemoveFavorite,
} from "../../../@redux/reducers/playerSlice";

interface IProps {
  topTitle?: any;
  topDescription?: any;
  showSeeMoreBtn?: any;
  type?: any;
}

const Listing = React.memo((props: IProps) => {
  const { topTitle, topDescription, showSeeMoreBtn, type } = props;
  const dispatch = useDispatch();
  const player = useSelector(selectPlayer);
  const { playing, favorite } = player;

  const handlePlaySong = () => {
    dispatch(setplayTrack());
  };

  const handlePlay = () => {
    dispatch(playing ? setpauseTrack() : setplayTrack());
  };

  const handleFavorite = () => {
    dispatch(favorite ? setRemoveFavorite() : setFavorite());
  };

  return (
    <StyledWrapper className="list-item">
      <Typography className="title">{topTitle}</Typography>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        pt={1}
        pb={4}
      >
        <Typography className="description">{topDescription}</Typography>
      </Stack>
      <StyledList>
        {listDatas.map((data, index) => {
          return (
            <StyledItem
              key={index}
              direction="row"
              justifyContent="space-between"
              className="card"
            >
              <Stack direction="row" alignItems="center">
                <Stack sx={{ height: "60px" }}>
                  <img
                    src={data.imageUrl}
                    width="60"
                    height="60"
                    className="image"
                  />
                  <IconButton disableRipple={true} className="btn-play-icon">
                    {playing ? (
                      <PauseIcon className="play-icon" />
                    ) : (
                      <PlayArrowIcon className="play-icon" />
                    )}
                  </IconButton>
                </Stack>
                {type === "charts" && (
                  <Stack pr={2} className="card-title">
                    {index < 10 && 0}
                    {index + 1}
                  </Stack>
                )}
                <div>
                  <Typography className="card-title">{data.title}</Typography>
                  <Typography className="card-description">
                    {data.description}
                  </Typography>
                </div>
              </Stack>
              <Typography className="card-duration">{data.duration}</Typography>
              <Stack className="icon-right" direction="row">
                <IconButton size="small" onClick={() => handlePlaySong()}>
                  <AddIcon />
                </IconButton>
                <IconButton size="small" onClick={handleFavorite}>
                  {favorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                </IconButton>
              </Stack>
            </StyledItem>
          );
        })}
      </StyledList>
    </StyledWrapper>
  );
});

const StyledWrapper = styled(Stack)`
  flex: 1;
  .title {
    font-weight: 500;
    font-size: 16px;
    color: #949494;
  }
  .description {
    font-weight: 600;
    font-size: 25px;
    color: #1d1b1a;
  }
  .btn-play-icon {
    display: block;
    background-color: rgba(64, 64, 64, 0.75);
    border-radius: 5px;
    bottom: 60px;
    display: none;
    width: 60px;
    height: 60px;
  }
  .play-icon {
    color: white;
    height: 30px;
    width: 30px;
  }
`;

const StyledList = styled(Stack)`
  && {
    .card {
      margin-bottom: 25px;
    }
    .image {
      margin-right: 15px;
      border-radius: 5px;
    }
    .card-title {
      font-size: 14px;
      font-weight: 500;
      color: #1d1b1a;
      margin-bottom: 2px;
      text-align: left;
    }
    .card-description {
      font-weight: 500;
      font-size: 13px;
      color: #949494;
      word-break: break-word;
      text-align: left;
      :hover {
        cursor: pointer;
      }
    }
    .card-duration {
      color: #949494;
      font-size: 14px;
    }
  }
`;

const StyledItem = styled(Stack)`
  .icon-right {
    display: none;
  }
  &:hover {
    .card-duration {
      display: none;
    }
    .icon-right {
      display: block;
    }
    .btn-play-icon {
      display: block;
    }
  }
`;

export default Listing;

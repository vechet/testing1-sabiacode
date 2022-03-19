import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./../store";

export const playerSlice = createSlice({
  name: "player",
  initialState: {
    playing: false,
    favorite: false,
    playRepeat: false,
  },
  reducers: {
    setplayTrack(state) {
      state.playing = true;
    },
    setpauseTrack(state) {
      state.playing = false;
    },
    setFavorite(state) {
      state.favorite = true;
    },
    setRemoveFavorite(state) {
      state.favorite = false;
    },
    setPlayRepeat(state) {
      state.playRepeat = true;
    },
    setRemovePlayRepeat(state) {
      state.playRepeat = false;
    },
  },
});

export const {
  setplayTrack,
  setpauseTrack,
  setFavorite,
  setRemoveFavorite,
  setPlayRepeat,
  setRemovePlayRepeat,
} = playerSlice.actions;

export const selectPlayer = ({ player }: RootState) => player;

export default playerSlice.reducer;

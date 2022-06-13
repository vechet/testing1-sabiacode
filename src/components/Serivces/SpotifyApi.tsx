// import axios from "axios";
import SpotifyWebApi from "spotify-web-api-js";

// export default axios.create({
//   baseURL: "http://www.omdbapi.com",
// });

export let spotifyApi = new SpotifyWebApi();
spotifyApi.setAccessToken("spotify_access_token");

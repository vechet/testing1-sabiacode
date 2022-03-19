import HomeIcon from "@mui/icons-material/Home";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import PeopleIcon from "@mui/icons-material/People";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import QueueIcon from "@mui/icons-material/Queue";

export const MENUS = [
  { label: "Home", value: "/home", icon: <HomeIcon /> },
  { label: "Charts", value: "/charts", icon: <FlashOnIcon /> },
  { label: "New", value: "/new", icon: <LocalOfferIcon /> },
  { label: "Genres", value: "/genres", icon: <EmojiObjectsIcon /> },
  { label: "Playlists", value: "/playlists", icon: <QueueIcon /> },
  { label: "Songs", value: "/songs", icon: <FavoriteIcon /> },
  { label: "Artists", value: "/artists", icon: <PeopleIcon /> },
];

import ambience from "../assets/playlists/ambience.json";
import genshin from "../assets/playlists/genshin.json";
import mine from "../assets/playlists/mine.json";
import showman from "../assets/playlists/showman.json";
import coding from "../assets/playlists/coding.json";

function getPlaylists() {
  return {
    ambience,
    coding,
    genshin,
    mine,
    showman
  };
}
export default getPlaylists;

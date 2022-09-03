import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { newsReducer } from "./newsReducer";
import authReducer from "./authReducer";
import projectReducer from "./projectReducer";
import searchReducer from "./searchReducer";

const songsReducer = () => {
  return [
    { title: "No Scrubs", duration: "4:05" },
    { title: "Macarena", duration: "2:30" },
    { title: "All Star", duration: "3:15" },
    { title: "I Want it That Way", duration: "1:45" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  search: searchReducer,
  songs: songsReducer,
  selectedSong: selectedSongReducer,
  news: newsReducer,
  auth: authReducer,
  form: formReducer,
  projects: projectReducer,
});

import { combineReducers } from "redux";
import { NavigationReducer } from "@expo/ex-navigation";
import AboutReducer from "./modules/about";
import ScheduleReducer from "./modules/schedule";
import SpeakerReducer from "./modules/speaker";
import FavesContainer from "../scenes/Faves/FavesContainer";

export default combineReducers({
  navigation: NavigationReducer,
  about: AboutReducer,
  schedule: ScheduleReducer,
  speaker: SpeakerReducer,
  faves: FavesContainer
});

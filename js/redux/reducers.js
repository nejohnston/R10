import { combineReducers } from "redux";
import { NavigationReducer } from "@expo/ex-navigation";
import AboutReducer from "./modules/about";
import ScheduleReducer from "./modules/schedule";

export default combineReducers({
  navigation: NavigationReducer,
  about: AboutReducer,
  schedule: ScheduleReducer
});

import { combineReducers } from "redux";
import { NavigationReducer } from "@expo/ex-navigation";
import AboutReducer from "./modules/about";

export default combineReducers({
  navigation: NavigationReducer,
  about: AboutReducer
});

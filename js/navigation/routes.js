import { createRouter } from "@expo/ex-navigation";

import AboutContainer from "../scenes/About/AboutContainer";
import NavigationLayout from "./NavigationLayout";
import ScheduleContainer from "../scenes/Schedule/ScheduleContainer";

const Router = createRouter(() => ({
  layout: () => NavigationLayout,
  about: () => AboutContainer,
  schedule: () => ScheduleContainer
}));

export default Router;

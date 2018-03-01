import { createRouter } from "@expo/ex-navigation";

import AboutContainer from "../scenes/About/AboutContainer";
import Nav from "./Nav";
import ScheduleContainer from "../scenes/Schedule/ScheduleContainer";
import SessionContainer from "../scenes/Session/SessionContainer";
import SpeakerContainer from "../scenes/Speaker/SpeakerContainer";

const Router = createRouter(() => ({
  layout: () => Nav,
  about: () => AboutContainer,
  schedule: () => ScheduleContainer,
  session: () => SessionContainer,
  speaker: () => SpeakerContainer
}));

export default Router;

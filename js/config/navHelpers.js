import { NavigationActions } from "@expo/ex-navigation";
import Store from "../redux/store";
import Router from "../navigation/routes";

// push the Speaker on to the top-level stack
export const goToSpeaker = speakerData => {
  Store.dispatch(
    NavigationActions.push("root", Router.getRoute("speaker", { speakerData }))
  );
};

// export const popSpeaker = () => {
//   Store.dispatch(NavigationActions.pop("speaker", Router.getRoute("root")));
// };

export const goToSession = (currentNavigatorUID, data) => {
  Store.dispatch(
    NavigationActions.push(
      currentNavigatorUID,
      Router.getRoute("session", { data })
    )
  );
};

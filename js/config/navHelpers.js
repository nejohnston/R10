import { NavigationActions } from "@expo/ex-navigation";
import Store from "../redux/store";
import Router from "../navigation/routes";

export const goToMap = data => {
  Store.dispatch(
    NavigationActions.push(
      "root",
      Router.getRoute("map", { data })
    )
  );
  console.log(data);
};

// push the Speaker on to the top-level stack
export const goToSpeaker = speakerData => {
  Store.dispatch(
    NavigationActions.push(
      "root",
      Router.getRoute("speaker", { speakerData })
    )
  );
};

export const popSpeaker = () => {
  Store.dispatch(NavigationActions.pop("root"));
};

export const goToSession = data => {
  let currentNavigatorUID = Store.getState().navigation
    .currentNavigatorUID;
  Store.dispatch(
    NavigationActions.push(
      currentNavigatorUID,
      Router.getRoute("session", { data })
    )
  );
};

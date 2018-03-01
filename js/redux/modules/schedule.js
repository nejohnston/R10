import SCHEDULE_ENDPOINT from "../../config/endpoints";
import { formatSessionData } from "../../config/helpers";
// ACTIONS
const GET_SCHEDULE_LOADING = "GET_SCHEDULE_LOADING";
const GET_SCHEDULE_SESSIONS = "GET_SCHEDULE";
const GET_SCHEDULE_ERROR = "GET_SCHEDULE_ERROR";

// ACTION CREATOR
export const getScheduleLoading = isLoading => ({
  type: GET_SCHEDULE_LOADING
});

export const getScheduleSessions = scheduleData => ({
  type: GET_SCHEDULE_SESSIONS,
  payload: scheduleData
});

export const getScheduleError = error => ({
  type: GET_SCHEDULE_ERROR,
  payload: error
});

// ASYNC ACTION CREATOR

export const fetchScheduleInfo = () => dispatch => {
  dispatch(getScheduleLoading());

  return fetch("https://r10app-95fea.firebaseio.com/sessions.json")
    .then(res => res.json())
    .then(data => {
      dispatch(getScheduleSessions(formatSessionData(data)));
    })
    .catch(error => dispatch(getScheduleError(error)));
};
export const fetchSessionsAndSpeaker = () => dispatch => {
  dispatch(getScheduleLoading());

  return Promise.all(
    [
      "https://r10app-95fea.firebaseio.com/sessions.json",
      "https://r10app-95fea.firebaseio.com/speakers.json?orderBy=%22speaker_id%22&equalTo=%22-KZ2o1CzG5GOfmURNSUB%22"
    ].map(url => fetch(url).then(response => response.json()))
  )
    .then(json => {
      const [itemsData, users] = json;
      const itemsWithOwners = itemsData.map(item => {
        const itemowner = users.filter(user => user.id === item.itemowner);
        item.itemowner = itemowner[0];
        return item;
      });

      dispatch(getItems(itemsWithOwners));
    })
    .catch(error => dispatch(getItemsError(error)));
};
// REDUCER

export default (
  state = {
    isLoading: false,
    scheduleData: [],
    error: ""
  },
  action
) => {
  switch (action.type) {
    case GET_SCHEDULE_LOADING: {
      return { ...state, isLoading: true, error: "" };
    }
    case GET_SCHEDULE_SESSIONS: {
      return {
        ...state,
        isLoading: false,
        scheduleData: action.payload,
        error: ""
      };
    }
    case GET_SCHEDULE_ERROR: {
      return { ...state, isLoading: false, error: action.payload };
    }
    default:
      return state;
  }
};

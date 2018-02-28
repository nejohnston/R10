import SCHEDULE_ENDPOINT from "../../config/endpoints";
import { formatSessionData } from "../../../helpers";
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
      console.log(data);
    })
    .catch(error => dispatch(getScheduleError(error)));
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

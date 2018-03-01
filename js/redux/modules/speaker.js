import SINGLE_SPEAKER_ENDPOINT from "../../config/endpoints";
// ACTIONS
const GET_SPEAKER_LOADING = "GET_ABOUT_LOADING";
const GET_SPEAKER = "GET_ABOUT";
const GET_SPEAKER_ERROR = "GET_ABOUT_ERROR";

// ACTION CREATOR
export const getSpeakerLoading = () => ({
  type: GET_SPEAKER_LOADING
});

export const getSpeaker = speakerData => ({
  type: GET_SPEAKER,
  payload: speakerData
});

export const getSpeakerError = error => ({
  type: GET_SPEAKER_ERROR,
  payload: error
});

// ASYNC ACTION CREATOR

export const fetchSpeaker = () => dispatch => {
  dispatch(getSpeakerLoading());

  return fetch(
    "https://r10app-95fea.firebaseio.com/speakers.json?orderBy=%22speaker_id%22&equalTo=%22-KZ2o1CzG5GOfmURNSUB%22"
  )
    .then(res => res.json())
    .then(data => {
      dispatch(getSpeaker(data));
    })
    .catch(error => dispatch(getSpeakerError(error)));
};
// REDUCER

export default (
  state = {
    isLoading: false,
    speakerData: [],
    error: ""
  },
  action
) => {
  switch (action.type) {
    case GET_SPEAKER_LOADING: {
      return { ...state, isLoading: true, error: "" };
    }
    case GET_SPEAKER: {
      return {
        ...state,
        isLoading: false,
        speakerData: action.payload,
        error: ""
      };
    }
    case GET_SPEAKER_ERROR: {
      return { ...state, isLoading: false, error: action.payload };
    }
    default:
      return state;
  }
};

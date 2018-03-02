import { FIREBASE_URL } from "../../config/endpoints";
import { formatDataObject } from "../../config/helpers";
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

export const fetchSpeaker = ({ speaker }) => dispatch => {
  dispatch(getSpeakerLoading());

  return fetch(
    `${FIREBASE_URL}speakers.json?orderBy="speaker_id"&equalTo="${speaker}"`
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
    speakerData: {},
    error: ""
  },
  action
) => {
  switch (action.type) {
    case GET_SPEAKER_LOADING: {
      return { ...state, isLoading: true, error: "" };
    }
    case GET_SPEAKER: {
      const formattedSpeakerData = formatDataObject(action.payload);
      return {
        ...state,
        isLoading: false,
        speakerData: formattedSpeakerData,
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

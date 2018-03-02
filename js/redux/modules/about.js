import { ABOUT_ENDPOINT } from "../../config/endpoints";

// ACTIONS
const GET_ABOUT_LOADING = "GET_ABOUT_LOADING";
const GET_ABOUT = "GET_ABOUT";
const GET_ABOUT_ERROR = "GET_ABOUT_ERROR";

// ACTION CREATOR
export const getAboutLoading = isLoading => ({
  type: GET_ABOUT_LOADING
});

export const getAbout = aboutData => ({
  type: GET_ABOUT,
  payload: aboutData
});

export const getAboutError = error => ({
  type: GET_ABOUT_ERROR,
  payload: error
});

// ASYNC ACTION CREATOR

export const fetchAboutInfo = () => dispatch => {
  dispatch(getAboutLoading());

  return fetch(ABOUT_ENDPOINT)
    .then(res => res.json())
    .then(data => {
      dispatch(getAbout(data));
    })
    .catch(error => dispatch(getAboutError(error)));
};
// REDUCER

export default (
  state = {
    isLoading: false,
    aboutData: [],
    error: ""
  },
  action
) => {
  switch (action.type) {
    case GET_ABOUT_LOADING: {
      return { ...state, isLoading: true, error: "" };
    }
    case GET_ABOUT: {
      return {
        ...state,
        isLoading: false,
        aboutData: action.payload,
        error: ""
      };
    }
    case GET_ABOUT_ERROR: {
      return { ...state, isLoading: false, error: action.payload };
    }
    default:
      return state;
  }
};

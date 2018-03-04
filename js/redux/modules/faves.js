import { queryFave, createFave, deleteFave } from "../../config/model";

// Actions
const GET_FAVES_LOADING = "GET_FAVES_LOADING";
const GET_FAVES = "GET_FAVES";
const FAVED_OR_NOT = "FAVED_OR_NOT";
const GET_FAVES_ERROR = "GET_FAVES_ERROR";

// Actions creator

export const getFavesLoading = isLoading => ({
  type: GET_FAVES_LOADING,
  payload: isLoading
});

export const getFaves = faves => ({
  type: GET_FAVES,
  payload: faves
});

export const favedOrNot = (isFaved, session_id) => ({
  type: FAVED_OR_NOT,
  session_id: session_id,
  isFaved: isFaved
});

export const getFavesError = error => ({
  type: GET_FAVES_ERROR,
  payload: error
});

// Realm query fn

export const getRealmFaves = data => dispatch => {
  dispatch(getFavesLoading());
  try {
    dispatch(getFaves(queryFave()));
  } catch (error) {
    dispatch(getFavesError(error));
  }
};

// Reducer

export default (
  state = {
    isLoading: false,
    faves: [],
    error: ""
  },
  action
) => {
  switch (action.type) {
    case GET_FAVES_LOADING: {
      return { ...state, isLoading: true, error: "" };
    }
    case GET_FAVES: {
      return {
        ...state,
        isLoading: false,
        faves: action.payload,
        error: ""
      };
    }
    case FAVED_OR_NOT: {
      if (action.onOrOff) createFave(action.session_id);
      else deleteFave(action.session_id);
      const faves = queryFave();
      return {
        ...state,
        isLoading: false,
        faves,
        error: ""
      };
    }
    case GET_FAVES_ERROR: {
      return { ...state, isLoading: false, error: "" };
    }
    default:
      return state;
  }
};

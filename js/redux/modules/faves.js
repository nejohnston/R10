import { queryFave } from "../../config/model";

// Actions
const GET_FAVES_LOADING = "GET_FAVES_LOADING";
const GET_FAVES = "GET_FAVES";
const GET_FAVES_ERROR = "GET_FAVES_ERROR";

// Actions creator

export const getFavesLoading = isLoading => ({
  type: GET_FAVES_LOADING,
  payload: isLoading
});

export const getFaves = favesData => ({
  type: GET_FAVES,
  payload: favesData
});

export const getFavesError = error => ({
  type: GET_FAVES_ERROR,
  payload: error
});

// Realm query fn

export const getRealmFaves = data => dispatch => {
  //   dispatch(getFavesLoading());
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
    favesData: [],
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
    case GET_FAVES_ERROR: {
      return { ...state, isLoading: false, error: "" };
    }
    default:
      return state;
  }
};

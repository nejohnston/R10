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

export const fetchItemsAndUsers = () => dispatch => {
  dispatch(getAboutLoading());

  return Promise(
    fetch("https://r10app-95fea.firebaseio.com/code_of_conduct.json")
      .then(res => res.json())
      .then(data => this.setState({ data, loading: false }))
      .catch(err => console.log(err))
  );
};
// REDUCER

export default (
  state = {
    isLoading: false,
    itemsData: [],
    itemTags: [],
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
        itemsData: action.payload,
        error: ""
      };
    }
    case GET_ITEMS_ERROR: {
      return { ...state, isLoading: false, error: action.payload };
    }
    case GET_ITEM_TAG: {
      return { ...state, itemTags: action.payload };
    }
    default:
      return state;
  }
};

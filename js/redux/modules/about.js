// ACTIONS
const GET_ABOUT_LOADING = "GET_ABOUT_LOADING";
const GET_ABOUT = "GET_ABOUT";
const GET_ABOUT_ERROR = "GET_ABOUT_ERROR";

// ACTION CREATOR
export const getAboutLoading = () => ({
  type: GET_ABOUT_LOADING
});
export const getAbout = () => ({
  type: GET_ABOUT
});
export const getAboutError = error => ({
  type: GET_ABOUT_ERROR,
  payload: error
});

// ASYNC ACTION CREATOR

export const fetchItemsAndUsers = () => dispatch => {
  dispatch(getItemsLoading());

  return Promise.all(
    ["http://localhost:4000/items", "http://localhost:4000/users/"].map(url =>
      fetch(url).then(response => response.json())
    )
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

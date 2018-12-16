const initState = {
  searchByName: []
};

//Update donations inside Redux with matching search results
const donationsReducer = (state = initState, action) => {
  switch (action.type) {
    case "SEARCH_NAME_SUCCESS":
      console.log("Search successfull", action);
      return {
        ...state,
        searchByName: action.searchNameResults
      };
    case "LOGIN_SUCCESS":
      console.log("Error searching for name: ", action.err);
      return {
        ...state,
        searchByName: action.err
      };
    default:
      return state;
  }
};

export default donationsReducer;

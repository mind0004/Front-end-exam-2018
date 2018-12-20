const initState = {
  searchByName: []
};

//Update messages inside Redux with matching search results
const messagesReducer = (state = initState, action) => {
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
    case "SEARCH_NAME_UNAVAILABLE":
      console.log("Search unavailable", action);
      return {
        ...state,
        searchByName: undefined
      };
    default:
      return state;
  }
};

export default messagesReducer;

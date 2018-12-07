import overviewReducer from "./overviewReducer";
import donationsReducer from "./donationsReducer";
import messagesReducer from "./messagesReducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  overview: overviewReducer,
  donations: donationsReducer,
  messages: messagesReducer
});

export default rootReducer;

// the key name will be the data property on the state object

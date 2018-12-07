import overviewReducer from "./overviewReducer";
import donationsReducer from "./donationsReducer";
import messagesReducer from "./messagesReducer";

import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";

const rootReducer = combineReducers({
  overview: overviewReducer,
  donations: donationsReducer,
  messages: messagesReducer,
  firestore: firestoreReducer
});

export default rootReducer;

// the key name will be the data property on the state object

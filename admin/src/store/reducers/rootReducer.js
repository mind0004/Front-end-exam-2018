import overviewReducer from "./overviewReducer";
import donationsReducer from "./donationsReducer";
import messagesReducer from "./messagesReducer";
import authReducer from "./authReducer";

import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
  auth: authReducer,
  overview: overviewReducer,
  donations: donationsReducer,
  messages: messagesReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer;

// the key name will be the data property on the state object

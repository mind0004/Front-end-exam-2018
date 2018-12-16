//signIn method taking credentials as param
export const signIn = credentials => {
  /*  These parameters inside the return are only available
        because of thunk, which takes dispatch and getState
        as first params, and the rest is up to us.
        
        dispatch triggers the state change "setState(...)"
        getState returns the updated state to the reducer
        getFirebase has been defined inside index.js and is used for the async call
    */
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    //make async call to firebase
    firebase
      .auth() //use auth() service
      .signInWithEmailAndPassword(credentials.email, credentials.password) //sign in with this method passing email and password
      .then(() => {
        //succesfull response, user validated -> dispatch success
        dispatch({ type: "LOGIN_SUCCESS" });
      })
      .catch(err => {
        //failed response, user not valid -> dispatch error
        dispatch({ type: "LOGIN_ERROR", err });
      });
  };
};

//Signout all users
export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signOut() //signOut method of firebase
      .then(() => {
        dispatch({ type: "SIGNOUT_SUCCESS" }); //on success, dispatch "SIGNOUT_SUCCESS" to reducer
      });
  };
};

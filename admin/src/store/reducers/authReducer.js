//authError will display the error
const initState = {
  authError: null
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      console.log("Login error.");
      return {
        ...state,
        authError: "Login failed"
      };
    case "LOGIN_SUCCESS":
      console.log("Login successfull");
      return {
        ...state,
        authError: null
      };

    //Add following lines
    case "SIGNOUT_SUCCESS":
      console.log("Signout success");
      return state;

    default:
      return state;
  }
};

export default authReducer;

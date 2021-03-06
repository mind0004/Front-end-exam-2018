import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

//Disable component for users who are not logged in, redirect to login component
// Take Component to wrap around as parameter
const IsAuthUser = WrappedComponent => {
  /* 
      Create a stateful/stateless component inside the HOC
      and return either the WrappedComponent or
      redirect to /.
      If user is logged in, disable access to / 
  */
  const HOCComponent = props => {
    const { auth } = props;
    if (!auth.uid) {
      return <Redirect to="/" />;
    } else {
      return <WrappedComponent {...props} />;
    }
  };

  //Get state data from firebase > redux and map it to props
  const mapStateToProps = state => {
    return {
      auth: state.firebase.auth
    };
  };

  //Return the component inside the HOC connected to redux
  return connect(mapStateToProps)(HOCComponent);
};

//Export the HOC
export default IsAuthUser;

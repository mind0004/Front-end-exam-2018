import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const DisableRouteForAuthUser = WrappedComponent => {
  const HOCComponent = props => {
    console.log(props);
    const { auth } = props;
    if (!auth.uid) {
      return <WrappedComponent {...props} />;
    } else {
      return <Redirect to="/dashboard/" />;
    }
  };

  const mapStateToProps = state => {
    return {
      auth: state.firebase.auth
    };
  };

  return connect(mapStateToProps)(HOCComponent);
};

export default DisableRouteForAuthUser;

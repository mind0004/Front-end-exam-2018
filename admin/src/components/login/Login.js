import React, { Component } from "react";
import Background from "../../assets/img/background-line-grey-half.svg";
import DisableRouteForAuthUser from "../hoc/DisableRouteForAuthUser";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { signIn } from "../../store/actions/authAction";
import { compose } from "redux";

class Login extends Component {
  state = {
    email: null,
    password: null
  };

  handleSubmit = () => {
    //console.log(typeof this.state.email);

    this.props.signIn(this.state);
  };

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleInputChangeEmail = e => {
    //console.log(e.target.name, " = ", e.target.value);

    this.setState({
      email: e.target.value
    });
    //console.log(this.state);
  };

  handleInputChangePassword = e => {
    //console.log(e.target.name, " = ", e.target.value);

    this.setState({
      password: e.target.value
    });
    //console.log(this.state);
  };

  render() {
    return (
      <div id="login">
        <div className="background">
          <div>
            <img src={Background} alt="background shape" />
          </div>
        </div>

        <div className="container">
          <h2>Admin Login</h2>
          <form>
            <div className="input-field">
              <input
                type="email"
                name="email"
                placeholder=" "
                onChange={this.handleInputChangeEmail}
              />
              <label>E-mail</label>
              <div className="underline" />
            </div>

            <div className="input-field">
              <input
                type="password"
                name="password"
                placeholder=" "
                onChange={this.handleInputChangePassword}
              />
              <label>Password</label>
              <div className="underline" />
            </div>

            <div className="forgot">
              <p>Forgot email/password?</p>
            </div>

            <div className="submit" onClick={this.handleSubmit}>
              <Link to="./dashboard">
                <input type="submit" value="Login" className="submit-button" />
              </Link>
            </div>
          </form>
        </div>

        <div className="return">
          <a href="../index.html">&lt; return to Polyeco</a>
        </div>
      </div>
    );
  }
}

//make authError state from redux available to this component as "this.props.authError"
const mapStateToProps = state => {
  return {
    authError: state.auth.authError
  };
};

//use the signIn action as a prop which takes a parameter (the credentials)
//run the action and dispatch a response to authReducer with updated state
const mapDispatchToProps = dispatch => {
  return {
    signIn: creds => dispatch(signIn(creds))
  };
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  DisableRouteForAuthUser
)(Login);

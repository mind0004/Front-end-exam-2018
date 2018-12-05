import React, { Component } from "react";
import Background from "../../assets/img/background-line-grey-half.svg";

class Login extends Component {
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
              <input type="text" name="email" placeholder=" " />
              <label>E-mail</label>
              <div className="underline" />
            </div>

            <div className="input-field">
              <input type="text" name="email" placeholder=" " />
              <label>Password</label>
              <div className="underline" />
            </div>

            <div className="forgot">
              <p>Forgot email/password?</p>
            </div>

            <div className="submit">
              <input type="submit" value="Login" className="submit-button" />
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

export default Login;

import React, { Component } from "react";

class Login extends Component {
  render() {
    return (
      <div id="login">
        <div className="container">
          <h2>Admin Login</h2>

          <form>
            <div className="input-field">
              <input type="text" name="email" placeholder=" " />{" "}
              <label>E-mail</label>
              <div className="underline" />
            </div>

            <div className="input-field">
              <input type="text" name="email" placeholder=" " />{" "}
              <label>Password</label>
              <div className="underline" />
            </div>

            <div>
              <p>Forgot email/password?</p>
            </div>

            <div className="submit-button">
              <input type="submit" />
            </div>
          </form>

          <div>
            <a href="../index.html" class="go-back">
              &lt; return to Polyeco
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;

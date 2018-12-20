import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./components/login/Login";
import Dashboard from "./components/dashboard/Dashboard";
import config from "./config/config.json";

//Main Component holding all components
class App extends Component {
  render() {
    console.log(this.props.location);
    return (
      <BrowserRouter basename={config.path}>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/dashboard" component={Dashboard} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

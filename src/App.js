import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import axios from "axios";
import Order from "./pages/Order";
import Profile from "./pages/Profile";
import Nav from "./Nav";

class App extends Component {
  state = {
    data: "",
  };
  componentDidMount() {
    this.fetchData()
  }

  fetchData = () => {
     axios
      .get("https://indapi.kumba.io/webdev/assignment")
      .then((resp) => {
        this.setState({
          data: resp.data,
        });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })    
  };

  render() {
    return (
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route
            exact
            path="/order"
            render={() => <Order data={ this.state.data} />}
          />
          <Route
            path="/profile"
            render={() => <Profile data={this.state.data} />}
          />
          <Redirect from="/" to="/profile" />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

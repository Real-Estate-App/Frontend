import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// our store, and actions
import { Provider } from "react-redux";
import store from "./store/store";

// components

// react alert boilerplate
import { Provider as AlertProvider, positions } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

const alertOptions = {
  timeout: 3000,
  position: positions.BOTTOM_CENTER
};

class App extends Component {
  componentDidMount() {
    // add action to check if a user is logged in
  }

  render() {
    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <Router>
            <Fragment>
              {/* add navbar and alerts here */}
              <h1>Real Estate App</h1>
              <div className="container">
                <Switch>{/* add routes */}</Switch>
              </div>
            </Fragment>
          </Router>
        </AlertProvider>
      </Provider>
    );
  }
}

export default App;

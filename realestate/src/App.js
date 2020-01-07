import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// our store, and actions
import { Provider } from "react-redux";
import store from "./store/store";

// components
import { Navbar, Home, About, Footer, Login, Register} from './views';

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
              <Navbar />
              <Switch>
                <Route exact path='/' render={Home} />
                <Route path='/about' render={About} />
                <Route path='/login' component={Login} />
                <Route path='/register' component={Register} />
              </Switch>
              <Footer />
            </Fragment>
          </Router>
        </AlertProvider>
      </Provider>
    );
  }
}

export default App;

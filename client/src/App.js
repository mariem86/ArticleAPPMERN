import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavBar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Alert from "./components/layout/Alert";

import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Dashboard from "./components/dashboard/Dashboard";


import PrivateRoute from "./components/routing/PrivateRoute";

//redux
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./js/actions/authAction";
import setAuthToken from "./utils/setAuthToken";

import "./App.css";
import ArticleList from "./components/article/ArticleList";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <NavBar />
          <Route exact path="/" component={Landing} />
          <section className="container">
            <Alert />
            <Switch>
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
             

              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute path="/articles" component={ArticleList} />
              
             
             
             

            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
};
export default App;

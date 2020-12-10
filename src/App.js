import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./store";

import NavBar from "./components/NavBar";
import Explore from "./components/Explore";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Provider store={store}>
        <div className="body-bg">
          <NavBar></NavBar>
          <main>
            <Switch>
              <Route path="/explore">
                <Explore></Explore>
              </Route>
              <Redirect to="/explore"></Redirect>
            </Switch>
          </main>
          <Footer></Footer>
        </div>
      </Provider>
    </React.Fragment>
  );
}

export default App;

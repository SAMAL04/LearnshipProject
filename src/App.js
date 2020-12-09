import "./styles.css";
import Blog from "./Blog/Blog";
import React, { Fragment, useEffect, useContext } from "react";
import { Switch, Route } from "react-router-dom";
import routes from "./routes/routes";
import LoginPage from "./LoginPage/LoginPage";

function App() {
  return (
    <Fragment>
      <Blog />
      <Route path={routes.login}>
        <LoginPage />
      </Route>
    </Fragment>
  );
}

export default App;

import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import AppHeader from "./AppHeader";
import { routes } from "./pages/routes";

function App() {
  return (
    <Router basename={"/"}>
      <AppHeader routes={routes} />
      <Switch>
        {routes.map((route, i) => (
          <Route path={route.path} exact={route.isExact} key={i}>
            <route.component />
          </Route>
        ))}
      </Switch>
    </Router>
  );
}

export default App;

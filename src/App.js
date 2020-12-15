import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppHeader from "./AppHeader";
import { routes } from "./pages/routes";
import "./styles/App.scss";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <AppHeader routes={routes} />
      <Switch>
        {routes.map((route, i) => (
          <Route path={route.path} key={i}>
            <route.component />
          </Route>
        ))}
      </Switch>
    </Router>
  );
}

export default App;

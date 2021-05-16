import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import AppHeader from "./AppHeader";
import { routes } from "./pages/routes";
import Footer from "./components/Footer";

function withFullScreen(Component) {
  const fullScreenStyles = {
    minHeight: "89vh",
  };
  return () => (
    <section style={fullScreenStyles}>
      <Component />
    </section>
  );
}

function App() {
  return (
    <Router basename={"/"}>
      <AppHeader routes={routes} />
      <Switch>
        {routes.map((route, i) => (
          <Route
            path={route.path}
            exact={route.isExact}
            key={i}
            component={withFullScreen(route.component)}
          />
        ))}
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;

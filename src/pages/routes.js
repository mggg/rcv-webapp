import SimulationPage from "./SimulationPage";
import EnsembleSimulationPage from "./EnsembleSimulationPage";
import AboutPage from "./AboutPage";

// Config file serving as a single point of truth for all application routes
const routes = [
  {
    path: `/about`,
    display: "About",
    component: AboutPage,
  },
  {
    path: `/ensemble`,
    display: "Ensemble",
    component: EnsembleSimulationPage,
  },
  {
    path: `/`,
    isHome: "true",
    display: "Home",
    component: SimulationPage,
  },
];

function getHomePath(routes) {
  return routes.find((route) => route.isHome).path;
}

export { routes, getHomePath };

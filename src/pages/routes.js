import EnsembleSimulationPage from "./EnsembleSimulationPage";
import AboutPage from "./AboutPage";
// import SimulationPage from "./SimulationPage";

// Config file serving as a single point of truth for all application routes
const routes = [
  {
    path: `/about`,
    display: "About",
    component: AboutPage,
  },
  // {
  //   path: `/oldSimulations`,
  //   display: "Old Simulation",
  //   component: SimulationPage,
  // },
  {
    path: `/`,
    isHome: "true",
    display: "Home",
    component: EnsembleSimulationPage,
  },
];

function getHomePath(routes) {
  return routes.find((route) => route.isHome).path;
}

export { routes, getHomePath };

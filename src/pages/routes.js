import EnsembleSimulationPage from "./EnsembleSimulationPage";
import AboutPage from "./AboutPage";
// import SimulationPage from "./SimulationPage";

// Config file serving as a single point of truth for all application routes
const routes = [
  {
    path: `/`,
    isExact: true,
    display: "Home",
    component: AboutPage,
  },
  {
    path: `/simulation`,
    display: "Simulation",
    component: EnsembleSimulationPage,
  },
];

export { routes };

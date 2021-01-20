import SimulationPage from "./SimulationPage";
import AboutPage from "./AboutPage";

// Config file serving as a single point of truth for all application routes
const routes = [
  {
    path: `/about`,
    display: "About",
    component: AboutPage,
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

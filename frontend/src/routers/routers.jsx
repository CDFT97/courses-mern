import { Routes, Route } from "react-router-dom";
import routes from "./routes_list";

// Función recursiva para mapear rutas
const createRoutes = (routes) => {
  return routes.map((route, index) => {
    const { path, component: Component, routes: childRoutes } = route;

    return (
      <Route
        key={index}
        path={path}
        element={<Component />}
      >
        {childRoutes && createRoutes(childRoutes)}
      </Route>
    );
  });
};

// Exporta las rutas procesadas
export const AppRoutes = () => <Routes>{createRoutes(routes)}</Routes>;
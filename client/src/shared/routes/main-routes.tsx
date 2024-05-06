import { Routes, Route } from "react-router-dom";
import { PUBLIC_ROUTES } from "./routes";
import { FunctionComponent } from "react";
import PrivateRoute from "../../components/PrivateRoute";

interface MainRoutesProps {}

const MainRoutes: FunctionComponent<MainRoutesProps> = () => {
  return (
    <Routes>
      {PUBLIC_ROUTES.map((route, index) => {
        // Determine the component to render, wrapped with PrivateRoute if necessary
        const RouteComponent = route.isPrivate ? (
          <PrivateRoute>
            <route.element />
          </PrivateRoute>
        ) : (
          <route.element />
        );

        return (
          <Route key={index} path={route.path} element={RouteComponent}>
            {route.children &&
              route.children.map((child: any, i: any) => (
                <Route key={i} path={child.path} element={<child.element />} />
              ))}
          </Route>
        );
      })}
    </Routes>
  );
};

export default MainRoutes;

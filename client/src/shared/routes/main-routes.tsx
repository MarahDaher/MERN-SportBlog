import { Routes, Route } from "react-router-dom";
import { PUBLIC_ROUTES } from "./routes";
import { FunctionComponent } from "react";

interface MainRoutesProps {}

const MainRoutes: FunctionComponent<MainRoutesProps> = () => {
  return (
    <Routes>
      {PUBLIC_ROUTES.map((route, index) => (
        <Route key={index} path={route.path} element={<route.element />}>
          {route.children &&
            route.children.map((child: any, i: any) => (
              <Route key={i} path={child.path} element={<child.element />} />
            ))}
        </Route>
      ))}
    </Routes>
  );
};

export default MainRoutes;

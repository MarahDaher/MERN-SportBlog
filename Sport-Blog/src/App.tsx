import { BrowserRouter } from "react-router-dom";
import MainRoutes from "./shared/routes/main-routes";

export default function App() {
  return (
    <BrowserRouter>
      <MainRoutes />
    </BrowserRouter>
  );
}

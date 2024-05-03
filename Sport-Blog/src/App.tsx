import { BrowserRouter } from "react-router-dom";
import MainRoutes from "./shared/routes/main-routes";
import Header from "./components/Header";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <MainRoutes />
    </BrowserRouter>
  );
}

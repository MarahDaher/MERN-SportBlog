import About from "../../pages/About";
import Dashboard from "../../pages/Dashboard";
import Home from "../../pages/Home";
import Search from "../../pages/Search";
import SignIn from "../../pages/SignIn";
import SignUp from "../../pages/SignUp";
import { RouterModel } from "../models/router";

export const PUBLIC_ROUTES: RouterModel[] = [
  {
    path: "",
    element: Home,
    title: "Home",
  },
  {
    path: "/dashboard",
    element: Dashboard,
    title: "Dashboard",
  },
  {
    path: "/about",
    element: About,
    title: "About",
  },
  {
    path: "/sign-in",
    element: SignIn,
    title: "Sign In",
  },
  {
    path: "/sign-up",
    element: SignUp,
    title: "Sign Up",
  },
  {
    path: "/search",
    element: Search,
    title: "Search",
  },
];

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
    isPrivate: true,
  },
  {
    path: "/dashboard",
    element: Dashboard,
    title: "Dashboard",
    isPrivate: true,
  },
  {
    path: "/about",
    element: About,
    title: "About",
    isPrivate: true,
  },
  {
    path: "/sign-in",
    element: SignIn,
    title: "Sign In",
    isPrivate: false,
  },
  {
    path: "/sign-up",
    element: SignUp,
    title: "Sign Up",
    isPrivate: false,
  },
  {
    path: "/search",
    element: Search,
    title: "Search",
    isPrivate: false,
  },
];

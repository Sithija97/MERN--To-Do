import { Home, Login, Register } from "pages";
import { createBrowserRouter } from "react-router-dom";

export const ROOT = "/";
export const LOGIN = "/login";
export const REGISTER = "/register";
export const PROTECTED = "/protected";
export const HOME = "/home";

export const router = createBrowserRouter([
  { path: ROOT, element: <Login /> },
  { path: LOGIN, element: <Login /> },
  { path: REGISTER, element: <Register /> },
  { path: HOME, element: <Home /> },
]);

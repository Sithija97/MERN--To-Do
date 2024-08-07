import { createBrowserRouter } from "react-router-dom";
import {
  Archive,
  Home,
  Notes,
  RootPage,
  SignInPage,
  SignUpPage,
  Trash,
} from "../pages";

export const router = createBrowserRouter([
  { path: "/sign-in/*", element: <SignInPage /> },
  { path: "/sign-up/*", element: <SignUpPage /> },
  {
    path: "/",
    element: <RootPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/archive", element: <Archive /> },
      { path: "/trash", element: <Trash /> },
      { path: "/notes", element: <Notes /> },
    ],
  },
]);

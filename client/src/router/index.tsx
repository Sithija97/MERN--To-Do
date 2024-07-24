import { createBrowserRouter } from "react-router-dom";
import { Home, Notes, RootPage, SignInPage, SignUpPage } from "../pages";

export const router = createBrowserRouter([
  { path: "/sign-in/*", element: <SignInPage /> },
  { path: "/sign-up/*", element: <SignUpPage /> },
  {
    path: "/",
    element: <RootPage />,
    children: [
      { path: "/", element: <Home /> },
      // { path: "/notes", element: <Notes /> },
    ],
  },
]);

import { createBrowserRouter } from "react-router-dom";
import { RootPage, SignIn, SignUp } from "../pages";

export const router = createBrowserRouter([
  { path: "/sign-in/*", element: <SignIn /> },
  { path: "/sign-up/*", element: <SignUp /> },
  {
    path: "/",
    element: <RootPage />,
  },
]);

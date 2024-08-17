import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { ClerkProvider } from "@clerk/clerk-react";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

function App() {
  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} signInForceRedirectUrl="/">
      <section
        className={`min-h-screen ${
          import.meta.env.VITE_DEV_ENV === "development" ? "debug-screens" : ""
        }`}
      >
        <RouterProvider router={router} />
      </section>
    </ClerkProvider>
  );
}

export default App;

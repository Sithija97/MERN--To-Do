import { RouterProvider } from "react-router-dom";
import { router } from "./router";

function App() {
  return (
    <section
      className={`min-h-screen  ${
        import.meta.env.VITE_DEV_ENV === "development" ? "debug-screens" : ""
      }`}
    >
      <RouterProvider router={router} />
    </section>
  );
}

export default App;

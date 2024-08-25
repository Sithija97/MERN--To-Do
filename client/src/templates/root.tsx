import { Outlet } from "react-router-dom";
import { cn } from "../lib/utils";
import { SideNavBar } from "../organisms";
import { Toaster } from "../atoms/ui/toaster";

export const RootLayout = () => {
  return (
    <section className={cn("h-screen w-full flex")}>
      {/* sidebar */}
      <div className=" bg-blue-800">
        <SideNavBar />
      </div>

      {/* main page */}
      <div className="w-full h-full">
        <Outlet />
        <Toaster />
      </div>
    </section>
  );
};

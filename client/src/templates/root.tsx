import { Outlet } from "react-router-dom";
import { cn } from "../lib/utils";
import { SideNavBar } from "../organisms";

export const RootLayout = () => {
  return (
    <section className={cn("h-full w-full flex")}>
      {/* sidebar */}
      <div className=" bg-slate-800">
        <SideNavBar />
      </div>

      {/* main page */}
      <div className="w-full h-full">
        <Outlet />
      </div>
    </section>
  );
};

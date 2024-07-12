import {
  ChevronRight,
  House,
  Settings,
  LayoutGrid,
  Rocket,
  UserRound,
} from "lucide-react";
import { useState } from "react";
import { useWindowWidth } from "@react-hook/window-size";
import { Button } from "../atoms/ui/button";
import { NavBar } from "./navbar";

export const SideNavBar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const toggleSidebar = () => setIsCollapsed(!isCollapsed);

  const onlyWidth = useWindowWidth();
  const mobileWidth = onlyWidth < 768;

  return (
    <div className={`relative px-3 pb-10 pt-24 ${!isCollapsed && "min-w-64"}`}>
      {!mobileWidth && (
        <div className="absolute right-[-20px] top-7">
          <Button
            onClick={toggleSidebar}
            variant="secondary"
            className=" rounded-full p-2"
          >
            <ChevronRight />
          </Button>
        </div>
      )}
      <NavBar
        isCollapsed={mobileWidth ? true : isCollapsed}
        links={[
          {
            title: "Home",
            href: "#",
            icon: House,
            variant: "default",
          },
          {
            title: "Community",
            href: "#",
            icon: Rocket,
            variant: "ghost",
          },
          {
            title: "Tools",
            href: "#",
            icon: LayoutGrid,
            variant: "ghost",
          },
          {
            title: "Settings",
            href: "#",
            icon: Settings,
            variant: "ghost",
          },
          {
            title: "User",
            href: "#",
            icon: UserRound,
            variant: "ghost",
          },
        ]}
      />
    </div>
  );
};

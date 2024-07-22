import {
  ChevronRight,
  House,
  CirclePlus,
  NotebookPen,
  SlidersHorizontal,
} from "lucide-react";
import { useState } from "react";
import { useWindowWidth } from "@react-hook/window-size";
import { NavBar } from "../molecules";
import { Button } from "../attoms/ui/button";
import { AddCategorySection } from "../molecules/add-category-section";
import { useNavigate } from "react-router-dom";

export const SideNavBar = () => {
  const navigate = useNavigate();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsCollapsed(!isCollapsed);

  const openAddCategory = () => setIsOpen(true);
  const closeAddCategory = () => setIsOpen(false);

  const onlyWidth = useWindowWidth();
  const mobileWidth = onlyWidth < 768;

  const navigateToHome = () => navigate("/");
  const navigateToNotes = () => navigate("/notes");

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
            onclick: navigateToHome,
          },
          {
            title: "Notes",
            href: "/notes",
            icon: NotebookPen,
            variant: "ghost",
            onclick: navigateToNotes,
          },
          {
            title: "Categories",
            href: "#",
            icon: CirclePlus,
            variant: "ghost",
            onclick: openAddCategory,
          },
          {
            title: "Filters",
            href: "#",
            icon: SlidersHorizontal,
            variant: "ghost",
          },
        ]}
      />
      <AddCategorySection isOpen={isOpen} onClose={closeAddCategory} />
    </div>
  );
};

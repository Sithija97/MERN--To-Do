import {
  ChevronRight,
  House,
  CirclePlus,
  // SlidersHorizontal,
  // NotebookPen,
  Trash,
  Archive,
  SlidersHorizontal,
  NotebookPen,
} from "lucide-react";
import { useState } from "react";
import { useWindowWidth } from "@react-hook/window-size";
import { NavBar } from "../molecules";
import { Button } from "../attoms/ui/button";
import { useNavigate } from "react-router-dom";
import { AddCategorySection } from "./add-category-section";
import { AddFiltersSection } from "./add-filters-section";

export const SideNavBar = () => {
  const navigate = useNavigate();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenFilters, setIsOpenFilters] = useState(false);
  const toggleSidebar = () => setIsCollapsed(!isCollapsed);

  const handleAddCategory = () => setIsOpen(!isOpen);
  const handleAddFilters = () => setIsOpenFilters(!isOpenFilters);

  const onlyWidth = useWindowWidth();
  const mobileWidth = onlyWidth < 768;

  const navigateToHome = () => navigate("/");
  const navigateToArchive = () => navigate("/archive");
  const navigateToTrash = () => navigate("/trash");
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
            href: "#",
            icon: NotebookPen,
            variant: "ghost",
            onclick: navigateToNotes,
          },
          {
            title: "Categories",
            href: "#",
            icon: CirclePlus,
            variant: "ghost",
            onclick: handleAddCategory,
          },
          {
            title: "Filters",
            href: "#",
            icon: SlidersHorizontal,
            variant: "ghost",
            onclick: handleAddFilters,
          },
          {
            title: "Archive",
            href: "#",
            icon: Archive,
            variant: "ghost",
            onclick: navigateToArchive,
          },
          {
            title: "Trash",
            href: "#",
            icon: Trash,
            variant: "ghost",
            onclick: navigateToTrash,
          },
        ]}
      />
      <AddCategorySection isOpen={isOpen} onClose={handleAddCategory} />
      <AddFiltersSection isOpen={isOpenFilters} onClose={handleAddFilters} />
    </div>
  );
};

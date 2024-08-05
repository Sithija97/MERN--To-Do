import { ReactNode, useState } from "react";
import { Button } from "../attoms/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../attoms/ui/dropdown-menu";
import { useGetCategoriesQuery } from "../store/category-slice";
import { Category } from "../types";

type IProps = {
  dropDownTrigger?: ReactNode;
};

export const CategoryDropDown = ({ dropDownTrigger }: IProps) => {
  const { data: categories = [], isSuccess } = useGetCategoriesQuery({});
  console.log("çategory :", categories);
  const [position, setPosition] = useState("general");
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {dropDownTrigger || <Button variant="outline">Select category</Button>}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Available categories:</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          {categories &&
            isSuccess &&
            categories.map((category: Category) => (
              <DropdownMenuRadioItem
                key={category._id}
                value={category.title.toLowerCase()}
              >
                {category.title}
              </DropdownMenuRadioItem>
            ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

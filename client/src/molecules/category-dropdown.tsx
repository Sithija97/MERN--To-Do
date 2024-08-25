import { ReactNode, useState } from "react";
import { Button } from "../atoms/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../atoms/ui/dropdown-menu";
import { useGetCategoriesQuery } from "../store/category-slice";
import { Category } from "../types";
import { isEmptyArray } from "../utils";

type IProps = {
  category: string;
  dropDownTrigger?: ReactNode;
  setCategory: (value: string) => void;
};

export const CategoryDropDown = ({
  category,
  dropDownTrigger,
  setCategory,
}: IProps) => {
  const { data: categories = [], isSuccess } = useGetCategoriesQuery({});
  const [position, setPosition] = useState(category);

  const handleCategorySelect = (value: string) => {
    setPosition(value);
    setCategory(value);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {dropDownTrigger || <Button variant="outline">Select category</Button>}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Available categories:</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          value={position}
          onValueChange={handleCategorySelect}
        >
          {isSuccess &&
            !isEmptyArray(categories) &&
            categories.map((category: Category) => (
              <DropdownMenuRadioItem key={category._id} value={category._id}>
                {category.title}
              </DropdownMenuRadioItem>
            ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

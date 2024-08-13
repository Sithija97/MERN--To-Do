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

type IProps = {
  priority: string;
  dropDownTrigger?: ReactNode;
  setPriority: (value: string) => void;
};

export const PriorityDropDown = ({
  priority,
  dropDownTrigger,
  setPriority,
}: IProps) => {
  const [position, setPosition] = useState(priority);

  const handleCategorySelect = (value: string) => {
    setPosition(value);
    setPriority(value);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {dropDownTrigger || <Button variant="outline">Priority</Button>}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Select priority:</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          value={position}
          onValueChange={handleCategorySelect}
        >
          <DropdownMenuRadioItem key={"high"} value={"high"}>
            High
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem key={"medium"} value={"medium"}>
            Medium
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem key={"low"} value={"low"}>
            Low
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

import { useState } from "react";

export const useAddCategory = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => {
    console.log("first:", isOpen);
    setIsOpen(true);
  };
  const closeDialog = () => setIsOpen(false);

  return { isOpen, openDialog, closeDialog };
};

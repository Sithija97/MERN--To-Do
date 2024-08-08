import { useState } from "react";
import { Button } from "../attoms/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../attoms/ui/dialog";
import { Input } from "../attoms/ui/input";
import { Label } from "../attoms/ui/label";
import { format } from "date-fns";
import { toast } from "../attoms/ui/use-toast";
import {
  useAddNewCategoryMutation,
  useDeleteCategoryMutation,
  useGetCategoriesQuery,
} from "../store/category-slice";
import { isEmptyArray } from "../utils";
import { Badge } from "../attoms/ui/badge";
import { Category } from "../types";
import { LoaderCircle, X } from "lucide-react";

type IProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const AddCategorySection = ({ isOpen, onClose }: IProps) => {
  const [addNewCategory] = useAddNewCategoryMutation();
  const [deleteCategory] = useDeleteCategoryMutation();
  const { data: categories = [] } = useGetCategoriesQuery({});

  const initialState = { title: "" };
  const [category, setCategory] = useState(initialState);
  const [deletingCategoryId, setDeletingCategoryId] = useState<string | null>(
    null
  );

  const isAddCategoryDisabled = category.title.trim() === "";

  const handleAddCategory = async (
    e: React.MouseEvent<HTMLButtonElement> | React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    if (!isAddCategoryDisabled) {
      await addNewCategory(category);
      setCategory(initialState);
      toast({
        title: "Category has been successfully created.",
        description: format(new Date(), "EEEE, MMMM do, yyyy 'at' h:mm a"),
        duration: 1500,
      });
      // onClose();
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setCategory({ ...category, [name]: value });
  };

  const handleDeleteCategory = async (category: Category) => {
    setDeletingCategoryId(category._id);
    await deleteCategory(category);
    setDeletingCategoryId(null);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md xl:max-w-fit">
        <form onSubmit={handleAddCategory} className="flex flex-col gap-5">
          <DialogHeader>
            <DialogTitle>Create Category</DialogTitle>
            <DialogDescription>
              Easily organize your items into groups for better management.
            </DialogDescription>
          </DialogHeader>
          <div className="grid grid-cols-6 gap-1 w-full">
            {!isEmptyArray(categories) &&
              categories.map((category: Category) => (
                <Badge
                  key={category._id}
                  variant="secondary"
                  className="flex items-center justify-around hover:bg-slate-200"
                >
                  {category.title}
                  {deletingCategoryId !== category._id ? (
                    <X
                      size="10px"
                      className="cursor-pointer"
                      onClick={() => handleDeleteCategory(category)}
                    />
                  ) : (
                    <LoaderCircle
                      key={category._id}
                      size="10px"
                      className="animate-spin-slow"
                    />
                  )}
                </Badge>
              ))}
          </div>
          <div className="flex items-center space-x-2">
            <div className="grid flex-1 gap-2">
              <Label htmlFor="link" className="sr-only">
                Link
              </Label>
              <Input
                id="link"
                placeholder="Add your category"
                name="title"
                value={category.title}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <DialogFooter className="sm:justify-start">
            <Button
              type="submit"
              variant="default"
              className="ml-auto"
              onClick={handleAddCategory}
            >
              Create
            </Button>
            <DialogClose asChild>
              <Button type="button" variant="secondary" onClick={onClose}>
                Close
              </Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

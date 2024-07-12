import { Button } from "../atoms/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../atoms/ui/drawer";
import { SideNavBar } from "../organisms/sidebar";
import { cn } from "../lib/utils";

export const RootLayout = () => {
  return (
    <section className={cn("min-h-screen w-full flex")}>
      {/* sidebar */}
      <div className="border-r">
        <SideNavBar />
      </div>

      {/* main page */}
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="md:col-span-2  w-[77%] border-r h-screen">
            {/* <Outlet /> */}
            <Drawer>
              <DrawerTrigger>
                <Button variant="outline">Open Drawer</Button>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                  <DrawerDescription>
                    This action cannot be undone.
                  </DrawerDescription>
                </DrawerHeader>
                <DrawerFooter>
                  <DrawerClose>
                    <Button variant="outline">Cancel</Button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </div>
    </section>
  );
};

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
import img from "../assets/Emails-rafiki.svg";

export const RootLayout = () => {
  return (
    <section className={cn("min-h-screen w-full flex")}>
      {/* sidebar */}
      <div className="border-r">
        <SideNavBar />
      </div>

      {/* main page */}
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="h-screen border-r bg-slate-50">
            {/* <Outlet /> */}
            <Drawer>
              <DrawerTrigger>
                <span>open drawer</span>
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
                    <span className="flex justify-end">cancel</span>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </div>
          <div className="w-full flex items-center justify-center">
            <img
              src={img}
              alt="bg-image"
              className="h-[50%] w-[50%] rounded-full opacity-90"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

import { LucideIcon } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../attoms/ui/tooltip";
import { FC } from "react";
import { cn } from "../lib/utils";
import { useLocation } from "react-router-dom";
import { SignedIn, useAuth, UserButton } from "@clerk/clerk-react";
import { buttonVariants } from "../attoms/ui/button";

type IProps = {
  isCollapsed: boolean;
  links: {
    title: string;
    href: string;
    label?: string;
    icon: LucideIcon;
    variant: "default" | "ghost";
  }[];
};

export const NavBar: FC<IProps> = ({ links, isCollapsed }) => {
  const { pathname } = useLocation();
  const { userId } = useAuth();
  return (
    <TooltipProvider>
      <div
        data-collapsed={isCollapsed}
        className="group flex flex-row gap-4 py-2 data-[collapsed=true]:py-2"
      >
        <nav className="grid gap-3 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
          {links.map((link, index) =>
            isCollapsed ? (
              <Tooltip key={index} delayDuration={0}>
                <TooltipTrigger asChild>
                  <div
                    className={cn(
                      buttonVariants({
                        variant: link.href === pathname ? "default" : "ghost",
                        size: "icon",
                      }),
                      "h-9 w-9",
                      link.variant === "default" &&
                        "dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white"
                    )}
                  >
                    <link.icon className="h-5 w-5 text-blue-500" />
                    <span className="sr-only">{link.title}</span>
                  </div>
                </TooltipTrigger>
                <TooltipContent
                  side="right"
                  className="flex items-center gap-4"
                >
                  {link.title}
                  {link.label && (
                    <span className="ml-auto text-muted-foreground">
                      {link.label}
                    </span>
                  )}
                </TooltipContent>
              </Tooltip>
            ) : (
              <div
                key={index}
                className={cn(
                  buttonVariants({
                    variant: link.href === pathname ? "default" : "ghost",
                    size: "sm",
                  }),
                  link.variant === "default" &&
                    "dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white",
                  "justify-start"
                )}
              >
                <link.icon className="mr-2 h-5 w-5 text-blue-500" />
                <div className="font-normal text-white">{link.title}</div>
                {link.label && (
                  <span
                    className={cn(
                      "ml-auto",
                      link.variant === "default" &&
                        "text-background dark:text-white"
                    )}
                  >
                    {link.label}
                  </span>
                )}
              </div>
            )
          )}
          <div
            className={cn(
              buttonVariants({
                variant: "ghost",
                size: "icon",
              }),
              "h-9 w-9"
            )}
          >
            {userId && (
              <SignedIn>
                <UserButton afterSignOutUrl="/" />
              </SignedIn>
            )}
          </div>
        </nav>
      </div>
    </TooltipProvider>
  );
};

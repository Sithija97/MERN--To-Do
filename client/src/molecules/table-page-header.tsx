import { SignedIn, useClerk, UserButton } from "@clerk/clerk-react";

type IProps = {
  title: string;
};

export const TablePageHeader = ({ title }: IProps) => {
  const { user } = useClerk();
  return (
    <div className="flex items-center justify-between space-y-2">
      <div>
        <h2 className="text-lg font-bold tracking-tight">{`Welcome back ${user?.firstName}`}</h2>
        <p className="text-muted-foreground">
          {/* Here&apos;s a list of your notes. */}
          {title}
        </p>
      </div>
      <div className="flex items-center space-x-2">
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
      </div>
    </div>
  );
};

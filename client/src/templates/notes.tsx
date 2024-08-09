import { SignedIn, useClerk, UserButton } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import tasksData from "../data/tasks.json";
import { DataTable } from "../organisms/data-table";
import { columns } from "../organisms/columns";

type Tasks = {
  id: string;
  title: string;
  status: string;
  label: string;
  priority: string;
};

export const NotesTemplate = () => {
  const { user } = useClerk();
  const [tasks, setTasks] = useState<Tasks[]>([]);

  useEffect(() => {
    setTasks(tasksData);
  }, []);

  return (
    <div className="h-screen flex-1 flex-col space-y-6 p-8 md:flex">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">{`Welcome back ${user?.firstName}`}</h2>
          <p className="text-muted-foreground">
            Here&apos;s a list of your tasks for this month!
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>
      </div>
      <DataTable data={tasks} columns={columns} />
    </div>
  );
};

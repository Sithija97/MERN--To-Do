import { useAuth } from "@clerk/clerk-react";
import { AddNoteSection } from "../molecules";

export const NotesSection = () => {
  const { userId } = useAuth();
  return (
    <div>
      <AddNoteSection />
      <p>NotesSection</p>
      <p>{userId}</p>
    </div>
  );
};

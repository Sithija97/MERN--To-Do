import { DataTable } from "../organisms/data-table";
import { columns } from "../organisms/columns";
import { TablePageHeader } from "../molecules/table-page-header";

type IProps = {
  notes: any[];
};

export const TrashTemplate = ({ notes }: IProps) => {
  return (
    <div className="flex-1 flex-col space-y-2 p-8 md:flex">
      <TablePageHeader title={`Here's a list of your notes in trash.`} />
      <DataTable data={notes} columns={columns} />
    </div>
  );
};

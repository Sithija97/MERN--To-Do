import { ChangeEventHandler, FC } from "react";

type IProps = {
  value: string;
  onChange: ChangeEventHandler;
};

export const Searchbar: FC<IProps> = ({ value, onChange }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search Notes"
        className="w-full text-xs bg-transparent py-[11px] outline-none"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

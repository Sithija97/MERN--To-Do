import { useState, useEffect } from "react";
import { Mail, mails } from "../data/mails";

type Config = {
  selected: Mail["id"] | null;
};

const useMail = (): [Config, React.Dispatch<Config>] => {
  const [mail, setMail] = useState<Config>({ selected: mails[0].id });

  // Ensure initial selection remains consistent even on re-renders
  useEffect(() => {
    if (!mail.selected && mails.length > 0) {
      setMail({ selected: mails[0].id });
    }
  }, [mails]); // Only re-run when mails data changes

  return [mail, setMail];
};

export default useMail;

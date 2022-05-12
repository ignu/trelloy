import { FC, useCallback, useState } from "react";

type PropTypes = {
  text: string;
  className: string;
};

const ClickToEdit: FC<PropTypes> = ({ text, className }) => {
  const [editingText, setEditingText] = useState<string | undefined>(undefined);

  const startEdit = useCallback(() => setEditingText(text), [text]);

  if (!editingText) {
    return (
      <span className={`cursor-hover ${className}`} onClick={startEdit}>
        {text}
      </span>
    );
  }

  return <input className={className} type="text" value={editingText}></input>;
};

export default ClickToEdit;

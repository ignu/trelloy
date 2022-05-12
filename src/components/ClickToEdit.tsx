import { FC, useCallback, useState, ChangeEvent } from "react";

type PropTypes = {
  text: string;
  className: string;
  onChange?: (text: string) => void;
};

const ClickToEdit: FC<PropTypes> = ({ text, className, onChange }) => {
  const [editingText, setEditingText] = useState<string | undefined>(undefined);

  const startEdit = useCallback(() => setEditingText(text), [text]);
  const editText = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setEditingText(e.currentTarget.value),
    []
  );
  const finishEdit = () => {
    console.log(onChange, editingText, "🦄 1");
    console.log(editingText, "🐱 1");
    onChange && editingText && onChange(editingText);
    setEditingText(undefined);
  };

  if (!editingText) {
    return (
      <span className={`cursor-hover ${className}`} onClick={startEdit}>
        {text}
      </span>
    );
  }

  return (
    <input
      className={className}
      onChange={editText}
      onBlur={finishEdit}
      type="text"
      value={editingText}
    ></input>
  );
};

export default ClickToEdit;

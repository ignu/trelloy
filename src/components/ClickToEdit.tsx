import { FC, useCallback, useState, ChangeEvent, useRef } from "react";

type PropTypes = {
  text: string;
  className: string;
  onChange?: (text: string) => void;
};

const ClickToEdit: FC<PropTypes> = ({ text, className, onChange }) => {
  const [editingText, setEditingText] = useState<string | undefined>(undefined);
  const inputRef = useRef<HTMLInputElement>(null);

  const startEdit = useCallback(() => {
    inputRef.current?.focus();
    setEditingText(text);
  }, [text, inputRef.current]);

  const editText = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setEditingText(e.currentTarget.value),
    []
  );
  const finishEdit = () => {
    onChange && editingText && onChange(editingText);
    setEditingText(undefined);
  };

  if (!editingText) {
    return (
      <span className={`cursor-text ${className}`} onClick={startEdit}>
        {text}
      </span>
    );
  }

  return (
    <input
      ref={inputRef}
      className={className}
      onChange={editText}
      onBlur={finishEdit}
      onKeyPress={(e) => {
        if (e.key === "Enter") {
          finishEdit();
        }
      }}
      type="text"
      value={editingText}
    ></input>
  );
};

export default ClickToEdit;

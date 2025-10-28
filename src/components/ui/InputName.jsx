import { useEffect, useState } from "react";

const InputTile = ({ title, handleEditTitle, classes }) => {
  const [todoInput, setTodoInput] = useState(title);
  const [debouncedValue, setDebouncedValue] = useState(title);
  const [sizeInput, setSizeInput] = useState(0);

  useEffect(() => {
    const length = todoInput.length;
    setSizeInput(length);
  }, [todoInput]);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(todoInput);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [todoInput]);

  useEffect(() => {
    handleEditTitle(debouncedValue);
  }, [debouncedValue]);
  return (
    <input
      size={sizeInput}
      onChange={(e) => setTodoInput(e.target.value)}
      className={`${classes}`}
      value={todoInput}
    />
  );
};

export default InputTile;

import { useEffect, useState } from "react";

const InputTile = ({ title, handleEditTitle }) => {
  const [todoInput, setTodoInput] = useState(title);
  const [debouncedValue, setDebouncedValue] = useState(title);
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
      onChange={(e) => setTodoInput(e.target.value)}
      className=""
      value={todoInput}
    />
  );
};

export default InputTile;

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  editTitleItem,
  removeItem,
  isCompletedItem,
} from "../store/slices/itemsSlice.js";

const ListItem = ({ item }) => {
  const [todoInput, setTodoInput] = useState(item.title);
  const [debouncedValue, setDebouncedValue] = useState(item.title);
  const dispatch = useDispatch();

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(todoInput);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [todoInput]);

  useEffect(() => {
    dispatch(editTitleItem({ id: item.id, title: debouncedValue }));
  }, [debouncedValue]);

  function handleRemove() {
    dispatch(removeItem({ id: item.id }));
  }
  function handleCompleted() {
    dispatch(isCompletedItem({ id: item.id }));
  }
  return (
    <div className="list__item">
      {item.completed ? (
        <button onClick={handleCompleted} className="list__item-btn">
          ❌
        </button>
      ) : (
        <button onClick={handleCompleted} className="list__item-btn">
          ✅
        </button>
      )}

      <input
        onChange={(e) => setTodoInput(e.target.value)}
        className="list__item-title"
        value={todoInput}
      />
      <button className="list__item-btn">?</button>
      <button onClick={handleRemove} className="list__item-btn">
        -
      </button>
    </div>
  );
};

export default ListItem;

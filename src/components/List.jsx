import ListItem from "./ListItem";
import { addItem } from "../store/slices/itemsSlice.js";
import { useDispatch } from "react-redux";

const List = ({ block, items }) => {
  const dispatch = useDispatch();

  function addTodo() {
    const newItem = {
      id: Date.now(),
      title: "New Task",
      completed: false,
      blockId: block.id,
    };
    dispatch(addItem(newItem));
  }

  return (
    <div className="list__wrapper">
      <div className="list__title">
        {block.title}{" "}
        <button onClick={addTodo} className="list__item-btn">
          +
        </button>
      </div>
      <div className="list">
        {items.map(
          (item) =>
            item.blockId === block.id && <ListItem key={item.id} item={item} />
        )}
      </div>
    </div>
  );
};

export default List;

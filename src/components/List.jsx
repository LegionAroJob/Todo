import ListItem from "./ListItem";
import { addItem } from "../store/slices/itemsSlice.js";
import { useDispatch } from "react-redux";
import { editTitleBlock } from "../store/slices/blocksSlice.js";

import InputTile from "./ui/InputTile.jsx";

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

  function handleEditTitle(newTitle) {
    dispatch(editTitleBlock({ id: block.id, title: newTitle }));
  }

  return (
    <>
      <div className="list__wrapper">
        <div className="list__title">
          <InputTile title={block.title} handleEditTitle={handleEditTitle} />
          {""}
          <button onClick={addTodo} className="list__item-btn">
            +
          </button>
        </div>
        <div className="list">
          {items.map(
            (item) =>
              item.blockId === block.id && (
                <ListItem key={item.id} item={item} />
              )
          )}
        </div>
      </div>
    </>
  );
};

export default List;

import ListItem from "./ListItem";
import { addItem } from "../store/slices/itemsSlice.js";
import { useDispatch } from "react-redux";
import { editTitleBlock } from "../store/slices/blocksSlice.js";

import { addIcon, deleteIcon } from "../assets/uiIcons";

import { removeBlock } from "../store/slices/blocksSlice.js";
import { removeItemsByBlockId } from "../store/slices/itemsSlice.js";

import InputTile from "./ui/InputName.jsx";

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
  function removeGroup() {
    dispatch(removeItemsByBlockId({ blockId: block.id }));
    dispatch(removeBlock({ id: block.id }));
  }

  return (
    <>
      <div className="list__wrapper">
        <div className="list__header --hover-visible">
          <div className="list__title-wrapper">
            <InputTile
              title={block.title}
              handleEditTitle={handleEditTitle}
              classes={"list__title"}
            />
            <button onClick={addTodo} className="list__item-btn --hidden">
              {addIcon}
            </button>
          </div>
          <button onClick={removeGroup} className="list__item-btn --hidden">
            {deleteIcon}
          </button>
        </div>
        <div className="list">
          {items.map(
            (item) =>
              item.blockId === block.id && (
                <ListItem key={item.id} item={item} />
              )
          )}
          <button onClick={addTodo} className="list__btn-big">
            Add to do...
          </button>
        </div>
      </div>
    </>
  );
};

export default List;

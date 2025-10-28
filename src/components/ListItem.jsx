import { useDispatch } from "react-redux";
import {
  editTitleItem,
  removeItem,
  isCompletedItem,
} from "../store/slices/itemsSlice.js";
import { checkIcon, editIcon, deleteIcon } from "../assets/uiIcons.jsx";
import InputTile from "./ui/InputName.jsx";

const ListItem = ({ item }) => {
  const dispatch = useDispatch();

  function handleRemove() {
    dispatch(removeItem({ id: item.id }));
  }
  function handleCompleted() {
    dispatch(isCompletedItem({ id: item.id }));
  }
  function handleEditTitle(newTitle) {
    dispatch(editTitleItem({ id: item.id, title: newTitle }));
  }
  return (
    <div className="list__item --hover-visible">
      <div className="list__item-info">
        <button
          onClick={handleCompleted}
          className={`list__item-btn list__item-btn-check ${
            item.completed ? "list__item-btn--completed" : ""
          }`}
        >
          {checkIcon}
        </button>
        <InputTile
          title={item.title}
          handleEditTitle={handleEditTitle}
          classes={"list__item-title"}
        />
      </div>

      <div className="list__item-info">
        <button className="list__item-btn --hidden">{editIcon}</button>
        <button onClick={handleRemove} className="list__item-btn --hidden">
          {deleteIcon}
        </button>
      </div>
    </div>
  );
};

export default ListItem;

import { useDispatch } from "react-redux";
import {
  editTitleItem,
  removeItem,
  isCompletedItem,
} from "../store/slices/itemsSlice.js";
import InputTile from "./ui/InputTile.jsx";

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
      <InputTile title={item.title} handleEditTitle={handleEditTitle} />
      <button className="list__item-btn">?</button>
      <button onClick={handleRemove} className="list__item-btn">
        -
      </button>
    </div>
  );
};

export default ListItem;

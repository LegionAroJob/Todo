import List from "./List";
import { useSelector, useDispatch } from "react-redux";
import { addBlock } from "../store/slices/blocksSlice.js";
import { useEffect } from "react";

const Groups = () => {
  const items = useSelector((state) => state.items.items);
  const blocks = useSelector((state) => state.blocks.blocks);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!blocks.length) {
      handleAddBlock();
    }
  }, [blocks]);

  function handleAddBlock() {
    const newBlock = {
      id: Date.now(),
      title: "New Tasks",
    };
    dispatch(addBlock(newBlock));
  }
  return (
    <>
      {blocks.map((block) => (
        <List key={block.id} block={block} items={items} />
      ))}
      <button onClick={handleAddBlock} className="list__group-btn">
        + Add new group
      </button>
    </>
  );
};

export default Groups;

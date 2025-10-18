import List from "./components/List";
import { useSelector, useDispatch } from "react-redux";
import { addBlock } from "./store/slices/blocksSlice.js";

function App() {
  const items = useSelector((state) => state.items.items);
  const blocks = useSelector((state) => state.blocks.blocks);
  const dispatch = useDispatch();

  function handleAddBlock() {
    const newBlock = {
      id: Date.now(),
      title: "New Tasks",
    };
    dispatch(addBlock(newBlock));
  }

  return (
    <>
      <h1 className="title">todo</h1>
      <main className="main container">
        {blocks.map((block) => (
          <List key={block.id} block={block} items={items} />
        ))}
        <button onClick={handleAddBlock} className="list__item-btn">
          Add new block +
        </button>
      </main>
    </>
  );
}

export default App;

import List from "./components/List";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem } from "./store/slices/itemsSlice.js";

function App() {
  const items = useSelector((state) => state.items);
  return (
    <>
      <h1 className="title">todo</h1>
      <main className="main container">
        <List title="new" />
        <List title="in progress" />
        <List title="completed" />
      </main>
    </>
  );
}

export default App;

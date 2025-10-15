import List from "./components/List";

function App() {
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

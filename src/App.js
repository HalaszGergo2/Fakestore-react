import Kosar from "./components/Kosar";
import Termekek from "./components/Termekek";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>FakeStore Webáruház</h1>
      </header>
      <main className="row">
        <aside className="col-lg-3">
          <h3>Kosár</h3>
          <Kosar/>
        </aside>
        <article className="row col-lg-9">
          <h3>Termékek</h3>
          <Termekek/>
        </article>
      </main>
    </div>
  );
}

export default App;

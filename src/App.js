//import Urlap from "./components/Urlap";
//import Public from "./pages/Public";
import Tablazat from "./components/public/Tablazat";
import Public from "./components/pages/Public";
import Admin from "./components/pages/Admin"
import NoPage from "./components/pages/NoPage";
import Layout from "./components/pages/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>FakeStore Webáruház</h1>
      </header>
      <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Public />} />
                        <Route path="admin" element={<Admin />} />
                        <Route path="*" element={<NoPage />} />
                    </Route>
                </Routes>
      </BrowserRouter>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Menü
          </a>

          <div class="" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a
                  class="nav-link active"
                  aria-current="page"
                  href=".components/pages/Public.js"
                >
                  Publikus
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href=".components/pages/Admin.js">
                  Admin
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <main>
        <Tablazat />
      </main>
    </div>
  );
}



export default App;
//<Urlap />

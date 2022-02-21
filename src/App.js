import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./components/Home";
import { Navbar } from "./components/navbar/Navbar";
import { Search } from "./components/Search";
import { SearchDetail } from "./components/SearchDetail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={"/"} element={<Home />}></Route>
        <Route path={"/search"} element={<Search />}></Route>
        <Route path={"/page/:id"} element={<SearchDetail />}></Route>
      </Routes>
    </div>
  );
}

export default App;

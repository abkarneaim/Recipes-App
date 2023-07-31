import React from "react";
import Pages from "./pages/Pages";
import Categouries from "./components/Categouries";
import { BrowserRouter } from "react-router-dom";
import Search from "./components/Search";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Search />
        <Categouries />
        <Pages />
      </BrowserRouter>
    </div>
  );
};

export default App;

import React from "react";
import Pages from "./pages/Pages";
import Categouries from "./components/Categouries";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Categouries />
        <Pages />
      </BrowserRouter>
    </div>
  );
};

export default App;

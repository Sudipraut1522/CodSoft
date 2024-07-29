import React from "react";
import Headers from "./Header/Header";
import AddTodo from "./ToDOItems/AddTodo";
import Itemlist from "./ItemList/Itemlist";
import Footer from "./Footer/Footer";

const App = () => {
  return (
    <div className="mainCOintaner">
      <Headers />
      <AddTodo />
    </div>
  );
};

export default App;

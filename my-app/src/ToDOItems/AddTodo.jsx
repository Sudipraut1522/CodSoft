import React, { useState } from "react";
import "../ToDOItems/AddTodo.css";
import Itemlist from "../ItemList/Itemlist";
import Footer from "../Footer/Footer";

const AddTodo = () => {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();

    if (editIndex !== null) {
      setItems((prevItems) =>
        prevItems.map((item, i) =>
          i === editIndex ? { ...item, item: newItem } : item
        )
      );
      setEditIndex(null);
    } else {
      setItems((prevItems) => [
        ...prevItems,
        { checked: false, item: newItem, update: true },
      ]);
    }

    setNewItem("");
  }

  const handleDelete = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
    alert("You have deleted your task");
  };

  const handleUpdate = (index) => {
    setEditIndex(index);
    setNewItem(items[index].item);
  };

  const handleChecked = (index) => {
    const updatedItems = items.map((item, i) =>
      i === index ? { ...item, checked: !item.checked } : item
    );
    setItems(updatedItems);
  };

  return (
    <div className="container">
      <form className="addItem" onSubmit={handleSubmit}>
        <input
          required
          type="text"
          placeholder="Add your todo item..."
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <div>
          <button type="submit" className="addbtn">
            {editIndex !== null ? "Update Item" : "Add Item"}
          </button>
        </div>
      </form>

      <div className="itemsList">
        <Itemlist
          items={items}
          onDelete={handleDelete}
          handleUpdate={handleUpdate}
          handleChecked={handleChecked}
        />
      </div>
      <Footer items={items} />
    </div>
  );
};

export default AddTodo;

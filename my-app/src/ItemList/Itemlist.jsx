import React from "react";
import "./ItemList.css";

const Itemlist = ({ items, onDelete, handleUpdate, handleChecked }) => {
  return (
    <div className="container">
      <ul className="item-list">
        {items.map((item, index) => (
          <li key={index} className="list-item">
            <input
              type="checkbox"
              className="item-checkbox"
              checked={item.checked}
              onChange={() => handleChecked(index)}
            />
            <span className={item.checked ? "underlined" : ""}>
              {item.item}
            </span>
            <div className="btn-group">
              <button
                className="btn delete-btn"
                onClick={() => onDelete(index)}
              >
                Delete
              </button>
              <button
                className="btn update-btn"
                onClick={() => handleUpdate(index)}
              >
                Update
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Itemlist;

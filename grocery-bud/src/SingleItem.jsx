import { useState } from "react";

const SingleItem = ({ removeItem, editItem, item }) => {
  const { id, name, completed } = item;
  return (
    <div className="single-item">
      <input
        type="checkbox"
        id={id}
        checked={completed}
        onChange={() => editItem(id)}
        readOnly
      />
      <label
        htmlFor={id}
        style={completed ? { textDecoration: "line-through" } : {}}
      >
        {name}
      </label>
      <button
        className="btn remove-btn"
        type="button"
        onClick={() => removeItem(id)}
      >
        remove
      </button>
    </div>
  );
};

export default SingleItem;

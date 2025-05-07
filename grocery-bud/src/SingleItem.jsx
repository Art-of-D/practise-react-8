import { useState } from "react";

const SingleItem = ({ removeItem, item }) => {
  const { id, name, completed } = item;
  const [isChecked, setIsChecked] = useState(completed);
  return (
    <div className="single-item">
      <input
        type="checkbox"
        id={id}
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
        readOnly
      />
      <label
        htmlFor={id}
        style={isChecked ? { textDecoration: "line-through" } : {}}
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

import { useState } from "react";

const Form = ({ addItem }) => {
  const [newItem, setNewItem] = useState("");

  const handleAddItem = (e) => {
    e.preventDefault();
    if (newItem) {
      addItem(newItem);
      setNewItem("");
    }
  };
  return (
    <form className="form-control">
      <input
        type="text"
        className="form-input"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button className="btn" onClick={handleAddItem}>
        add
      </button>
    </form>
  );
};

export default Form;

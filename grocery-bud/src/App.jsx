import { useState } from "react";
import Form from "./Form";
import Items from "./Items";

const setLocalStorage = (items) => {
  localStorage.setItem("items", JSON.stringify(items));
};

const App = () => {
  const [items, setItems] = useState([]);
  const addItem = (item) => {
    const newItem = {
      id: Date.now(),
      name: item,
      completed: false,
    };
    const newItems = [...items, newItem];
    setItems(newItems);
    setLocalStorage(newItems);
  };

  const removeItem = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
    setLocalStorage(newItems);
  };

  return (
    <section className="section-center">
      <h2>Grocery Bud</h2>
      <Form addItem={addItem} />
      <Items items={items} removeItem={removeItem} />
    </section>
  );
};

export default App;

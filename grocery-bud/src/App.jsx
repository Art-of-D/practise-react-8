import { useState } from "react";
import Form from "./Form";
import Items from "./Items";

const setLocalStorage = (items) => {
  localStorage.setItem("items", JSON.stringify(items));
};

const getLocalStorage = () => {
  const list = localStorage.getItem("items");
  if (list) {
    return JSON.parse(list);
  } else {
    return [];
  }
};

const App = () => {
  const [items, setItems] = useState(getLocalStorage());
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

  const editItem = (id) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    setItems(newItems);
    setLocalStorage(newItems);
  };

  return (
    <section className="section-center">
      <h2>Grocery Bud</h2>
      <Form addItem={addItem} />
      <Items items={items} removeItem={removeItem} editItem={editItem} />
    </section>
  );
};

export default App;

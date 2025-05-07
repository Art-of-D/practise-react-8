import SingleItem from "./SingleItem";

const Items = ({ items, removeItem, editItem }) => {
  return (
    <div className="grocery-list">
      {items.map((item) => {
        return (
          <SingleItem
            key={item.id}
            removeItem={removeItem}
            editItem={editItem}
            item={item}
          />
        );
      })}
    </div>
  );
};

export default Items;

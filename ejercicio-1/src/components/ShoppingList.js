import React, { useState } from 'react';
import ShoppingItem from './ShoppingItem';
import AddItemForm from './AddItemForm';

function ShoppingList() {
  const [items, setItems] = useState([]);

  const addItem = item => {
    setItems([...items, item]);
  };

  const deleteItem = itemName => {
    setItems(items.filter(item => item.name !== itemName));
  };

  return (
    <div>
      <AddItemForm addItem={addItem} />
      <ul>
        {items.map((item, index) => (
          <ShoppingItem key={index} item={item} deleteItem={deleteItem} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;

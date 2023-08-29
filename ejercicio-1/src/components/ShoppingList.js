import React, { useState } from 'react';
import ShoppingItem from './ShoppingItem';
import AddItemForm from './AddItemForm';


function ShoppingList() {
  const [items, setItems] = useState([]);

  const addItem = item => {
    setItems([...items, {...item, cantidad: 1}]); // Agregamos cantidad inicial de 1 al ítem.
  };
  
  const deleteItem = itemName => {
    setItems(items.filter(item => item.nombre !== itemName));
  };
  const updateItemQuantity = (itemName, newQuantity) => {
    const updatedItems = items.map(item => {
      if (item.nombre === itemName) {
        return {...item, cantidad: Number(newQuantity)};
      }
      return item;
    });
    setItems(updatedItems);
  };
  
  const totalPrice = items.reduce((acc, item) => acc + item.precio * item.cantidad, 0);


  return (
    <div>
      <AddItemForm addItem={addItem} />
      <ul>
        {items.map((item, index) => (
          <ShoppingItem key={index} item={item} deleteItem={deleteItem} updateItemQuantity={updateItemQuantity} />
        ))}
      </ul>
      <div className="total-price">
        Precio Total: ${totalPrice.toFixed(2)}
      </div>
    </div>
  );
}

export default ShoppingList;

import React from 'react';
import './ShoppingItem.css';


function ShoppingItem({ item, deleteItem, updateItemQuantity }) {
  const handleQuantityChange = (e) => {
    const newQuantity = e.target.value;
    updateItemQuantity(item.nombre, newQuantity);
  };

  const totalPrice = item.precio * item.cantidad;

  return (
    <li>
      {item.nombre} - ${item.precio.toFixed(2)} x 
      <input 
        type="number" 
        min="1"
        value={item.cantidad} 
        onChange={handleQuantityChange}
        className="quantity-input"
      />
      = ${totalPrice.toFixed(2)}
      <button onClick={() => deleteItem(item.nombre)}>Eliminar</button>
    </li>
  );
}

export default ShoppingItem;



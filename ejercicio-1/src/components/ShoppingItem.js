import React from 'react';
import './ShoppingItem.css';


function ShoppingItem({ item, deleteItem }) {
  return (
    <li>
      {item.name}
      <button onClick={() => deleteItem(item.name)}>Eliminar</button>
    </li>
  );
}

export default ShoppingItem;

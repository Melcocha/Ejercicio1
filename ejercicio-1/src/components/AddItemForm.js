import React, { useState } from 'react';
import './AddItemForm.css';


function AddItemForm({ addItem }) {
  const [itemName, setItemName] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (itemName.trim()) {
      addItem({ name: itemName });
      setItemName('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        value={itemName}
        onChange={e => setItemName(e.target.value)}
        placeholder="Añadir artículo..."
      />
      <button type="submit">Añadir</button>
    </form>
  );
}

export default AddItemForm;

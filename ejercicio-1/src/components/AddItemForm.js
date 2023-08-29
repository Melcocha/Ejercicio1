import React, { useState, useEffect } from 'react';
import './AddItemForm.css';
import itemsData from '../items.json';  // Importar el archivo JSON

function AddItemForm({ addItem }) {
  const [selectedItem, setSelectedItem] = useState('');

  useEffect(() => {
    if (itemsData.length > 0) {
      setSelectedItem(itemsData[0].nombre);
    }
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    const item = itemsData.find(item => item.nombre === selectedItem);
    if (item) {
      addItem(item);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <select 
        value={selectedItem}
        onChange={e => setSelectedItem(e.target.value)}
      >
        {itemsData.map((item, index) => (
          <option key={index} value={item.nombre}>{item.nombre} - ${item.precio}</option>
        ))}
      </select>
      <button type="submit">Añadir</button>
    </form>
  );
}

export default AddItemForm;

import React, { useState } from 'react';
import './Lista.css'; // Importa tu archivo de estilos CSS

const Lista = () => {
  const [arreglo, setArreglo] = useState([]);
  const [nuevoElemento, setNuevoElemento] = useState('');

  const agregarElemento = () => {
    setArreglo([...arreglo, nuevoElemento]);
    setNuevoElemento('');
  };

  const eliminarElemento = (index) => {
    const nuevoArreglo = arreglo.filter((_, i) => i !== index);
    setArreglo(nuevoArreglo);
  };

  const handleDragStart = (index) => (event) => {
    event.dataTransfer.setData('text/plain', index.toString());
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (targetIndex) => (event) => {
    event.preventDefault();
    const draggedIndex = parseInt(event.dataTransfer.getData('text/plain'), 10);
    const newArray = [...arreglo];
    const [draggedItem] = newArray.splice(draggedIndex, 1);
    newArray.splice(targetIndex, 0, draggedItem);
    setArreglo(newArray);
  };

  return (
    
    <div className="lista-container">
      <h3>Crea un formulario en React con campos de entrada para nombre y correo electrónico, y maneja los cambios en el estado.</h3>
      <h1>Lista de Elementos</h1>
      
      <p>Agrega, elimina y reorganiza elementos</p>
      <input
        type="text"
        value={nuevoElemento}
        onChange={(e) => setNuevoElemento(e.target.value)}
        placeholder="Nuevo elemento"
      />
      <button onClick={agregarElemento}>Agregar</button>

      <ul className="lista">
        {arreglo.map((elemento, index) => (
          <li
            key={index}
            draggable
            onDragStart={handleDragStart(index)}
            onDragOver={handleDragOver}
            onDrop={handleDrop(index)}
          >
            <span>{elemento}</span>
            <button onClick={() => eliminarElemento(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Lista;

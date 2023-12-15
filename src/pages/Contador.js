import React, { useState } from 'react';
import './Contador.css'; // Asegúrate de que el nombre del archivo coincide con el nombre de tu componente

const Contador = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="contador-container">
      <h3 className="titulo">Crea un componente funcional en React que renderice un botón y actualice un contador en el estado cada vez que se hace clic en el botón.</h3>
      <div className="seccion-contador">
        <p className="contador-text">Contador: {count}</p>
        <div className="botones">
          <button className="contador-button" onClick={handleIncrement}>Sumar</button>
          <button className="contador-button" onClick={handleDecrement}>Restar</button>
          <button className="contador-button" onClick={handleReset}>Restablecer</button>
        </div>
      </div>
    </div>
  );
};

export default Contador;

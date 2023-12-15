import React from "react";
import './Integracion.css'; // Asegúrate de que el nombre del archivo coincide con el nombre de tu componente

const Integracion = () => {
  const [equipo, setEquipo] = React.useState([]);

  React.useEffect(() => {
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await data.json();
    setEquipo(users);
  };

  return (
    <div className="integracion-container">
      <h1 className="integracion-title">Consumiendo una API</h1>
      <ul className="integracion-list">
        {equipo.map((item) => (
          <li key={item.id} className="integracion-item">
            <span className="integracion-name">{item.name}</span> - 
            <span className="integracion-email">{item.email}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Integracion;

import React, { useState } from 'react';
import './Formulario.css'; // Importa tu archivo de estilos CSS

const Formulario = () => {
  const [nombre, setNombre] = useState('Usuario');
  const [correo, setCorreo] = useState('usuario@example.com');

  const manejarEnvioFormulario = (e) => {
    e.preventDefault();
    setNombre(e.target.elements.nombre.value);
    setCorreo(e.target.elements.correo.value);
  };

  return (
    <div className="container">

      <h1 className="titulo">Formulario de Usuario</h1>
      <h3>Crea un formulario en React con campos de entrada para nombre y correo electrónico, y maneja los cambios en el estado.</h3>
      <div className='seccion-contacto'>
        <div className='formulario'>
          <form className="formulario-usuario" onSubmit={manejarEnvioFormulario}>
            <input type="text" name="nombre" placeholder="Ingresa tu nombre" defaultValue={nombre} />
            <input type="email" name="correo" placeholder="Ingresa tu correo electrónico" defaultValue={correo} />
            <input type="submit" value="Actualizar Datos" />
          </form>
        </div>
        <div className='tarjeta-usuario'>
          <div className="info-usuario">
            <h3>Nombre: {nombre}</h3>
            <h3>Correo: {correo}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Formulario;

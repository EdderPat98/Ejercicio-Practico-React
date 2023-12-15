import React from "react";
import { Outlet, Link } from "react-router-dom";
import './Layout.css'; // Asegúrate de que el nombre del archivo coincide con el nombre de tu componente

const Layout = () => {
  return (
    <div className="layout-container">
      <nav className="nav-menu">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" className="nav-link">Ejercicio 1 Contador</Link>
          </li>
          <li className="nav-item">
            <Link to="/Lista" className="nav-link">Ejercicio 2 Lista</Link>
          </li>
          <li className="nav-item">
            <Link to="/Formulario" className="nav-link">Ejercicio 3 Formulario</Link>
          </li>
          <li className="nav-item">
            <Link to="/Integracion" className="nav-link">Ejercicio 4 Integración</Link>
          </li>
        </ul>
      </nav>
      <hr className="divider" />
      <Outlet />
    </div>
  );
}

export default Layout;

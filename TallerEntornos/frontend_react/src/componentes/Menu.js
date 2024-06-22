import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <nav className="mt-2">
      <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
        <li className="nav-item">
          <Link to="/home" className="nav-link">
            <i className="nav-icon fas fa-list fa-lg" style={{ fontSize: '24px', marginRight: '8px' }}/>
            <p>
              Inicio
            </p>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/Proyectos-Admin" className="nav-link">
            <i className="nav-icon fas fa-edit fa-lg" style={{ fontSize: '24px', marginRight: '8px' }} />
            <p>
              Proyectos
            </p>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/Tareas-Admin" className="nav-link">
            <i className="nav-icon fas fa-tasks fa-lg" style={{ fontSize: '24px', marginRight: '8px' }}/>
            <p>
              Tareas
            </p>
          </Link>
        </li>
    </ul>
    </nav>
  );
};

export default Menu;

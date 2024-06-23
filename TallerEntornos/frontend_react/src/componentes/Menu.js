import React from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

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
        <li className="nav-item">
          <Dropdown drop="down">
            <Dropdown.Toggle className="nav-link" as="a">
              <i className="nav-icon fas fa-users fa-lg" style={{ fontSize: '24px', marginRight: '8px' }} />
              <p>Grupos</p>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item as={Link} to="/Grupos-Crear">
                Crear un Grupo
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/Unirse-Grupo">
                Unirse a un Grupo
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </li>
        <li className="nav-item">
          <Link to="/Configuracion" className="nav-link">
            <i className="nav-icon fas fa-cogs fa-lg" style={{ fontSize: '24px', marginRight: '8px' }} />
            <p>
              Configuración
            </p>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/" className="nav-link">
            <i className="nav-icon fas fa-power-off fa-lg" style={{ fontSize: '24px', marginRight: '8px' }} />
            <p>
              Salir
            </p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;

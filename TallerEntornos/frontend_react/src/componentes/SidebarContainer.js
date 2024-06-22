import React from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import Logo from '../../node_modules/admin-lte/dist/img/AdminLTELogo.png';

const SidebarContainer = () => {

  const storedData = localStorage.getItem('DatosUsuario');
  console.log(storedData);

  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      <Link to={"/home"} className="brand-link">
        <img
          src={Logo}
          alt="AdminLTE Logo"
          className="brand-image img-circle elevation-3"
          style={{ opacity: ".8" }}
        />
        <span className="brand-text font-weight-light">Hola {storedData}</span>
      </Link>
      <div className="sidebar">
        <Menu></Menu>
      </div>
    </aside>
  );
};

export default SidebarContainer;

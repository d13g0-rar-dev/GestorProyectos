import React from "react";
import Menu from "./Menu";
import Logo from '../../node_modules/admin-lte/dist/img/logo proyecto software.png';

const SidebarContainer = () => {

  const storedData = localStorage.getItem('DatosUsuario');

  const datosUsuario = JSON.parse(storedData);
  let nombreUsuario = datosUsuario.name.split(" ")[0];

  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      <div className="brand-link">
        <img
          src={Logo}
          alt="AdminLTE Logo"
          className="brand-image img-circle elevation-3"
          style={{ opacity: ".8" }}
        />
        <span className="brand-text font-weight-light">Hola {nombreUsuario}</span>
      </div>
      <div className="sidebar">
        <Menu></Menu>
      </div>
    </aside>
  );
};

export default SidebarContainer;

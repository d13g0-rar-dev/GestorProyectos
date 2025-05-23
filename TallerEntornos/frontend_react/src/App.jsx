import React, {Fragment} from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from "./paginas/auth/Login";
import Registro from "./paginas/auth/Registro";
import Home from "./paginas/Home";
import ProyectosAdmin from "./paginas/Proyectos/ProyectosAdmin";
import ProyectoRegistro from "./paginas/Proyectos/ProyectoRegistro";
import ProyectosEditar from "./paginas/Proyectos/ProyectosEditar";
import TareasAdmin from "./paginas/Tareas/TareasAdmin";
import TareasEditar from "./paginas/Tareas/TareasEditar";
import GrupoCrear from "./paginas/Grupos/GrupoCrear";
import TareasRegistro from "./paginas/Tareas/TareasRegistro";
import GrupoUnirse from "./paginas/Grupos/GrupoUnirse";
import GrupoInfo from "./paginas/Grupos/GrupoInfo";
import Recuperacion from "./paginas/auth/Recuperacion";
import SubirDocumentos from "./paginas/Documentos/SubirDocumentos";
import ListarDocumentos from "./paginas/Documentos/ListarDocumentos";
import Chat from "./paginas/Chats/Chat";

function App() {

  return (
    <Fragment> 
      <Router>
        <Routes>
          <Route path="/" exact element={<Login/>}/>
          <Route path="/Registro" exact element={<Registro/>}/>
          <Route path="/home" exact element={<Home/>}/>
          <Route path="/Proyectos-Admin" exact element={<ProyectosAdmin/>}/>
          <Route path="/Proyectos-Registro" exact element={<ProyectoRegistro/>}/>
          <Route path="/Proyectos-editar/:idproyecto" exact element={<ProyectosEditar/>}/>
          <Route path="/Tareas-Admin" exact element={<TareasAdmin/>}/>
          <Route path="/Tareas-editar/:idtarea" exact element={<TareasEditar/>}/>
          <Route path="/Tareas-Registro/:idgrupo" exact element={<TareasRegistro/>}/>
          <Route path="/Grupos-Crear" exact element={<GrupoCrear/>}/>
          <Route path="/Grupos-Unirse" exact element={<GrupoUnirse/>}/>
          <Route path="/Grupos/:idgrupo" exact element={<GrupoInfo/>}/>
          <Route path="/Recuperacion" exact element={<Recuperacion/>}/>
          <Route path="/SubirDocumentos" exact element={<SubirDocumentos/>}/>
          <Route path="/ListarDocumentos" exact element={<ListarDocumentos/>}/>
          <Route path="/Chat/:idgrupo" exact element={<Chat/>}/>
        </Routes>
      </Router>
    </Fragment>/* actua como un div */
  );
}

export default App;

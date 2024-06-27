import {React, useEffect, useState} from 'react'
import Navbar from '../componentes/Navbar'
import SidebarContainer from '../componentes/SidebarContainer';
import ContentHeader from '../componentes/ContentHeader';
import Footer from '../componentes/Footer';
import APIInvoke from '../utils/APIInvoke';
import { Link } from 'react-router-dom';


const Home = () => {

   const usuario_id = JSON.parse(localStorage.getItem('DatosUsuario')).id;
   const [grupos, setGrupos] = useState([]);

   const cargarGrupos = async () => {
      const response = await APIInvoke.invokeGET('/api/grupos/list')
      const grupos = response.filter(grupo => grupo.members.some(member => member.id === usuario_id));
      
      console.log("grupos",grupos);
      console.log("response",response);
      setGrupos(grupos);
   }
   
   useEffect(() => {
      cargarGrupos();
   }, [])

   

   return (
      <div className="wrapper">
         <Navbar></Navbar>
         <SidebarContainer></SidebarContainer>
         <div className="content-wrapper">
            <ContentHeader
               Titulo={'Dashboard'}
               breadcrumb1={'Inicio'}
               breadcrumb2={'Dashboard'}
               ruta={'/home'}
            />
            <section className="content">
               <div className='container-fluid'>
                  <div className="row">
                     {grupos.map((grupo) => (
                        <div className="col-12 col-sm-6 col-md-3" key={grupo.id}>
                           <div className="info-box">
                              <span className="info-box-icon bg-info elevation-1"><i className="fas fa-users fa-lg"></i></span>
                              <div className="info-box-content">
                                 <span className="info-box-text">{grupo.name}</span>
                                 <span className="info-box-text">Codigo de Ingreso: {grupo.id}</span>
                                 <span className="info-box-number">{grupo.members.length} Miembros</span>
                                 <Link to={`/grupos/${grupo.id}`} className="btn btn-primary" >Ingresar</Link>
                              </div>
                           </div>
                        </div>
                     ))}
                  </div>      
               </div>
            </section>
            </div>
         <Footer></Footer>
      </div>

   )
}

export default Home;
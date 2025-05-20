import {React} from 'react'
import Navbar from '../componentes/Navbar'
import SidebarContainer from '../componentes/SidebarContainer';
import ContentHeader from '../componentes/ContentHeader';
import Footer from '../componentes/Footer';
import GruposAdmin from './Grupos/GruposAdmin';

const Home = () => {
   return (
      <div className="wrapper">
         <Navbar></Navbar>
         <SidebarContainer></SidebarContainer>
         <div className="content-wrapper">
            <ContentHeader
               Titulo={'Grupos'}
               breadcrumb1={'Inicio'}
               breadcrumb2={'Grupos'}
               ruta={'/home'}
            />
         <GruposAdmin></GruposAdmin>
         </div>
         <Footer></Footer>
      </div>

   )
}

export default Home;
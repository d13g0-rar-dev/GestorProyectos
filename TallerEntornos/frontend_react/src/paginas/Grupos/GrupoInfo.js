import { React, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../../componentes/Navbar';
import SidebarContainer from '../../componentes/SidebarContainer';
import ContentHeader from '../../componentes/ContentHeader';
import Footer from '../../componentes/Footer';
import APIInvoke from '../../utils/APIInvoke';

const GrupoInfo = () => {

    const [grupos, setGrupos] = useState([]);

    const { idgrupo } = useParams();
    let arreglo = idgrupo.split('@');
    const idGrupo = arreglo[0];

    const cargarGrupo = async () => {
        const grupos = await APIInvoke.invokeGET(`/api/grupos/list/${idGrupo}`);
        setGrupos(grupos);
    }

    useEffect(() => {
        cargarGrupo();
    }, []);



    return (
        <div className="wrapper">
            <Navbar></Navbar>
            <SidebarContainer></SidebarContainer>
            <div className="content-wrapper ">
                <ContentHeader
                    Titulo={[<i className="nav-icon fas fa-tasks fa-lg"></i>,' Listado Tareas']}
                    breadcrumb1={'Inicio'}
                    breadcrumb2={'Grupos'}
                    ruta={'/home'}
                />
                <section className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="card card-primary">
                                    <div className="card-header">
                                        <h3 className="card-title">
                                            To Do
                                        </h3>
                                    </div>
                                    <div className="card-body">
                                        <div className="card card-primary card-outline">
                                            <div className="card-header">
                                                <h5 className="card-title">Crear primer milestone</h5>
                                                <div className="card-tools">
                                                    <a href="#" className="btn btn-tool btn-link">#5</a>
                                                    <a href="#" className="btn btn-tool">
                                                        <i className="fas fa-pen"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card card-row card-default">
                                    <div className="card-header bg-info">
                                        <h3 className="card-title">
                                            On Progress
                                        </h3>
                                    </div>
                                    <div className="card-body">
                                        <div className="card card-primary card-outline">
                                            <div className="card-header">
                                                <h5 className="card-title">Crear primer milestone</h5>
                                                <div className="card-tools">
                                                    <a href="#" className="btn btn-tool btn-link">#5</a>
                                                    <a href="#" className="btn btn-tool">
                                                        <i className="fas fa-pen"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card card-row card-success">
                                    <div className="card-header">
                                        <h3 className="card-title">
                                            Done
                                        </h3>
                                    </div>
                                    <div className="card-body">
                                        <div className="card card-primary card-outline">
                                            <div className="card-header">
                                                <h5 className="card-title">Crear primer milestone</h5>
                                                <div className="card-tools">
                                                    <a href="#" className="btn btn-tool btn-link">#5</a>
                                                    <a href="#" className="btn btn-tool">
                                                        <i className="fas fa-pen"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title"><i className="fas fa-filter"></i>Opciones</h3>
                                    </div>
                                    <div className="card-body">
                                        <h5><a className="d-block w-100" data-toggle="collapse" href="#detalles"><i className='fas fa-code'/> Ver detalles del grupo</a></h5>
                                        <div id="detalles" className="panel-collapse collapse">
                                            <div className="panel-body">
                                                { 
                                                    <>Nombre: {grupos.name}<p>Codigo de Ingreso: {grupos.id}</p></>
                                                }
                                            </div>
                                        </div>
                                        <h5><Link to={`/Tareas-Registro/${idGrupo}@`}><i className='fas fa-code'/>Crear Tarea</Link></h5>
                                        <h5><Link to={'/home'}><i className='fas fa-code'/>Subir Documento</Link></h5>
                                        <h5><Link to={'/home'}><i className='fas fa-code'/>Regresar</Link></h5>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        <Footer></Footer>
        </div>
    )
};

export default GrupoInfo;
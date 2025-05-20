import { React, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../../componentes/Navbar';
import SidebarContainer from '../../componentes/SidebarContainer';
import ContentHeader from '../../componentes/ContentHeader';
import Footer from '../../componentes/Footer';
import APIInvoke from '../../utils/APIInvoke';
import axios from 'axios';
import { uploadFile } from '../../firebaseService';
import SubirDocumentos from '../Documentos/SubirDocumentos';
import ListarDocumentos from '../Documentos/ListarDocumentos';
import Chat from '../Chats/Chat';

const GrupoInfo = () => {

    const [grupos, setGrupos] = useState([]);
    const [tareasPendientes, setTareasPendientes] = useState([]);
    const [tareasProgreso, setTareasProgreso] = useState([]);
    const [tareasFinalizadas, setTareasFinalizadas] = useState([]);

    const { idgrupo } = useParams();
    let arreglo = idgrupo.split('@');
    const idGrupo = arreglo[0];

    const cargarGrupo = async () => {
        const grupos = await APIInvoke.invokeGET(`/api/grupos/list/${idGrupo}`);
        const tareas = await APIInvoke.invokeGET(`/api/grupos/list/${idGrupo}/tasks`);
        const tareasPendientes = tareas.filter(tarea => tarea.status === 'Pendiente');
        const tareasProgreso = tareas.filter(tarea => tarea.status === 'En Curso');
        const tareasFinalizadas = tareas.filter(tarea => tarea.status === 'Finalizada');
        setTareasPendientes(tareasPendientes);
        setTareasProgreso(tareasProgreso);
        setTareasFinalizadas(tareasFinalizadas);
        setGrupos(grupos);
    }

    useEffect(() => {
        cargarGrupo();
    }, []);

    const [file, setFile] = useState(null);
    const [message, setMessage] = useState('');

    const handleFilecChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!file) {
            setMessage('Por favor seleccione un archivo');
            return;
        }
        try {
            const fileUrl = await uploadFile(file);
            await axios.post(`/api/documents/upload/${idGrupo}`, {fileUrl});
            setMessage('Archivo subido correctamente');
        } catch (error) {
            setMessage('Error al subir el archivo');
        }
    };

    return (
        <div className="wrapper">
            <Navbar></Navbar>
            <SidebarContainer></SidebarContainer>
            <div className="content-wrapper ">
                <ContentHeader
                    Titulo={[<i className="nav-icon fas fa-tasks fa-lg"></i>, ' Listado Tareas']}
                    breadcrumb1={'Inicio'}
                    breadcrumb2={'Grupos'}
                    ruta={'/home'} />
                <section className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card card-primary">
                                <div className="card-header">
                                    <h3 className="card-title">
                                        Pendiente
                                    </h3>
                                </div>
                                <div className="card-body">
                                    <div className="card card-primary card-outline">                                  
                                        {
                                            
                                            tareasPendientes.map(tarea => 
                                                <>
                                                    <div className='card-header'>
                                                        <h5 className='card-title'>{tarea.name}</h5>
                                                        <div className="card-tools">
                                                            <a href="#" className="btn btn-tool btn-link" data-toggle="modal" data-target="#modal-info-pendiente"><i className="fas fa-info"></i></a>
                                                            <Link to={`/Tareas-editar/${tarea.id}@${tarea.name}@${tarea.description}@${tarea.date.split('T')[0]}@${tarea.deadline.split('T')[0]}@${tarea.status}@${idGrupo}/`} className='btn btn-sm btn-primary'><i className='fas fa-pen'></i></Link>
                                                        </div>
                                                    </div>
                                                    <div className="modal fade" id="modal-info-pendiente">
                                                        <div className="modal-dialog">
                                                            <div className="modal-content bg-primary">
                                                                <div className="modal-header">
                                                                    <h4 className="modal-title">{tarea.name}</h4>
                                                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                                        <span aria-hidden="true">&times;</span>
                                                                    </button>
                                                                </div>
                                                                <div className="modal-body">
                                                                    <p>{tarea.description}</p>
                                                                    <p>Fecha de Inicio: {tarea.date.split('T')[0]}</p>
                                                                    <p>Fecha de Cierre: {tarea.deadline.split('T')[0]}</p>
                                                                    <p>Estado de la Tarea: {tarea.status}</p>
                                                                </div>
                                                                <div className="modal-footer justify-content-between">
                                                                    <button type="button" className="btn btn-outline-light" data-dismiss="modal">Close</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>
                                            )                                            
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card card-row card-default">
                                <div className="card-header bg-info">
                                    <h3 className="card-title">
                                        En Curso
                                    </h3>
                                </div>
                                <div className="card-body">
                                    <div className="card card-info card-outline">
                                    {
                                            
                                        tareasProgreso.map(tarea => 
                                            <>
                                                <div className='card-header'>
                                                    <h5 className='card-title'>{tarea.name}</h5>
                                                    <div className="card-tools">
                                                        <a href="#" className="btn btn-tool btn-link" data-toggle="modal" data-target="#modal-info-progreso"><i className="fas fa-info"></i></a>
                                                        <Link to={`/Tareas-editar/${tarea.id}@${tarea.name}@${tarea.description}@${tarea.date.split('T')[0]}@${tarea.deadline.split('T')[0]}@${tarea.status}@${idGrupo}/`} className='btn btn-sm btn-primary'><i className='fas fa-pen'></i></Link>
                                                    </div>
                                                </div>
                                                <div className="modal fade" id="modal-info-progreso">
                                                    <div className="modal-dialog">
                                                        <div className="modal-content bg-info">
                                                            <div className="modal-header">
                                                                <h4 className="modal-title">{tarea.name}</h4>
                                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                                    <span aria-hidden="true">&times;</span>
                                                                </button>
                                                            </div>
                                                            <div className="modal-body">
                                                                <p>{tarea.description}</p>
                                                                <p>Fecha de Inicio: {tarea.date.split('T')[0]}</p>
                                                                <p>Fecha de Cierre: {tarea.deadline.split('T')[0]}</p>
                                                                <p>Estado de la Tarea: {tarea.status}</p>
                                                            </div>
                                                            <div className="modal-footer justify-content-between">
                                                                <button type="button" className="btn btn-outline-light" data-dismiss="modal">Close</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        )                                            
                                    }
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card card-row card-success">
                                <div className="card-header">
                                    <h3 className="card-title">
                                        Finalizada
                                    </h3>
                                </div>
                                <div className="card-body">
                                    <div className="card card-success card-outline">
                                    {
                                        tareasFinalizadas.map(tarea => 
                                            <>
                                                <div className='card-header'>
                                                    <h5 className='card-title'>{tarea.name}</h5>
                                                    <div className="card-tools">
                                                        <a href="#" className="btn btn-tool btn-link" data-toggle="modal" data-target="#modal-info-finalizada"><i className="fas fa-info"></i></a>
                                                        <Link to={`/Tareas-editar/${tarea.id}@${tarea.name}@${tarea.description}@${tarea.date.split('T')[0]}@${tarea.deadline.split('T')[0]}@${tarea.status}@${idGrupo}/`} className='btn btn-sm btn-primary'><i className='fas fa-pen'></i></Link>
                                                    </div>
                                                    <div className="modal fade" id="modal-info-finalizada">
                                                        <div className="modal-dialog">
                                                            <div className="modal-content bg-success">
                                                                <div className="modal-header">
                                                                    <h4 className="modal-title">{tarea.name}</h4>
                                                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                                        <span aria-hidden="true">&times;</span>
                                                                    </button>
                                                                </div>
                                                                <div className="modal-body">
                                                                    <p>{tarea.description}</p>
                                                                    <p>Fecha de Inicio: {tarea.date.split('T')[0]}</p>
                                                                    <p>Fecha de Cierre: {tarea.deadline.split('T')[0]}</p>
                                                                    <p>Estado de la Tarea: {tarea.status}</p>
                                                                </div>
                                                                <div className="modal-footer justify-content-between">
                                                                    <button type="button" className="btn btn-outline-light" data-dismiss="modal">Close</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div> 
                                                </div>
                                            </>
                                        )                                            
                                    }
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
                                    <h5><a className="d-block w-100" data-toggle="collapse" href="#detalles"><i className='fas fa-code' /> Ver detalles del grupo</a></h5>
                                    <div id="detalles" className="panel-collapse collapse">
                                        <div className="panel-body">
                                            {<>Nombre: {grupos.name}<p>Codigo de Ingreso: {grupos.id}</p></>}
                                        </div>
                                    </div>
                                    <h5><Link to={`/Tareas-Registro/${idGrupo}@`}><i className='fas fa-code' />Crear Tarea</Link></h5>
                                    <SubirDocumentos idGrupo={idGrupo}></SubirDocumentos>
                                    <h5><Link to={'/home'}><i className='fas fa-code' />Regresar</Link></h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <ListarDocumentos idGrupo={idGrupo}></ListarDocumentos>
                </div>
                <div>
                    <Chat idGrupo={idGrupo}></Chat>
                </div>
            </section>
        </div><Footer></Footer>
        </div>
    )
};

export default GrupoInfo;
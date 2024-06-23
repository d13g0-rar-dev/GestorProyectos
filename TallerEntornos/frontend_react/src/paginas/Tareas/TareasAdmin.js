import React, { useState, useEffect } from 'react'
import Navbar from '../../componentes/Navbar';
import SidebarContainer from '../../componentes/SidebarContainer';
import ContentHeader from '../../componentes/ContentHeader';
import Footer from '../../componentes/Footer';
import APIInvoke from '../../utils/APIInvoke';
import swal from "sweetalert";
import { Link } from 'react-router-dom';

const TareasAdmin = () => {
    const [tareas, setTareas] = useState([]);

    const cargarTareas = async () => {
        const response = await APIInvoke.invokeGET('/api/tasks/list')
        console.log(response);
        setTareas(response);
    }

    useEffect(() => {
        cargarTareas();
    }, [])

    const eliminarTarea = async (e, idTarea) => {
        e.preventDefault();
        const response = await APIInvoke.invokeDELETE(`/api/tasks/delete/${idTarea}`);
        console.log(response)
        if (response.id === idTarea) {
            const msg = "La tarea fue borrada exitosamente"
            swal({
                title: 'La tarea fue borrada',
                text: msg,
                icon: 'success',
                buttons: {
                    confirm: {
                        text: 'Ok',
                        value: true,
                        visible: true,
                        className: 'btn btn-danger',
                        closeModal: true
                    }
                }
            });
            cargarTareas();
        } else {
            const msg = "La tarea no fue borrada"
            swal({
                title: 'Error',
                text: msg,
                icon: 'error',
                buttons: {
                    confirm: {
                        text: 'Ok',
                        value: true,
                        visible: true,
                        className: 'btn btn-danger',
                        closeModal: true
                    }
                }
            });
        }
    }

    return (<div className="wrapper">
        <Navbar></Navbar>
        <SidebarContainer></SidebarContainer>
        <div className="content-wrapper">
            <ContentHeader
                Titulo={'Tareas'}
                breadcrumb1={'Inicio'}
                breadcrumb2={'Tareas'}
                ruta={'/home'}
            />
            <section className="content">
                <div className='container-fluid'>
                    <div className='card'>
                        <div className='card-header'>
                            <h3 className='card-title'><Link to="/Tareas-Registro" className="btn btn-block btn-primary">Crear tarea</Link></h3>
                            <div className="card-tools">
                                <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                                    <i className="fas fa-minus" />
                                </button>
                                <button type="button" className="btn btn-tool" data-card-widget="remove" title="Remove">
                                    <i className="fas fa-times" />
                                </button>
                            </div>
                        </div>
                        <div className='card-body'>
                            Start creating your amazing application!
                        </div>
                        <div className='card-footer'>
                            Footer
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-header">
                                    <h3 className="card-title">Tabla de Tareas</h3>
                                    <div className="card-tools">
                                        <div className="input-group input-group-sm" style={{ width: 150 }}>
                                            <input type="text" name="table_search" className="form-control float-right" placeholder="Search" />
                                            <div className="input-group-append">
                                                <button type="submit" className="btn btn-default">
                                                    <i className="fas fa-search" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body table-responsive p-0">
                                    <table className="table table-hover text-nowrap">
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Nombre</th>
                                                <th>Descripción</th>
                                                <th>Fecha de Creación</th>
                                                <th>Fecha de Cierre</th>
                                                <th>Opciones</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                tareas.map(
                                                    item =>
                                                        <tr key={item.id}>
                                                            <td>{item.id}</td>
                                                            <td>{item.name}</td>
                                                            <td>{item.description}</td>
                                                            <td>{item.date.split('T')[0]}</td>
                                                            <td>{item.deadline.split('T')[0]}</td>
                                                            <td>
                                                                <Link to={`/Tareas-editar/${item.id}@${item.name}@${item.description}@${item.date.split('T')[0]}@${item.deadline.split('T')[0]}/`} className='btn btn-sm btn-primary'>Editar</Link>&nbsp;&nbsp;
                                                                <button onClick={(e) => eliminarTarea(e, item.id)} className='btn btn-sm btn-danger'>Borrar</button>
                                                            </td>
                                                        </tr>
                                                )
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <Footer></Footer>
    </div>);
}

export default TareasAdmin;
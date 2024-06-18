import React, { useState, useEffect } from 'react'
import APIInvoke from '../../utils/APIInvoke'
import swal from "sweetalert";
import { Link } from 'react-router-dom';
import { useNavigate, useParams } from 'react-router-dom';

const TareasEditar = () => {

    const navigate = useNavigate();

    const { idtarea } = useParams();
    let arreglo = idtarea.split('@');
    const idTareas = arreglo[0];
    console.log("idTarea: ", idTareas)

    const [tareas, setTareas] = useState({
        id: idTareas,
    });

    const cargarTarea = async () => {
        const response = await APIInvoke.invokeGET(`/api/tasks/list/${idTareas}`)
        for (let i = 0; i < response.length; i++) {
            response[i].date = response[i].date.split('T')[0];
            response[i].deadline = response[i].deadline.split('T')[0];
        }
        console.log(response);
        setTareas(response);
        return response;
    }

    useEffect(() => {
        cargarTarea();
    }, [])
    

    const { name, description, date, deadline } = tareas;

    useEffect(() => {
        document.getElementById("name").focus();
    }, [])

    const onChange = (e) => {
        setTareas({ ...tareas, [e.target.name]: e.target.value });
    }

    const onSubmit = (e) => {
        e.preventDefault();
        editarTarea();
    }

    const editarTarea = async () => {

        const data = {
            id: idTareas,
            name: tareas.name,
            description: tareas.description,
            date: tareas.date,
            deadline: tareas.deadline,
        }

        const response = await APIInvoke.invokePUT(`/api/tasks/update/${idTareas}`, data);
        const idTareaEditada = response.id;
        console.log("response: ", response);
        console.log("idTareaEditada: ", idTareaEditada);
        console.log("idTarea: ", idTareas);

        if (idTareaEditada == idTareas) {
            const msg = "La tarea fue editada exitosamente"
            swal({
                title: 'La tarea fue editada',
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
            navigate('/tareas');
        } else {
            const msg = "La tarea no fue editada"
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
    return (
        <div className="wrapper">
            <div className="content-wrapper">
                <section className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card card-primary">
                                    <div className="card-header">
                                        <h3 className="card-title">Editar Tarea</h3>
                                    </div>
                                    <form onSubmit={onSubmit}>
                                        <div className="card-body">
                                            <div className="form-group">
                                                <label htmlFor="name">Nombre</label>
                                                <input type="text" className="form-control" id="name" name="name" value={name} onChange={onChange} />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="description">Descripcion</label>
                                                <input type="text" className="form-control" placeholder='Descripcion' id="description" name="description" value={description} onChange={onChange} />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="date">Fecha</label>
                                                <input type="date" className="form-control" id="date" name="date" value={date} onChange={onChange} />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="deadline">Fecha Limite</label>
                                                <input type="date" className="form-control" id="deadline" name="deadline" value={deadline} onChange={onChange} />
                                            </div>
                                        </div>
                                        <div className="card-footer">
                                            <button type="submit" className="btn btn-primary">Editar</button>
                                            <Link to="/Tareas-Admin" className="btn btn-danger">Cancelar</Link>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
};
export default TareasEditar;
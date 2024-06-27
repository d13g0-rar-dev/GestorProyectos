import React, { useState, useEffect } from 'react';
import APIInvoke from '../../utils/APIInvoke';
import swal from "sweetalert";
import { Link } from 'react-router-dom';
import { useNavigate, useParams } from 'react-router-dom';

const TareasEditar = () => {

    const navigate = useNavigate();

    const { idtarea } = useParams();

    let array = idtarea.split('@');
    const idTarea = array[0];
    const nameUs = array[1];
    const descriptionUs = array[2];
    const dateUs = array[3];
    const deadlineUs = array[4];
    const statusUs = array[5];
    const idGrupo = array[6];

    const [tareas, setTareas] = useState({
        name: nameUs,
        description: descriptionUs,
        date: dateUs,
        deadline: deadlineUs,
        status: statusUs
    });

    const { name, description, date, deadline, status } = tareas;

    useEffect(() => {
        document.getElementById("name").focus();
    }, [])

    const onChange = (e) => {
        setTareas(e.target.value);
        setTareas({ ...tareas, [e.target.name]: e.target.value });
    }

    const onSubmit = (e) => {
        e.preventDefault();
        editarTarea();
    }

    const editarTarea = async () => {

        const data = {
            id: idTarea,
            name: tareas.name,
            description: tareas.description,
            date: tareas.date,
            deadline: tareas.deadline,
            status: tareas.status
        }

        const response = await APIInvoke.invokePUT(`/api/tasks/update/${idTarea}`, data);
        const idTareaEditada = response.id;

        if (idTareaEditada != idTarea) {
            const msg = "No fue posible Actualizar el usuario";
            swal({
                title: 'Actualizacion Fallida',
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
        } else {
            navigate(`/grupos/${idGrupo}`)
            const msg = "Actualizacion Exitosa";
            swal({
                title: 'OK',
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
        }
    }
    return(
        <div className="hold-transition register-page">
            <div className="register-box">
                <div className="register-logo">
                    <Link to={"#"}>
                        <b>Bienvenido</b> Usuario
                    </Link>
                </div>
                <div className="card">
                    <div className="card-body register-card-body">
                        <p className="login-box-msg">Editar Tarea</p>
                        <form onSubmit={onSubmit}>
                            <div className="input-group mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre Tarea"
                                    id="name"
                                    name="name"
                                    value={name}
                                    onChange={onChange}
                                    required
                                    disabled
                                />
                            </div>

                            <div className="input-group mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Descripcion"
                                    id="description"
                                    name="description"
                                    value={description}
                                    onChange={onChange}
                                    required
                                />
                            </div>

                            <div className="input-group mb-3">
                                <input
                                    type="date"
                                    className="form-control"
                                    placeholder="Fecha Inicio"
                                    id="date"
                                    name="date"
                                    value={date}
                                    onChange={onChange}
                                    required
                                />
                            </div>

                            <div className="input-group mb-3">
                                <input
                                    type="date"
                                    className="form-control"
                                    placeholder="Fecha Cierre"
                                    id="deadline"
                                    name="deadline"
                                    value={deadline}
                                    onChange={onChange}
                                    required
                                />
                            </div>

                            <div className="input-group mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Estado de la Tarea"
                                    id="status"
                                    name="status"
                                    value={status}
                                    onChange={onChange}
                                    required
                                />
                            </div>

                            <div className="social-auth-links text-center">
                                <button type='submit' className="btn btn-block btn-primary">
                                    Actualizar
                                </button>
                            </div>
                            <Link to={`/grupos/${idGrupo}`} className="btn btn-block btn-danger">
                                Volver
                            </Link>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};
export default TareasEditar;
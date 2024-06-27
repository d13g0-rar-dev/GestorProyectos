import React from 'react'
import { useState, useEffect } from 'react';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import APIInvoke from '../../utils/APIInvoke';

const TareasRegistro = () => {

    const navigate = useNavigate()
    const {idgrupo} = useParams();

    let arreglo = idgrupo.split('@');
    const idGrupo = arreglo[0];

    const [Tarea, setTarea] = useState({
        name : '',
        description : '',
        date : '',
        deadline : '',
        status : 'Pendiente',
        grupo_id : idGrupo
    })

    const {name,description,date,deadline,status,grupo_id} = Tarea;

    const onChange = (e) =>{
        setTarea(e.target.value);

        setTarea({ ...Tarea, [e.target.name]:e.target.value});
    }   

    const [redirectLogin, setRedirectLogin] = useState(false); // Nuevo estado para la redirección

    const crearTarea = async() =>{
        const data = {
            name: Tarea.name,
            description: Tarea.description,
            date: Tarea.date.split('T')[0],
            deadline: Tarea.deadline.split('T')[0],
            status: Tarea.status,
        }
        
        await APIInvoke.invokePUT(`/api/grupos/add/${idGrupo}/task`,data);
        setRedirectLogin(true);
    }

    const onSubmit = (e) =>{
        e.preventDefault();
        crearTarea();
    }

    useEffect(() => {
        document.getElementById("name").focus();
    }, [])

    if (redirectLogin) {
        return <Navigate to={`/grupos/${idGrupo}`}/>;
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
                        <p className="login-box-msg">Crear Tarea</p>
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
                                />
                            </div>

                            <div className="input-group mb-3">
                                <textarea
                                    type="text"
                                    className="form-control"
                                    rows={4}
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

                            <div className="social-auth-links text-center">
                                <button type='submit' className="btn btn-block btn-primary">
                                    Crear
                                </button>
                            </div>
                            <Link to={"/Tareas-Admin"} className="btn btn-block btn-danger">
                                Volver
                            </Link>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );

}

export default TareasRegistro;
import React, { useState, useEffect } from 'react'
import Navbar from '../../componentes/Navbar';
import SidebarContainer from '../../componentes/SidebarContainer';
import ContentHeader from '../../componentes/ContentHeader';
import Footer from '../../componentes/Footer';
import APIInvoke from '../../utils/APIInvoke';
import swal from "sweetalert";
import { Link } from 'react-router-dom';
import { useNavigate, useParams } from 'react-router-dom';

const ProyectosEditar = () => {

    const navigate = useNavigate();

    const { idproyecto } = useParams();

    let arreglo = idproyecto.split('@');
    const idUs = arreglo[0];
    const NombreUs = arreglo[1];
    const idTipoDocUs = arreglo[2];
    const NumDocUs = arreglo[3];
    const telefonoUs = arreglo[4];

    const [proyectos, setProyectos] = useState({
        tipo_documento: idTipoDocUs,
        documento: NumDocUs,
        name: NombreUs,
        telefono: telefonoUs,
    });

    const { tipo_documento, documento, name,email,telefono, password} = proyectos;

    useEffect(() => {
        document.getElementById("name").focus();
    }, [])

    const onChange = (e) => {
        setProyectos(e.target.value);

        setProyectos({ ...proyectos, [e.target.name]: e.target.value });
    }

    const onSubmit = (e) => {
        e.preventDefault();
        editarProyecto();
    }

    const editarProyecto = async () => {

        const data = {
            id:idUs,
            tipo_documento: proyectos.tipo_documento,
            documento: proyectos.documento,
            name: proyectos.name,
            email: proyectos.email,
            telefono: proyectos.telefono,
            password: proyectos.password,
        }

        const response = await APIInvoke.invokePUT(`/api/members/update/${idUs}`, data);
        const idProyectoEditado = response.id;
        console.log("response: ", response);
        console.log("idProyectoEditado: ", idProyectoEditado);
        console.log("idUs: ", idUs);
        if (idProyectoEditado != idUs) {
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
            navigate('/Proyectos-Admin')
            const msg = "Usuario Creado";
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

    return (
        <div className="hold-transition register-page">
            <div className="register-box">
                <div className="register-logo">
                    <Link to={"#"}>
                        <b>Bienvenido</b> Usuario
                    </Link>
                </div>
                <div className="card">
                    <div className="card-body register-card-body">
                        <p className="login-box-msg">Registro</p>
                        <form onSubmit={onSubmit}>
                            <div className="input-group mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre completo"
                                    id="name"
                                    name="name"
                                    value={name}
                                    onChange={onChange}
                                    required
                                />
                            </div>

                            <div className="input-group mb-3">
                                <select
                                    className="form-control"
                                    value={tipo_documento}
                                    id="tipo_documento"
                                    name="tipo_documento"
                                    onChange={onChange}
                                    required
                                >
                                    <option value="">Tipo de documento</option>
                                    <option value="CC">Cédula</option>
                                    <option value="TI">Tarjeta</option>
                                    <option value="PA">Pasaporte</option>
                                </select>
                            </div>

                            <div className="input-group mb-3">
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Numero de documento"
                                    id="documento"
                                    name="documento"
                                    value={documento}
                                    onChange={onChange}
                                    required
                                />
                            </div>

                            <div className="input-group mb-3">
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Telefono"
                                    id="telefono"
                                    name="telefono"
                                    value={telefono}
                                    onChange={onChange}
                                    required
                                />
                            </div>

                            <div className="input-group mb-3">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Email"
                                    id="email"
                                    name="email"
                                    value={email}
                                    onChange={onChange}
                                    required
                                />
                            </div>

                            <div className="input-group mb-3">
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Contraseña"
                                    id="password"
                                    name="password"
                                    value={password}
                                    onChange={onChange}
                                    required
                                />
                            </div>
                            <div className="social-auth-links text-center">
                                <button type='submit' className="btn btn-block btn-primary">
                                    Actualizar
                                </button>
                            </div>
                            <Link to={"/Proyectos-Admin"} className="btn btn-block btn-danger">
                                Volver
                            </Link>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );

}

export default ProyectosEditar;
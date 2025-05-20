import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import APIInvoke from "../../utils/APIInvoke";
import Navbar from '../../componentes/Navbar';
import SidebarContainer from "../../componentes/SidebarContainer";
import ContentHeader from "../../componentes/ContentHeader";
import Footer from "../../componentes/Footer";

const GrupoUnirse = () => {
    const [redirectLogin, setRedirectLogin] = useState(false); // Nuevo estado para la redirección

    const unirseGrupo = async () => {
        const storedMember = localStorage.getItem("DatosUsuario");
        const member = JSON.parse(storedMember);
        const idGrupo = document.getElementById("code").value;
        console.log("id: ", idGrupo);
        console.log("member: ", storedMember);
        console.log("member_id: ", member.id);

        const response = await APIInvoke.invokePUT(`/api/grupos/add/${idGrupo}/member`, member.id);
        console.log("response: ", response);
        setRedirectLogin(true);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        unirseGrupo();
    };

    useEffect(() => {
        document.getElementById("code").focus();
    }, []);

    if (redirectLogin) {
        return <Navigate to="/home" />;
    }

    return (
        <div className="wrapper">
            <Navbar />
            <SidebarContainer />
            <ContentHeader
                Titulo={''}
                breadcrumb1={'Inicio'}
                breadcrumb2={'Crear Grupo'}
                ruta={'/home'}
            />
            <div className="content-wrapper d-flex justify-content-center ">
                <div className="col-md-6">
                    <form className="card" onSubmit={onSubmit}>
                        <div className="card-body hold-transition">
                            <div className="form-group">
                                <label htmlFor="code">Ingrese el código del grupo al cual desee unirse:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="code"
                                    name="code"
                                    required
                                />
                            </div>
                        </div>
                        <div className="row justify-content-center mb-3">
                            <div className="col-lg-3 col-6">
                                <button type="submit" className="btn btn-block btn-primary">
                                    Unirse
                                </button>
                            </div>
                            <div className="col-lg-3 col-6">
                                <Link to="/home" className="btn btn-block btn-danger">
                                    Volver
                                </Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default GrupoUnirse;
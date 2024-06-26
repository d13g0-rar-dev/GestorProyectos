import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import APIInvoke from "../../utils/APIInvoke";
import Navbar from '../../componentes/Navbar';
import SidebarContainer from "../../componentes/SidebarContainer";
import ContentHeader from "../../componentes/ContentHeader";
import Footer from "../../componentes/Footer";
import { stringify, parse } from 'flatted';

const GrupoUnirse = () => {
    const [redirectLogin, setRedirectLogin] = useState(false); // Nuevo estado para la redirección

    const unirseGrupo = async () => {
        const storedMember = localStorage.getItem('usuario');
        const id = document.getElementById("code").value;
        console.log("id: ", id);
        console.log("member: ", storedMember);

        const response = await APIInvoke.invokeGET(`/api/grupos/list/${id}`);
        console.log(response);
        const data = {
            id: id,
            name: response.name,
            description: response.description,
            members: [storedMember],
        };
        const response2 = await APIInvoke.invokePUT(`/api/grupos/update/${id}`, data);
        console.log("response: ", response2);
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
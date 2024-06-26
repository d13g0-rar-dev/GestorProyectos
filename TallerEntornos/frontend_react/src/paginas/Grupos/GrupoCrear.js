import { React , useEffect, useState }from "react";
import { Link, Navigate } from "react-router-dom";
import APIInvoke from "../../utils/APIInvoke";
import Navbar from '../../componentes/Navbar';
import SidebarContainer from '../../componentes/SidebarContainer';
import ContentHeader from '../../componentes/ContentHeader';
import Footer from "../../componentes/Footer";

const GrupoCrear = () => {

    localStorage.setItem('usuario', JSON.parse(localStorage.getItem('DatosUsuario')));
    const [Grupo, setGrupo] = useState({
        name: '',
        description: '',
    });

    const { name, description} = Grupo;

    const onChange = (e) => {
        setGrupo({ ...Grupo, [e.target.name]: e.target.value });
    }

    const [redirectLogin, setRedirectLogin] = useState(false); // Nuevo estado para la redirección

    const crearGrupo = async () => {
        const storedMember = localStorage.getItem('DatosUsuario');
        const member = JSON.parse(storedMember);

        const code = Math.floor(Math.random() * 1000000);

        const data = {
            name: Grupo.name,
            description: Grupo.description,
            code: code,
            members: [member]
        }
        const response = await APIInvoke.invokePOST(`/api/grupos/save`, data);
        console.log(response);
        const data2 = {
            name: member.name,
            email: member.email,
            password: member.password,
            tipo_documento: member.tipo_documento,
            documento: member.documento,
            telefono: member.telefono,
            grupos: [response.data]
        }
        const response2 = await APIInvoke.invokePUT(`/api/members/update/${member.id}`, data2);
        console.log(response2);
        setRedirectLogin(true);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        crearGrupo();
    }

    useEffect(() => {
        document.getElementById("name").focus();
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
                        breadcrumb2={'Grupos'}
                        breadcrumb3={'Crear Grupo'}
                        ruta={'/home'}
                    />
            <div className="content-wrapper d-flex justify-content-center ">
                <div className="col-md-6">
                    <form className="card" onSubmit={onSubmit}>
                        <div className="card-body hold-transition">
                            <div className="form-group">
                                <label htmlFor="name">Ingrese el nombre del grupo que desee crear:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    name="name"
                                    value={name}
                                    onChange={onChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="description">Ingrese una descripcion para el grupo:</label>
                                <textarea
                                    type="text"
                                    className="form-control"
                                    rows={4}
                                    id="description"
                                    name="description"
                                    value={description}
                                    onChange={onChange}
                                    required
                                />
                            </div>
                            <div>
                                <small>El código de acceso para unirse a este grupo será generado automáticamente.</small>
                            </div>
                        </div>
                        <div className="row justify-content-center mb-3">
                            <div className="col-lg-3 col-6">
                                <button type="submit" className="btn btn-block btn-primary">
                                    Crear
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

export default GrupoCrear;
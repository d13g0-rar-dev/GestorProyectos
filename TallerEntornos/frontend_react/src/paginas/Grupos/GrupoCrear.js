import { React , useEffect, useState }from "react";
import { Link, Navigate } from "react-router-dom";
import APIInvoke from "../../utils/APIInvoke";

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
        const member_id = member.id;
        const data = {
            name: Grupo.name,
            description: Grupo.description,
            members: [member]
        }
        const response = await APIInvoke.invokePOST(`/api/grupos/save`, data);
        const grupo_id = response.id;
        console.log(response);
        const data2 = {
            name: member.name,
            email: member.email,
            password: member.password,
            tipo_documento: member.tipo_documento,
            documento: member.documento,
            telefono: member.telefono,
            grupo_id: grupo_id
        }
        const response2 = await APIInvoke.invokePUT(`/api/members/update/${member_id}`, data2);
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
        <div className="hold-transition register-page">
            <div className="register-box">
                <div className="register-logo">
                    <Link to={"#"}>
                        <b>Bienvenid@ </b> Usuario
                    </Link>
                </div>
                <div className="card">
                    <div className="card-body register-card-body">
                        <p className="login-box-msg">Crear Grupo</p>
                        <form onSubmit={onSubmit}>
                            <div className="input-group mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre Grupo"
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
                                    rows={3}
                                    className="form-control"
                                    placeholder="Descripcion"
                                    id="description"
                                    name="description"
                                    value={description}
                                    onChange={onChange}
                                    required
                                />
                            </div>

                            <div className="social-auth-links text-center">
                                <button type='submit' className="btn btn-block btn-primary" >
                                    Crear Grupo
                                </button>
                            </div>
                            <Link to={"/home"} className="btn btn-block btn-danger">
                                Volver
                            </Link>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default GrupoCrear;
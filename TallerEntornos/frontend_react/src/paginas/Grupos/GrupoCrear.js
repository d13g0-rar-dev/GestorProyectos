import { React , useState }from "react";
import { Link, useNavigate } from "react-router-dom";

const GrupoCrear = () => {

    const navigate = useNavigate();

    const [Grupo, setGrupo] = useState({
        name: '',
        description: '',
    });

    const { name, description } = Grupo;

    const onChange = (e) => {
        setGrupo({ ...Grupo, [e.target.name]: e.target.value });
    }

    



    const onSubmit = (e) => {
        e.preventDefault();
    }


    /*return (
        <div className="hold-transition register-page">
            <div className="register-box">
                <div className="register-logo">
                    <Link to={"#"}>
                        <b>Bienvenido</b> Usuario
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
    );*/
};

export default GrupoCrear;
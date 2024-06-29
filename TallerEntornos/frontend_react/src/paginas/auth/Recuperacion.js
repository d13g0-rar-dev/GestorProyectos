import { useState } from "react";
import { Link } from "react-router-dom";
import APIInvoke from "../../utils/APIInvoke";

const Recuperacion = () => {
    const [nuevaContrasena, setNuevaContrasena] = useState(null);

    const onSubmit = (e) => {
        e.preventDefault();
        recuperar();
    }

    const recuperar = async () => {
        const members = await APIInvoke.invokeGET(`/api/members/list`);
        const email = document.getElementById("email").value;
        const documento = document.getElementById("documento").value;
        const member = members.find(member => member.email === email && member.documento == documento);

        if (member) {
            const nuevaContrasena = Math.random().toString(36).substring(2);
            const data = {
                id: member.id,
                name: member.name,
                tipo_documento: member.tipo_documento,
                documento: member.documento,
                telefono: member.telefono,
                email: member.email,
                password: nuevaContrasena
            };

            const response = await APIInvoke.invokePUT(`/api/members/update/${member.id}`, data);
            console.log(response);
            setNuevaContrasena(nuevaContrasena);
        } else {
            setNuevaContrasena(null);
        }
    }

    return (
        <div className="hold-transition login-page">
            <div className="login-box">
                <div className="login-logo">
                    <b>Recuperar</b> Contraseña
                </div>
                <div className="card">
                    <div className="card-body login-card-body">
                        <p className="login-box-msg">Recuperar Contraseña</p>
                        <form onSubmit={onSubmit}>
                            <div className="input-group mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Email"
                                    id="email"
                                    name="email"
                                    required
                                />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-envelope" />
                                    </div>
                                </div>
                            </div>
                            <div className="input-group mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Documento de identidad"
                                    id="documento"
                                    name="documento"
                                    required
                                />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-id-card" />
                                    </div>
                                </div>
                            </div>
                            {nuevaContrasena && (
                                <div className="alert alert-success" role="alert">
                                    Su nueva contraseña es: {nuevaContrasena}
                                </div>
                            )}
                            <div className="social-auth-links text-center mb-3">
                                <button type="submit" className="btn btn-block btn-primary">Recuperar</button>
                                <Link to={"/"} className="btn btn-block btn-danger">Volver</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Recuperacion;

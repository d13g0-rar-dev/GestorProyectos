import React, { useState, useEffect } from "react";
import {Link, useSubmit, Navigate} from 'react-router-dom';
import APIInvoke from "../../utils/APIInvoke";
import swal from "sweetalert";

const ProyectoRegistro = () => {
    const [Member, setUsuario] = useState({
      tipo_documento : '',
        documento : '',
        email : '',
        name :'',
        password : '',
        telefono : '', 
        confirmar:''
      })
    
      const {tipo_documento,documento,email,name,password,confirmar, telefono} = Member;
    
      const onChange = (e) =>{
        setUsuario(e.target.value);
    
        setUsuario({ ...Member, [e.target.name]:e.target.value});
      }
    
      const [redirectLogin, setRedirectLogin] = useState(false); // Nuevo estado para la redirección
    
      const crearCuenta = async() =>{
        const data = {
          name: Member.name,
          tipo_documento: Member.tipo_documento,
          documento: Member.documento,
          email: Member.email,
          password: Member.password,
          telefono: Member.telefono
        }
        const response = await APIInvoke.invokePOST(`/api/members/save`,data);
        console.log(response);
        setRedirectLogin(true);
      }
    
      const onSubmit = (e) =>{
        e.preventDefault();
        crearCuenta();
      }
    
      useEffect(() => {
        document.getElementById("name").focus();
      }, [])
      
      if (redirectLogin) {
        return <Navigate to="/Proyectos-Admin" />;
      }
    
      return (
        <div className="hold-transition register-page">
          <div className="register-box">
            <div className="register-logo">
              <Link to={"#"}>
                <b>Crear</b> Usuario
              </Link>
            </div>
            <div className="card">
              <div className="card-body register-card-body">
                <p className="login-box-msg">Admin</p>
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
                    <div className="input-group mb-3">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Repite tu contraseña"
                        id="confirmar"
                        name="confirmar"
                        value={confirmar}
                        onChange={onChange}
                        required
                      />
                    </div>
                    <div className="social-auth-links text-center">
                    <button type='submit' className="btn btn-block btn-primary">
                      Crear Usuario
                    </button>
                  </div>
                  <Link to={"/Proyectos-Admin"} className="btn btn-block btn-danger">
                    Regresar
                  </Link>
                </form>
                
              </div>
            </div>
          </div>
        </div>
  )
}

export default ProyectoRegistro
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import APIInvoke from '../../utils/APIInvoke';

const GruposAdmin = () => {
    const usuario_id = JSON.parse(localStorage.getItem('DatosUsuario')).id;
    const [grupos, setGrupos] = useState([]);

    const cargarGrupos = async () => {
      const response = await APIInvoke.invokeGET('/api/grupos/list')
      const grupos = response.filter(grupo => grupo.members.some(member => member.id === usuario_id));
      setGrupos(grupos);
   }
   
   useEffect(() => {
      cargarGrupos();
   }, [])

    return (
        <section className="content">
            <div className='container-fluid'>
                <div className="row">
                    {grupos.map((grupo) => (
                    <div className="col-12 col-sm-6 col-md-3" key={grupo.id}>
                        <div className="info-box">
                            <span className="info-box-icon bg-info elevation-1"><i className="fas fa-users fa-lg"></i></span>
                            <div className="info-box-content">
                                <span className="info-box-text">{grupo.name}</span>
                                <span className="info-box-text">Codigo de Ingreso: {grupo.id}</span>
                                <span className="info-box-number">{grupo.members.length} Miembros</span>
                                <Link to={`/grupos/${grupo.id}`} className="btn btn-primary" >Ingresar</Link>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>      
            </div>
        </section>
    )
}

export default GruposAdmin;
import React, { useState, useEffect } from 'react';
import APIInvoke from '../../utils/APIInvoke';

const ListarDocumentos = ({ idGrupo }) => {
    const [documentos, setDocumentos] = useState([]);

    const fetchDocumentos = async () => {
        try {
            const response = await APIInvoke.invokeGET(`/api/documents/list`);
            if (Array.isArray(response)) {
                setDocumentos(response);
            } else {
                console.error("Unexpected response format:", response);
                setDocumentos([]);
            }
        } catch (error) {
            console.error("Error fetching documents:", error);
            setDocumentos([]);
        }
    };

    useEffect(() => {
        if (idGrupo) {
            fetchDocumentos();
        }
    }, [idGrupo]);

    return (
        <div className='col-md-6'>
            <div className='card'>
                <div className='card-header'>
                    <h3 className='card-title'><i className='fas fa-file'></i> Documentos del Grupo {idGrupo}</h3>
                </div>
                <div className='card-body'>
                <p>Click en el archivo que desees descargar.</p>
                <ul>
                    {documentos.map((doc) => (
                        <li key={doc.id}>
                            <a href={doc.fileUrl} target="_blank" rel="noreferrer">{doc.name}</a>
                        </li>
                    ))}
                </ul>
                </div>
                
            </div>
            
        </div>
    );
};

export default ListarDocumentos;
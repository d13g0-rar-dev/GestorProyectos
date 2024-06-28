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
        <div>
            <h3>Documents for Group {idGrupo}</h3>
            <ul>
                {documentos.map((doc) => (
                    <li key={doc.id}>
                        <a href={doc.fileUrl} target="_blank" rel="noreferrer">{doc.name}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListarDocumentos;
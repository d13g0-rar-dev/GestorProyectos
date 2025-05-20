import {React, useState} from 'react';
import { uploadFile } from '../../firebaseService';
import axios from 'axios';

const SubirDocumentos = ({idGrupo}) => {
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState('');

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!file) {
            setMessage('Por favor seleccione un archivo');
            return;
        }
        try {
            const fileUrl = await uploadFile(file);
            console.log(file);
            console.log(fileUrl);
            const response = await axios.post(`https://worldwideworks-3dbca.web.app/api/documents/update/${idGrupo}`, {fileUrl, name:file.name});
            console.log(response);
            setMessage('Archivo subido correctamente');
        } catch (error) {
            setMessage('Error al subir el archivo');
        }
    };

    return(
        <div className='container mt-4'>
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header d-flex align-items-center">
                            <i className="fas fa-code mr-2"></i>
                            <h5 className="mb-0">Subir Archivo</h5>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="file-upload" className="btn btn-link">
                                        <input 
                                            id="file-upload" 
                                            type="file" 
                                            onChange={handleFileChange} 
                                            className="form-control-file" 
                                        />
                                    </label>
                                    <button type="submit" className="btn btn-primary ml-2">
                                        Subir
                                    </button>
                                </div>
                            </form>
                            <p>{message}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SubirDocumentos;
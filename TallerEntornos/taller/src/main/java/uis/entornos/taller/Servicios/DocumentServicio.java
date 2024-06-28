package uis.entornos.taller.Servicios;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import uis.entornos.taller.Modelos.Grupo;
import uis.entornos.taller.Modelos.Document;
import uis.entornos.taller.Repositorios.DocumentRepositorio;
import uis.entornos.taller.Repositorios.GrupoRepositorio;


@Service
public class DocumentServicio implements IDocumentServicio{

    @Autowired
    private DocumentRepositorio documentRepo;

    @Autowired
    private GrupoRepositorio grupoRepo;

    public void saveDocument(String fileUrl, int idGrupo){
        Grupo grupo = grupoRepo.findById(idGrupo).get();
        Document document = new Document();
        document.setUrl(fileUrl);
        document.setGrupo(grupo);
        documentRepo.save(document);
    }
}

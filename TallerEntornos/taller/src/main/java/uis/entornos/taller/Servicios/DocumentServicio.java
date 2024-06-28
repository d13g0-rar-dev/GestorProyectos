package uis.entornos.taller.Servicios;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import uis.entornos.taller.Modelos.Grupo;
import uis.entornos.taller.Modelos.Document;
import uis.entornos.taller.Modelos.DocumentRequest;
import uis.entornos.taller.Repositorios.DocumentRepositorio;
import uis.entornos.taller.Repositorios.GrupoRepositorio;
import java.util.List;

@Service
public class DocumentServicio implements IDocumentServicio{

    @Autowired
    private DocumentRepositorio documentRepo;

    @Autowired
    private GrupoRepositorio grupoRepo;

    public void saveDocument(String fileUrl, String name, int idGrupo){
        Grupo grupo = grupoRepo.findById(idGrupo).get();
        Document document = new Document();
        document.setUrl(fileUrl);
        document.setName(name);
        document.setGrupo(grupo);
        documentRepo.save(document);
    }

    public List<Document> getDocumentsByGroup(int idGrupo){
        return documentRepo.findByGrupoId(idGrupo);
    }

    public List<DocumentRequest> getDocuments(){
        List<Document> documents = documentRepo.findAll();
        return documents.stream().map(document -> new DocumentRequest(document.getId(), document.getUrl(), document.getName(), document.getGrupo().getId())).toList();
    }
}

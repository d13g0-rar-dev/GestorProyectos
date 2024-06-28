package uis.entornos.taller.Controladores;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import uis.entornos.taller.Servicios.DocumentServicio;
import uis.entornos.taller.Modelos.Document;
import uis.entornos.taller.Modelos.DocumentRequest;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/documents")
public class DocumentControlador {

    @Autowired
    private DocumentServicio documentServicio;


    @PostMapping("update/{idGrupo}")
    public ResponseEntity<String> uploadDocument(@RequestBody DocumentRequest documentRequest, @PathVariable int idGrupo) {
        try {
            documentServicio.saveDocument(documentRequest.getFileUrl(),documentRequest.getName() , idGrupo);
            return new ResponseEntity<>("Documento subido correctamente",HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Error al subir el documento",HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/list")
    public ResponseEntity<List<DocumentRequest>> getAllDocuments() {
        List<DocumentRequest> documents = documentServicio.getDocuments();
        return ResponseEntity.ok(documents);
    }

    @GetMapping("/list/{idGrupo}")
    public List<Document> getDocumentsByGroup(@PathVariable int idGrupo) {
        List<Document> documents = documentServicio.getDocumentsByGroup(idGrupo);
        return documents;
    }
}

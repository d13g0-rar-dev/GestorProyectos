package uis.entornos.taller.Controladores;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import uis.entornos.taller.Servicios.DocumentServicio;
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
            documentServicio.saveDocument(documentRequest.getFileUrl(), idGrupo);
            return new ResponseEntity<>("Documento subido correctamente",HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Error al subir el documento",HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}

package uis.entornos.taller.Controladores;

import org.springframework.web.bind.annotation.*;
import org.springframework.http.*;
import java.util.List;
import uis.entornos.taller.Modelos.Grupo;
import uis.entornos.taller.Servicios.GrupoServicio;
import org.springframework.beans.factory.annotation.Autowired;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/grupos")
public class GrupoControlador {
    @Autowired
    private GrupoServicio grupoServicio;

    @GetMapping("/list")
    public List<Grupo> consultarTodo() {
        return (grupoServicio.getGrupos());
    }

    @GetMapping("/list/{id}")
    public Grupo buscarPorId(Integer id) {
        return grupoServicio.getGrupo(id);
    }

    @PostMapping("/save")
    public ResponseEntity<Grupo> agregarGrupo(Grupo grupo) {
        Grupo grupoNuevo = grupoServicio.saveGrupo(grupo);
        return new ResponseEntity<>(grupoNuevo,HttpStatus.OK);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Grupo> editarGrupo(Grupo grupo){
        Grupo grupoEditado = grupoServicio.getGrupo(grupo.getId());
        if (grupoEditado != null) {
            grupoEditado.setId(grupo.getId());
            grupoEditado.setMembers(grupo.getMembers());
            grupoServicio.saveGrupo(grupoEditado);
        }else{
            return new ResponseEntity<>(grupoEditado, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<>(grupoEditado,HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Grupo> eliminarGrupo(Integer id){
        Grupo grupo = grupoServicio.getGrupo(id);
        if (grupo != null) {
            grupoServicio.deleteGrupo(id);
            return new ResponseEntity<>(grupo,HttpStatus.OK);
        }else{
            return new ResponseEntity<>(grupo, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
package uis.entornos.taller.Controladores;

import org.springframework.web.bind.annotation.*;
import org.springframework.http.*;
import java.util.List;

import uis.entornos.taller.Modelos.Grupo;
import uis.entornos.taller.Servicios.GrupoServicio;
import org.springframework.beans.factory.annotation.Autowired;
import uis.entornos.taller.Modelos.Member;
import java.util.Set;

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
    public Grupo buscarPorId(@PathVariable Integer id) {
        return grupoServicio.getGrupo(id);
    }

    @GetMapping("/list/{id}/members")
    public Set<Member> consultarMiembros(@PathVariable Integer id) {
        return grupoServicio.getGrupo(id).getMembers();
    }

    @PostMapping("/save")
    public ResponseEntity<Grupo> agregarGrupo(@RequestBody Grupo grupo) {
        Grupo grupoNuevo = grupoServicio.saveGrupo(grupo);
        if (grupoNuevo == null) {
            return new ResponseEntity<>(grupoNuevo, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<>(grupoNuevo,HttpStatus.OK);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Grupo> editarGrupo(@RequestBody Grupo grupo){
        Grupo grupoEditado = grupoServicio.getGrupo(grupo.getId());
        if (grupoEditado != null) {
            grupoEditado.setId(grupo.getId());
            grupoEditado.setName(grupo.getName());
            grupoEditado.setDescription(grupo.getDescription());
            grupoEditado.setMembers(grupo.getMembers());

            grupoServicio.saveGrupo(grupoEditado);
        }else{
            return new ResponseEntity<>(grupoEditado, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<>(grupoEditado,HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Grupo> eliminarGrupo(@PathVariable Integer id){
        Grupo grupo = grupoServicio.getGrupo(id);
        if (grupo != null) {
            grupoServicio.deleteGrupo(id);
            return new ResponseEntity<>(grupo,HttpStatus.OK);
        }else{
            return new ResponseEntity<>(grupo, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
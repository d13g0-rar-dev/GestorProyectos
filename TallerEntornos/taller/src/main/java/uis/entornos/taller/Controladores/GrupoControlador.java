package uis.entornos.taller.Controladores;

import org.springframework.web.bind.annotation.*;
import org.springframework.http.*;
import java.util.List;
import uis.entornos.taller.Modelos.Grupo;
import uis.entornos.taller.Servicios.GrupoServicio;
import org.springframework.beans.factory.annotation.Autowired;
import uis.entornos.taller.Modelos.Member;
import uis.entornos.taller.Modelos.Task;

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
    public List<Member> consultarMiembros(@PathVariable Integer id) {
        return grupoServicio.getGrupo(id).getMembers();
    }

    @GetMapping("/list/{id}/tasks")
    public List<Task> consultarTareas(@PathVariable Integer id) {
        return grupoServicio.getGrupo(id).getTasks();
    }

    @PutMapping("/add/{idGrupo}/task")
    public ResponseEntity<Grupo> agregarTarea (@PathVariable Integer idGrupo, @RequestBody Task task){
        grupoServicio.addTask(idGrupo, task);
        return new ResponseEntity<>(grupoServicio.getGrupo(idGrupo),HttpStatus.OK);
    }

    @PostMapping("/save")
    public ResponseEntity<Grupo> agregarGrupo(@RequestBody Grupo grupo) {
        Grupo grupoNuevo = grupoServicio.crearGrupo(grupo);
        return new ResponseEntity<>(grupoNuevo,HttpStatus.OK);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Grupo> editarGrupo(@PathVariable int id, @RequestBody Grupo grupo){
        grupo.setId(id);
        Grupo grupoEditado = grupoServicio.actualizarGrupo(grupo);
        if (grupoEditado != null) {
            return new ResponseEntity<>(grupoEditado,HttpStatus.OK);
        }else{
            return new ResponseEntity<>(grupoEditado, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/add/{idGrupo}/member")
    public ResponseEntity<Grupo> agregarMiembro(@PathVariable Integer idGrupo, @RequestBody Integer memberId){
        grupoServicio.addMember(idGrupo, memberId);
        return new ResponseEntity<>(grupoServicio.getGrupo(idGrupo),HttpStatus.OK);
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
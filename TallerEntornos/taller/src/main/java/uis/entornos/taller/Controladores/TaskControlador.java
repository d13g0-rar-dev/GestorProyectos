package uis.entornos.taller.Controladores;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import uis.entornos.taller.Modelos.Task;
import uis.entornos.taller.Servicios.TaskServicio;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/tasks")
public class TaskControlador {
  @Autowired
  private TaskServicio taskServicio;

  @GetMapping("/list")
  public List<Task> consultarTodo() {
    return (taskServicio.getTasks());
  }

  @GetMapping("/list/{id}")
  public Task buscarPorId(@PathVariable Integer id) {
    return taskServicio.getTask(id);
  }

  @PostMapping("/save")
  public ResponseEntity<Task> agregarTask(@RequestBody Task task) {
    Task taskNuevo = taskServicio.saveTask(task);
    return new ResponseEntity<>(taskNuevo,HttpStatus.OK);
  }

  @PutMapping("/update/{id}")
  public ResponseEntity<Task> editarTask(@RequestBody Task task){
    Task taskEditado = taskServicio.getTask(task.getId());
    if (taskEditado != null) {
      taskEditado.setId(task.getId());
      taskEditado.setName(task.getName());
      taskEditado.setDescription(task.getDescription());
      taskServicio.saveTask(taskEditado);
    }else{
      return new ResponseEntity<>(taskEditado, HttpStatus.INTERNAL_SERVER_ERROR);
    }
    return new ResponseEntity<>(taskEditado,HttpStatus.OK);
  }

  @DeleteMapping("/delete/{id}")
  public ResponseEntity<Task> eliminarTask(@PathVariable Integer id){
    Task task = taskServicio.getTask(id);
    if (task != null) {
      taskServicio.deleteTask(id);
    }else{
      return new ResponseEntity<>(task, HttpStatus.INTERNAL_SERVER_ERROR);
    }
    return new ResponseEntity<>(task,HttpStatus.OK);
  }
}

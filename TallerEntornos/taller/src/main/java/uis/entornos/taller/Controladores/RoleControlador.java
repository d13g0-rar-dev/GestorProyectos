package uis.entornos.taller.Controladores;

import java.util.List;
import uis.entornos.taller.Modelos.Role;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import uis.entornos.taller.Servicios.RoleServicio;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/roles")
public class RoleControlador{
  @Autowired
  private RoleServicio roleServicio;
  
  @GetMapping("/list")
  public List<Role> consultarTodo() {
    return (roleServicio.getRole());
  }

  @GetMapping("/list/{id}")
  public Role buscarPorId(@PathVariable Integer id) {
    return roleServicio.getRole(id);
  }

  @PostMapping("/save")
  public ResponseEntity<Role> agregarRole(@RequestBody Role role) {
    Role roleNuevo = roleServicio.saveRole(role);
    return new ResponseEntity<>(roleNuevo,HttpStatus.OK);
  }

  @PutMapping("/update/{id}")
  public ResponseEntity<Role> editarRole(@RequestBody Role role){
    Role roleEditado = roleServicio.getRole(role.getId());
    if (roleEditado != null) {
      roleEditado.setId(role.getId());
      roleEditado.setName(role.getName());
      roleEditado.setDescription(role.getDescription());
      roleServicio.saveRole(roleEditado);
    }else{
      return new ResponseEntity<>(roleEditado, HttpStatus.INTERNAL_SERVER_ERROR);
    }
    return new ResponseEntity<>(roleEditado,HttpStatus.OK);
  }

  @DeleteMapping("/delete/{id}")
  public ResponseEntity<Role> eliminarRole(@PathVariable Integer id){
    Role role = roleServicio.getRole(id);
    if (role != null) {
      roleServicio.deleteRole(id);
    }else{
      return new ResponseEntity<>(role, HttpStatus.INTERNAL_SERVER_ERROR);
    }
    return new ResponseEntity<>(role,HttpStatus.OK);
  }
}

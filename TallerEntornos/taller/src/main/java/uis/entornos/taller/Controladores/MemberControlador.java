package uis.entornos.taller.Controladores;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import uis.entornos.taller.Modelos.Member;
import uis.entornos.taller.Servicios.MemberServicio;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/members")
public class MemberControlador {
  @Autowired
  private MemberServicio memberServicio;

  @GetMapping("/list")
  public List<Member> consultarTodo() {
    return (memberServicio.getMembers());
  }

  @GetMapping("/list/{id}")
  public Member buscarPorId(@PathVariable Integer id) {
    return memberServicio.getMember(id);
  }

  @PostMapping("/save")
  public ResponseEntity<Member> agregarMember(@RequestBody Member member) {
    Member memberNuevo = memberServicio.saveMember(member);
    return new ResponseEntity<>(memberNuevo,HttpStatus.OK);
  }

  @PutMapping("/update/{id}")
  public ResponseEntity<Member> editarMember(@RequestBody Member member){
    Member memberEditado = memberServicio.getMember(member.getId());
    if (memberEditado != null) {
      memberEditado.setId(member.getId());
      memberEditado.setName(member.getName());
      memberEditado.setEmail(member.getEmail());
      memberEditado.setPassword(member.getPassword());
      memberEditado.setRole(member.getRole());
      memberEditado.setTask(member.getTask());
      memberServicio.saveMember(memberEditado);
    }else{
      return new ResponseEntity<>(memberEditado, HttpStatus.INTERNAL_SERVER_ERROR);
    }
    return new ResponseEntity<>(memberEditado,HttpStatus.OK);
  }

  @DeleteMapping("/delete/{id}")
  public ResponseEntity<Member> eliminarMember(@PathVariable Integer id){
    Member member = memberServicio.getMember(id);
    if (member != null) {
      memberServicio.deleteMember(id);
    }else{
    return new ResponseEntity<>(member, HttpStatus.INTERNAL_SERVER_ERROR);
   }
    return new ResponseEntity<>(member,HttpStatus.OK);
  }
}
  
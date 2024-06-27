package uis.entornos.taller.Controladores;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

import uis.entornos.taller.Modelos.LoginDto;
import uis.entornos.taller.Modelos.Member;
import uis.entornos.taller.Servicios.MemberServicio;

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
  public ResponseEntity<Member> editarMember(@PathVariable("id") int id, @RequestBody Member member){
    Member memberEditado = memberServicio.getMember(member.getId());
    if (memberEditado != null) {
      memberEditado.setId(member.getId());
      memberEditado.setName(member.getName());
      memberEditado.setEmail(member.getEmail());
      memberEditado.setTipo_documento(member.getTipo_documento());
      memberEditado.setDocumento(member.getDocumento());
      memberEditado.setPassword(member.getPassword());
      memberEditado.setTelefono(member.getTelefono());
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

  @PostMapping("/loginmember")
  public int login(@RequestBody LoginDto member){
    int responseLogin = memberServicio.login(member);
    return responseLogin;
  }

  @PostMapping("/login")
  public ResponseEntity<?> loginMember(@RequestBody LoginDto member){
    return memberServicio.ingresar(member);
  }
}

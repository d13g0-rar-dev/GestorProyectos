package uis.entornos.taller.Servicios;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import uis.entornos.taller.Modelos.LoginDto;
import uis.entornos.taller.Modelos.Member;
import org.springframework.transaction.annotation.Transactional;
import uis.entornos.taller.Repositorios.MemberRepositorio;

@Service
@Transactional
public class MemberServicio implements IMemberServicio {
  @Autowired
  private MemberRepositorio memberRepo;

    @Override
    public List<Member> getMembers() {
        return memberRepo.findAll();
    }

    @SuppressWarnings("null")
    @Override
    public Member getMember(Integer id) {
        return memberRepo.findById(id).orElse(null);
    }

    @SuppressWarnings("null")
    @Override
    public Member saveMember(Member member) {
        return memberRepo.save(member);
    }

    @SuppressWarnings("null")
    @Override
    public void deleteMember(Integer id) {
        memberRepo.deleteById(id);
    }

    public int login(LoginDto memberDto) {
        int u = memberRepo.findCountByEmailAndPassword(memberDto.getEmail(), memberDto.getPassword());
        return u;
    }

    public ResponseEntity<?> ingresar(LoginDto memberDto) {
        Map<String, Object> response = new HashMap<>();
        Member member = null;
        try {
            member = memberRepo.findByEmailAndPassword(memberDto.getEmail(), memberDto.getPassword());
            if(member==null){
                response.put("Member", null);
                response.put("Mensaje", "Usuario o contraseña incorrectos");
                response.put("statusCode", HttpStatus.NOT_FOUND.value());
                return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
            }else{
                response.put("Member", member);
                response.put("Mensaje", "Usuario encontrado");
                response.put("statusCode", HttpStatus.OK.value());
                return new ResponseEntity<>(response, HttpStatus.OK);
            }
        } catch(Exception e){
            response.put("Member", null);
            response.put("Mensaje", "Error al buscar el usuario");
            response.put("statusCode", HttpStatus.INTERNAL_SERVER_ERROR.value());
            return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}

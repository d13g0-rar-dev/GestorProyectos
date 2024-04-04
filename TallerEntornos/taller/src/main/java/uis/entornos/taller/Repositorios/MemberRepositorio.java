package uis.entornos.taller.Repositorios;

import org.springframework.data.jpa.repository.JpaRepository;
import uis.entornos.taller.Modelos.Member;

public interface MemberRepositorio extends JpaRepository<Member, Integer>{

}

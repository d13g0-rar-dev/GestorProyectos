package uis.entornos.taller.Repositorios;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import uis.entornos.taller.Modelos.Member;

@Repository
public interface MemberRepositorio extends JpaRepository<Member, Integer> {

  @Query("select count(*) from Member as u where u.email = :email and u.password = :password")
  Integer findCountByEmailAndPassword(@Param("email") String email, @Param("password") String password);

  @Query("select u from Member as u where u.email = :email and u.password = :password")
  Member findByEmailAndPassword(@Param("email") String email, @Param("password") String password);
}


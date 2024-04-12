package uis.entornos.taller.Repositorios;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import uis.entornos.taller.Modelos.Role;

@Repository
public interface RoleRepositorio extends JpaRepository<Role, Integer>{

}

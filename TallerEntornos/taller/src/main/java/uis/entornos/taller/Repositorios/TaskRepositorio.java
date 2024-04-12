package uis.entornos.taller.Repositorios;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import uis.entornos.taller.Modelos.Task;

@Repository
public interface TaskRepositorio extends JpaRepository<Task, Integer>{

}

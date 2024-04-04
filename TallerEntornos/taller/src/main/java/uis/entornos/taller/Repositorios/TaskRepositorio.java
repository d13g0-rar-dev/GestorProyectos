package uis.entornos.taller.Repositorios;

import org.springframework.data.jpa.repository.JpaRepository;
import uis.entornos.taller.Modelos.Task;

public interface TaskRepositorio extends JpaRepository<Task, Integer>{

}

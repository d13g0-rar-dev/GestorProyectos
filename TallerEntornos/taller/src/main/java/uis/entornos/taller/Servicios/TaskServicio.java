package uis.entornos.taller.Servicios;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import uis.entornos.taller.Modelos.Task;
import uis.entornos.taller.Repositorios.TaskRepositorio;
import java.util.List;

@Service
@Transactional
public class TaskServicio implements ITaskServicio{
  @Autowired
  private TaskRepositorio taskRepo;

    @Override
    public List<Task> getTasks() {
        return taskRepo.findAll();
    }

    @SuppressWarnings("null")
    @Override
    public Task getTask(Integer id) {
        return taskRepo.findById(id).orElse(null);
    }

    @SuppressWarnings("null")
    @Override
    public Task saveTask(Task task) {
        return taskRepo.save(task);
    }

    @SuppressWarnings("null")
    @Override
    public void deleteTask(Integer id) {
        taskRepo.deleteById(id);
    }
}

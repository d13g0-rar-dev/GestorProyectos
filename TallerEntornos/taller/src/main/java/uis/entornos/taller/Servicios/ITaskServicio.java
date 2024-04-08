package uis.entornos.taller.Servicios;

import java.util.List;
import uis.entornos.taller.Modelos.Task;

public interface ITaskServicio {
  public List<Task> getTasks();
  public Task getTask(Integer id);
  public Task saveTask(Task task);
  public void deleteTask(Integer id);
}

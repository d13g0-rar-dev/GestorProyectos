package uis.entornos.taller.Servicios;
import java.util.List;
import uis.entornos.taller.Modelos.Role;

public interface IRoleServicio {
  public List<Role> getRole();
  public Role getRole(Integer id);
  public Role saveRole(Role role);
  public void deleteRole(Integer id);
}

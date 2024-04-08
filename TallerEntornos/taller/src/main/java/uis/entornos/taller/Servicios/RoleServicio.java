package uis.entornos.taller.Servicios;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import uis.entornos.taller.Modelos.Role;
import uis.entornos.taller.Repositorios.RoleRepositorio;
import java.util.List;

@Service
@Transactional
public class RoleServicio implements IRoleServicio{
  @Autowired
  private RoleRepositorio roleRepo;

    @Override
    public List<Role> getRole() {
        return roleRepo.findAll();
    }

    @SuppressWarnings("null")
    @Override
    public Role getRole(Integer id) {
        return roleRepo.findById(id).orElse(null);
    }

    @SuppressWarnings("null")
    @Override
    public Role saveRole(Role role) {
        return roleRepo.save(role);
    }

    @SuppressWarnings("null")
    @Override
    public void deleteRole(Integer id) {
        roleRepo.deleteById(id);
    }

}

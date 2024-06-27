package uis.entornos.taller.Servicios;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import uis.entornos.taller.Modelos.Grupo;
import uis.entornos.taller.Modelos.Member;
import uis.entornos.taller.Modelos.Task;
import uis.entornos.taller.Repositorios.GrupoRepositorio;
import uis.entornos.taller.Repositorios.MemberRepositorio;

@Service
@Transactional
public class GrupoServicio implements IGrupoServicio{

    @Autowired
    private GrupoRepositorio grupoRepo;

    @Autowired
    private MemberRepositorio memberRepo;

    @Override
    @SuppressWarnings("null")
    @Transactional
    public Grupo crearGrupo(Grupo grupo) {
        return grupoRepo.save(grupo);
    }

    @Override
    @SuppressWarnings("null")
    public Grupo actualizarGrupo(Grupo grupo) {
        return grupoRepo.save(grupo);
    }

    @Override
    @SuppressWarnings("null")
    public List<Grupo> getGrupos() {
        return grupoRepo.findAll();
    }

    @Override
    @SuppressWarnings("null")
    public Grupo getGrupo(Integer id) {
        return grupoRepo.findById(id).orElse(null);
    }

    @Override
    @SuppressWarnings("null")
    public void deleteGrupo(Integer id) {
        grupoRepo.deleteById(id);
    }

    @Override
    @SuppressWarnings("null")
    public void addMember(Integer id, Integer memberId) {
        Grupo grupo = grupoRepo.findById(id).orElse(null);
        Member member = memberRepo.findById(memberId).orElse(null);
        if (grupo != null && member != null) {
            grupo.getMembers().add(member);
            grupoRepo.save(grupo);
        }
    }

    @Override
    @SuppressWarnings("null")
    public void addTask(Integer id, Task task) {
        Grupo grupo = grupoRepo.findById(id).orElse(null);
        if (grupo != null) {
            grupo.getTasks().add(task);
            grupoRepo.save(grupo);
        }
    }
}

package uis.entornos.taller.Servicios;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import uis.entornos.taller.Modelos.Grupo;
import uis.entornos.taller.Modelos.Member;
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
    public Grupo saveGrupo(Grupo grupo) {
        return grupoRepo.save(grupo);
    }

    @Override
    @SuppressWarnings("null")
    public void deleteGrupo(Integer id) {
        grupoRepo.deleteById(id);
    }

    public void unirseGrupo(int userId, int groupId) {
        Member member = memberRepo.findById(userId).orElseThrow(() -> new RuntimeException("Usuario no encontrado"));
        Grupo grupo = grupoRepo.findById(groupId).orElseThrow(() -> new RuntimeException("Grupo no encontrado"));

        grupo.getMembers().add(member);
        grupoRepo.save(grupo);
    }

    public Grupo findByCode(String code) {
        return grupoRepo.findByCode(code);
    }

}

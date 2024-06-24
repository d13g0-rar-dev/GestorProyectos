package uis.entornos.taller.Servicios;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import uis.entornos.taller.Modelos.Grupo;
import uis.entornos.taller.Repositorios.GrupoRepositorio;

@Service
@Transactional
public class GrupoServicio implements IGrupoServicio{

    @Autowired
    private GrupoRepositorio grupoRepo;

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
}

package uis.entornos.taller.Servicios;

import java.util.List;
import org.springframework.stereotype.Service;
import uis.entornos.taller.Modelos.Grupo;

@Service
public class GrupoServicio implements IGrupoServicio{
    @Override
    public List<Grupo> getGrupos() {
        return null;
    }

    @Override
    public Grupo getGrupo(Integer id) {
        return null;
    }

    @Override
    public Grupo saveGrupo(Grupo grupo) {
        return null;
    }

    @Override
    public void deleteGrupo(Integer id) {
    }
}

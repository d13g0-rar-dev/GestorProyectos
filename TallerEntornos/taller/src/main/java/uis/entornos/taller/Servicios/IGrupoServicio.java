package uis.entornos.taller.Servicios;
import java.util.List;
import uis.entornos.taller.Modelos.Grupo;

public interface IGrupoServicio {
    public List<Grupo> getGrupos();
    public Grupo getGrupo(Integer id);
    public Grupo saveGrupo(Grupo grupo);
    public void deleteGrupo(Integer id);
}

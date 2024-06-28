package uis.entornos.taller.Servicios;
import java.util.List;
import uis.entornos.taller.Modelos.*;

public interface IGrupoServicio {
    public List<Grupo> getGrupos();
    public Grupo crearGrupo(Grupo grupo);
    public Grupo actualizarGrupo(Grupo grupo);
    public Grupo getGrupo(Integer id);
    public void deleteGrupo(Integer id);
    public void addMember(Integer id, Integer memberId);
    public void addTask(Integer id, Task task);
    public void addDocument(Integer id, Document document);
}

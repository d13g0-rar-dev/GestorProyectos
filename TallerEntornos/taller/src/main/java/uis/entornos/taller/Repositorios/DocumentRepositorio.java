package uis.entornos.taller.Repositorios;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;
import uis.entornos.taller.Modelos.Document;

@Repository
public interface DocumentRepositorio extends JpaRepository<Document, Integer>{
        
        public List<Document> findByGrupoId(int idGrupo);
}


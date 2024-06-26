package uis.entornos.taller.Repositorios;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.data.repository.query.Param;
import uis.entornos.taller.Modelos.Grupo;


@Repository
public interface GrupoRepositorio extends JpaRepository<Grupo, Integer> {
    
        @Query("select count(*) from Grupo as u where u.name = :name")
        Integer findCountByName(@Param("name") String name);
    
        @Query("select u from Grupo as u where u.name = :name")
        Grupo findByName(@Param("name") String name);

        @Query("select u from Grupo as u where u.code = :code")
        Grupo findByCode(@Param("code") String code);
}
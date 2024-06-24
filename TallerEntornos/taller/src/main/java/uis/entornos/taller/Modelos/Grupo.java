package uis.entornos.taller.Modelos;

import jakarta.persistence.*;
import lombok.*;
import java.util.Set;
import java.util.HashSet;

@Entity
@Table(name = "grupo")
public class Grupo {
    
    public static final String TABLE_NAME = "grupo";

    @Getter
    @Setter
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Getter
    @Setter
    @Column(name = "name")
    private String name;

    @Getter
    @Setter
    @Column(name = "description")
    private String description;

    @Getter
    @Setter
    @ManyToMany
    @JoinTable(
        name = "grupo_member",
        joinColumns = @JoinColumn(name = "grupo_id"),
        inverseJoinColumns = @JoinColumn(name = "member_id")
    )
    private Set<Member> members = new HashSet<>();

    public Grupo() {
    }

    public Grupo(int id, String name, String description, Set<Member> members) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.members = members;
    }
}

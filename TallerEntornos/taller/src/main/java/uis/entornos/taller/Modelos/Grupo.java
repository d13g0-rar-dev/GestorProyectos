package uis.entornos.taller.Modelos;

import jakarta.persistence.*;
import lombok.*;
import java.util.List;

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
    @OneToMany(mappedBy = "grupo", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Member> members;

    public Grupo() {
    }

    public Grupo(int id, String name, List<Member> members) {
        this.id = id;
        this.name = name;
        this.members = members;
    }
}

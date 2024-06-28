package uis.entornos.taller.Modelos;

import jakarta.persistence.*;
import lombok.*;
import java.util.List;
import java.util.ArrayList;


@Entity
@Table(name = "grupo")
public class Grupo {
    
    public static final String TABLE_NAME = "grupo";

    @Getter
    @Setter
    @Id
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
    @ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinTable(name = "grupo_member",
            joinColumns = @JoinColumn(name = "grupo_id"),
            inverseJoinColumns = @JoinColumn(name = "member_id"))
    private List<Member> members = new ArrayList<>();

    @Getter
    @Setter
    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<Task> tasks = new ArrayList<>();

    @Getter
    @Setter
    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<Document> documents = new ArrayList<>();

    public Grupo() {
    }

    public Grupo(int id, String name, String description, List<Member> members, List<Task> tasks, List<Document> documents) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.members = members;
        this.tasks = tasks;
        this.documents = documents;
    }
}

package uis.entornos.taller.Modelos;

import jakarta.persistence.*;
import lombok.*;

@Entity
public class Document {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Getter
    @Setter
    @Column(name = "id")
    private int id;

    @Getter
    @Setter
    @Column(name = "url")
    private String url;

    @Getter
    @Setter
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "grupo_id")
    private Grupo grupo;

    public Document() {
    }

    public Document(int id, String url, Grupo grupo) {
        this.id = id;
        this.url = url;
        this.grupo = grupo;
    }
}

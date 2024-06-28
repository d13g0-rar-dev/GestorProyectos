package uis.entornos.taller.Modelos;

import lombok.Getter;
import lombok.Setter;


public class DocumentRequest {
    @Getter
    @Setter
    private int id;

    @Getter
    @Setter
    private String fileUrl;

    @Getter
    @Setter
    private String name;

    @Getter
    @Setter
    private int idGrupo;

    public DocumentRequest() {
    }

    public DocumentRequest(int id, String fileUrl, String name, int idGrupo) {
        this.id = id;
        this.fileUrl = fileUrl;
        this.name = name;
        this.idGrupo = idGrupo;
    }
}

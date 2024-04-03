package uis.entornos.taller.Modelos;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;


@Entity
@Table(name = "proveedor")
public class Proveedor {

    public static final String TABLE_NAME = "proveedor";
    @Getter
    @Setter
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Getter
    @Setter
    @Column(name = "ciudad")
    private String ciudad;

    @Getter
    @Setter
    @Column(name = "nombre")
    private String nombre;

    @Getter
    @Setter
    @Column(name = "direccion")
    private String direccion;

    @Getter
    @Setter
    @Column(name = "telefono")
    private String telefono;

    @Getter
    @Setter
    @Column(name = "nit")
    private String nit;

    public Proveedor(Integer id, String nombre, String direccion, String telefono, String nit) {
        this.id = id;
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
        this.nit = nit;
    }

    public Proveedor() {
    }

}

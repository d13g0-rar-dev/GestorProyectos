package uis.entornos.taller.Modelos;

import jakarta.persistence.*;
import lombok.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "member")
public class Member {

  public static final String TABLE_NAME = "member";

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
  @Column(name = "email")
  private String email;

  @Getter
  @Setter
  @Column(name = "password")
  private String password;

  @Getter
  @Setter
  @Column(name = "telefono")
  private long telefono;

  @Getter
  @Setter
  @Column(name = "tipo_documento")
  private String tipo_documento;

  @Getter
  @Setter
  @Column(name = "documento")
  private long documento;

  @Getter
  @Setter
  @ManyToOne
  @JoinColumn(name = "role_id")
  private Role role;

  @Getter
  @Setter
  @ManyToOne
  @JoinColumn(name = "task_id")
  private Task task;

  @Getter
  @Setter
  @ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
  private List<Grupo> grupos = new ArrayList<>();



  public Member(int id, String name, String email, String password, long documento, String tipo_documento, long telefono ,Role role, Task task, List<Grupo> grupos) {
      this.id = id;
      this.name = name;
      this.email = email;
      this.password = password;
      this.telefono = telefono;
      this.documento = documento;
      this.tipo_documento = tipo_documento;
      this.role = role;
      this.task = task;
      this.grupos = grupos;
  }

  public Member() {
  }
}

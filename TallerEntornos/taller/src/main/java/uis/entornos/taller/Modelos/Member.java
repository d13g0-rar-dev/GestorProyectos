package uis.entornos.taller.Modelos;

import jakarta.persistence.GenerationType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Column;
import lombok.Getter;
import lombok.Setter;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.JoinColumn;

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
  private String telefono;

  @Getter
  @Setter
  @Column(name = "tipo_documento")
  private String tipo_documento;

  @Getter
  @Setter
  @Column(name = "documento")
  private String documento;

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

  public Member(int id, String name, String email, String password, String telefono ,Role role, Task task) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.telefono = telefono;
    this.role = role;
    this.task = task;
  }

  public Member() {
  }
}

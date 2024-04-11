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
  @Column(name = "lastname")
  private String lastname;

  @Getter
  @Setter
  @Column(name = "birthdate")
  private String birthdate;

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
  @ManyToOne
  @JoinColumn(name = "role_id")
  private Role role;

  @Getter
  @Setter
  @ManyToOne
  @JoinColumn(name = "task_id")
  private Task task;

  public Member(int id, String name,String lastname, String email, String password,String birthdate, String telefono ,Role role, Task task) {
    this.id = id;
    this.name = name;
    this.lastname = lastname;
    this.email = email;
    this.password = password;
    this.birthdate = birthdate;
    this.telefono = telefono;
    this.role = role;
    this.task = task;
  }

  public Member() {
  }
}

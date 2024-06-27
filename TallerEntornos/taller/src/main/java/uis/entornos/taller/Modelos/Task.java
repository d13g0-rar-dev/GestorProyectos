package uis.entornos.taller.Modelos;


import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;
import java.util.Date;
import jakarta.persistence.Column;

@Entity
@Table(name = "task")
public class Task {
  
  public static final String TABLE_NAME = "task";

  @Getter
  @Setter
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int id;

  @Getter
  @Setter
  @Column(name = "date")
  private Date date;

  @Getter
  @Setter
  @Column(name = "deadline")
  private Date deadline;

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
  @Column(name = "status")
  private String status;

  @Getter
  @Setter
  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "grupo_id")
  private Grupo grupo;


  public Task(int id, Date date, Date deadline, String name, String description, String status, Grupo grupo) {
    this.id = id;
    this.date = date;
    this.deadline = deadline;
    this.name = name;
    this.description = description;
    this.status = status;
    this.grupo = grupo;
  }

  public Task() {
  }
}

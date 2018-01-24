package com.AitBenOm.GymMonitor.entities;

import javax.persistence.*;

import java.util.List;

@Entity
public class Exercise {
    @Id
    @GeneratedValue
    private Long idExercise;
   private String exerciseName;

    @OneToMany(mappedBy = "exercise")
   private List<Charge> chargeList;

    @ManyToOne
    @JoinColumn(name = "idProgram")
      private Program program;

    public Exercise() {
    }

    public Exercise(String exerciseName, List<Charge> chargeList) {
        this.exerciseName = exerciseName;
        this.chargeList = chargeList;
    }

    public Long getIdExercise() {
        return idExercise;
    }

    public void setIdExercise(Long idExercise) {
        this.idExercise = idExercise;
    }

    public String getExerciseName() {
        return exerciseName;
    }

    public void setExerciseName(String exerciseName) {
        this.exerciseName = exerciseName;
    }

    public List<Charge> getChargeList() {
        return chargeList;
    }

    public void setChargeList(List<Charge> chargeList) {
        this.chargeList = chargeList;
    }
}

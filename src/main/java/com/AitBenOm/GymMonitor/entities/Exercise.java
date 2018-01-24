package com.AitBenOm.GymMonitor.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import java.util.List;

@Entity
public class Exercise {
    @Id
    @GeneratedValue
    private Long idExercise;
   private String exerciseName;
   private List<Load> loadList;

    public Exercise() {
    }

    public Exercise(String exerciseName, List<Load> loadList) {
        this.exerciseName = exerciseName;
        this.loadList = loadList;
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

    public List<Load> getLoadList() {
        return loadList;
    }

    public void setLoadList(List<Load> loadList) {
        this.loadList = loadList;
    }
}

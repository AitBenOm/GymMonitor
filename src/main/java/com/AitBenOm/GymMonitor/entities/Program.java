package com.AitBenOm.GymMonitor.entities;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
public class Program {

    @Id
    @GeneratedValue
    private Long idProgram;
    private String programName;
    @Temporal(TemporalType.DATE)
    private Date dateOfCreation;
    @Temporal(TemporalType.DATE)
    private Date lastModification;
    private List<Exercise> exerciseList;

    public Program() {
    }

    public Program(String programName, Date dateOfCreation, Date lastModification, List<Exercise> exerciseList) {
        this.programName = programName;
        this.dateOfCreation = dateOfCreation;
        this.lastModification = lastModification;
        this.exerciseList = exerciseList;
    }

    public Long getIdProgram() {
        return idProgram;
    }

    public void setIdProgram(Long idProgram) {
        this.idProgram = idProgram;
    }

    public String getProgramName() {
        return programName;
    }

    public void setProgramName(String programName) {
        this.programName = programName;
    }

    public Date getDateOfCreation() {
        return dateOfCreation;
    }

    public void setDateOfCreation(Date dateOfCreation) {
        this.dateOfCreation = dateOfCreation;
    }

    public Date getLastModification() {
        return lastModification;
    }

    public void setLastModification(Date lastModification) {
        this.lastModification = lastModification;
    }

    public List<Exercise> getExerciseList() {
        return exerciseList;
    }

    public void setExerciseList(List<Exercise> exerciseList) {
        this.exerciseList = exerciseList;
    }
}

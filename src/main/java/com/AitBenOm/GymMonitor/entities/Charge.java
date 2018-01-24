package com.AitBenOm.GymMonitor.entities;

import javax.persistence.*;
import java.util.Date;

@Entity
public class Charge {

    @Id
    @GeneratedValue
    private Long idLoad;
    private String charge;
    @Temporal(TemporalType.DATE)
    private Date lastModification;

    @ManyToOne
    @JoinColumn(name = "idExercise")
    private Exercise exercise;

    public Charge() {
    }

    public Charge(String load, Date lastModification) {
        this.charge = load;
        this.lastModification = lastModification;
    }

    public Long getIdLoad() {
        return idLoad;
    }

    public void setIdLoad(Long idLoad) {
        this.idLoad = idLoad;
    }

    public String getLoad() {
        return charge;
    }

    public void setLoad(String load) {
        this.charge = load;
    }

    public Date getLastModification() {
        return lastModification;
    }

    public void setLastModification(Date lastModification) {
        this.lastModification = lastModification;
    }
}

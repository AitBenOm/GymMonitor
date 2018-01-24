package com.AitBenOm.GymMonitor.entities;

import javax.persistence.*;
import java.util.Date;

@Entity
public class Load {

    @Id
    @GeneratedValue
    private Long idLoad;
    private String load;
    @Temporal(TemporalType.DATE)
    private Date lastModification;

    public Load() {
    }

    public Load(String load, Date lastModification) {
        this.load = load;
        this.lastModification = lastModification;
    }

    public Long getIdLoad() {
        return idLoad;
    }

    public void setIdLoad(Long idLoad) {
        this.idLoad = idLoad;
    }

    public String getLoad() {
        return load;
    }

    public void setLoad(String load) {
        this.load = load;
    }

    public Date getLastModification() {
        return lastModification;
    }

    public void setLastModification(Date lastModification) {
        this.lastModification = lastModification;
    }
}

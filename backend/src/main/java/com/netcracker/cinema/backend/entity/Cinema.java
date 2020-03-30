package com.netcracker.cinema.backend.entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.util.List;

@Entity
public class Cinema {
    private Long id;
    private String cinemaName;
    private String address;
    private String cinemaPicture;
    @JsonManagedReference
    private List<Hall> halls;

    @Id
    @Column(name = "id")
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @Basic
    @Column(name = "cinema_name")
    public String getCinemaName() {
        return cinemaName;
    }

    public void setCinemaName(String cinemaName) {
        this.cinemaName = cinemaName;
    }

    @Basic
    @Column(name = "address")
    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    @Basic
    @Column(name = "cinema_picture")
    public String getCinemaPicture() {
        return cinemaPicture;
    }

    public void setCinemaPicture(String cinemaPicture) {
        this.cinemaPicture = cinemaPicture;
    }

    @OneToMany(mappedBy = "cinema")
    public List<Hall> getHalls() {
        return halls;
    }

    public void setHalls(List<Hall> halls) {
        this.halls = halls;
    }
}

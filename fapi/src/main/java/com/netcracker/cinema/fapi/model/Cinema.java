package com.netcracker.cinema.fapi.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import java.util.List;

public class Cinema {
    private Long id;
    private String cinemaName;
    private String address;
    private String cinemaPicture;
    private List<Hall> halls;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCinemaName() {
        return cinemaName;
    }

    public void setCinemaName(String cinemaName) {
        this.cinemaName = cinemaName;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getCinemaPicture() {
        return cinemaPicture;
    }

    public void setCinemaPicture(String cinemaPicture) {
        this.cinemaPicture = cinemaPicture;
    }

    public List<Hall> getHalls() {
        return halls;
    }

    public void setHalls(List<Hall> halls) {
        this.halls = halls;
    }
}

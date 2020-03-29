package com.netcracker.cinema.backend.entity;

import javax.persistence.*;

@Entity
public class Hall {
    private Long id;
    private int hallNumber;
    private Cinema cinema;

    @Id
    @Column(name = "id")
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @Basic
    @Column(name = "hall_number")
    public int getHallNumber() {
        return hallNumber;
    }

    public void setHallNumber(int hallNumber) {
        this.hallNumber = hallNumber;
    }

    @ManyToOne
    @JoinColumn(name = "cinema_id")
    public Cinema getCinema() {
        return cinema;
    }

    public void setCinema(Cinema cinema) {
        this.cinema = cinema;
    }
}

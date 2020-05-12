package com.netcracker.cinema.backend.entity.full;

import com.netcracker.cinema.backend.entity.Cinema;
import com.netcracker.cinema.backend.entity.Hall;
import com.netcracker.cinema.backend.entity.Session;

import java.util.List;

public class FullHall {
    private Long id;
    private int hallNumber;
    private Cinema cinema;
    private List<Session> sessions;

    public FullHall(Hall hall) {
        this.id = hall.getId();
        this.hallNumber = hall.getHallNumber();
        this.cinema = hall.getCinema();
        this.sessions = hall.getSessions();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getHallNumber() {
        return hallNumber;
    }

    public void setHallNumber(int hallNumber) {
        this.hallNumber = hallNumber;
    }

    public Cinema getCinema() {
        return cinema;
    }

    public void setCinema(Cinema cinema) {
        this.cinema = cinema;
    }

    public List<Session> getSessions() {
        return sessions;
    }

    public void setSessions(List<Session> sessions) {
        this.sessions = sessions;
    }
}

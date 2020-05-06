package com.netcracker.cinema.fapi.DTO.FullDTO;

import com.netcracker.cinema.fapi.model.Cinema;
import com.netcracker.cinema.fapi.model.Session;

import java.util.List;

public class FullHallDTO {
    private Long id;
    private int hallNumber;
    private Cinema cinema;
    private List<Session> sessions;

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

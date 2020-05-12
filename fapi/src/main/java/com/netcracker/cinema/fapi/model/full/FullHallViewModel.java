package com.netcracker.cinema.fapi.model.full;

import com.netcracker.cinema.fapi.model.CinemaViewModel;
import com.netcracker.cinema.fapi.model.SessionViewModel;

import java.util.List;

public class FullHallViewModel {
    private Long id;
    private int hallNumber;
    private CinemaViewModel cinema;
    private List<SessionViewModel> sessions;

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

    public CinemaViewModel getCinema() {
        return cinema;
    }

    public void setCinema(CinemaViewModel cinema) {
        this.cinema = cinema;
    }

    public List<SessionViewModel> getSessions() {
        return sessions;
    }

    public void setSessions(List<SessionViewModel> sessions) {
        this.sessions = sessions;
    }
}

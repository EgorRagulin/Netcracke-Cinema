package com.netcracker.cinema.backend.DTO;

import com.netcracker.cinema.backend.entity.Ticket;
import com.netcracker.cinema.backend.entity.full.FullMovie;

import java.sql.Date;
import java.sql.Time;

public class CompleteTicketDTO {
    private Long ticketId;
    private Long sessionId;
    private String cinemaName;
    private String cinemaAddress;
    private int hallNumber;
    private int placeNumber;
    private int rowNumber;
    private boolean isSold;
    private Date sessionDate;
    private Time sessionTime;
    private FullMovie movie;

    public CompleteTicketDTO(Ticket ticket) {
        this.ticketId = ticket.getId();
        this.sessionId = ticket.getSession().getId();
        this.cinemaName = ticket.getSession().getHall().getCinema().getName();
        this.cinemaAddress = ticket.getSession().getHall().getCinema().getAddress();
        this.hallNumber = ticket.getSession().getHall().getHallNumber();
        this.placeNumber = ticket.getPlaceNumber();
        this.rowNumber = ticket.getRowNumber();
        this.isSold = ticket.getIsSold();
        this.sessionDate = ticket.getSession().getDate();
        this.sessionTime = ticket.getSession().getTime();
        this.movie = new FullMovie(ticket.getSession().getMovie());
    }

    public Long getTicketId() {
        return ticketId;
    }

    public void setTicketId(Long ticketId) {
        this.ticketId = ticketId;
    }

    public Long getSessionId() {
        return sessionId;
    }

    public void setSessionId(Long sessionId) {
        this.sessionId = sessionId;
    }

    public String getCinemaName() {
        return cinemaName;
    }

    public void setCinemaName(String cinemaName) {
        this.cinemaName = cinemaName;
    }

    public String getCinemaAddress() {
        return cinemaAddress;
    }

    public void setCinemaAddress(String cinemaAddress) {
        this.cinemaAddress = cinemaAddress;
    }

    public int getHallNumber() {
        return hallNumber;
    }

    public void setHallNumber(int hallNumber) {
        this.hallNumber = hallNumber;
    }

    public int getPlaceNumber() {
        return placeNumber;
    }

    public void setPlaceNumber(int placeNumber) {
        this.placeNumber = placeNumber;
    }

    public int getRowNumber() {
        return rowNumber;
    }

    public void setRowNumber(int rowNumber) {
        this.rowNumber = rowNumber;
    }

    public boolean getIsSold() {
        return isSold;
    }

    public void setIsSold(boolean isSold) {
        this.isSold = isSold;
    }

    public Date getSessionDate() {
        return sessionDate;
    }

    public void setSessionDate(Date sessionDate) {
        this.sessionDate = sessionDate;
    }

    public Time getSessionTime() {
        return sessionTime;
    }

    public void setSessionTime(Time sessionTime) {
        this.sessionTime = sessionTime;
    }

    public FullMovie getMovie() {
        return movie;
    }

    public void setMovie(FullMovie movie) {
        this.movie = movie;
    }
}

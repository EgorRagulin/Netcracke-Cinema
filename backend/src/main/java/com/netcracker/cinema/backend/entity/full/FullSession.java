package com.netcracker.cinema.backend.entity.full;

import com.netcracker.cinema.backend.entity.Hall;
import com.netcracker.cinema.backend.entity.Movie;
import com.netcracker.cinema.backend.entity.Session;
import com.netcracker.cinema.backend.entity.Ticket;

import java.sql.Date;
import java.sql.Time;
import java.util.List;

public class FullSession {
    private Long id;
    private Date date;
    private Time time;
    private double cost;
    private String mode;
    private Hall hall;
    private Movie movie;
    private List<Ticket> tickets;

    public FullSession(Session session) {
        this.id = session.getId();
        this.date = session.getDate();
        this.time = session.getTime();
        this.cost = session.getCost();
        this.mode = session.getMode();
        this.hall = session.getHall();
        this.movie = session.getMovie();
        this.tickets = session.getTickets();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Time getTime() {
        return time;
    }

    public void setTime(Time time) {
        this.time = time;
    }

    public double getCost() {
        return cost;
    }

    public void setCost(double cost) {
        this.cost = cost;
    }

    public String getMode() {
        return mode;
    }

    public void setMode(String mode) {
        this.mode = mode;
    }

    public Hall getHall() {
        return hall;
    }

    public void setHall(Hall hall) {
        this.hall = hall;
    }

    public Movie getMovie() {
        return movie;
    }

    public void setMovie(Movie movie) {
        this.movie = movie;
    }

    public List<Ticket> getTickets() {
        return tickets;
    }

    public void setTickets(List<Ticket> tickets) {
        this.tickets = tickets;
    }
}

package com.netcracker.cinema.fapi.DTO.FullDTO;

import com.netcracker.cinema.fapi.model.Hall;
import com.netcracker.cinema.fapi.model.Movie;
import com.netcracker.cinema.fapi.model.Ticket;

import java.sql.Date;
import java.sql.Time;
import java.util.List;

public class FullSessionDTO {
    private Long id;
    private Date date;
    private Time time;
    private String mode;
    private Hall hall;
    private Movie movie;
    private List<Ticket> tickets;

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

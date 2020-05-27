package com.netcracker.cinema.fapi.model.full;

import com.netcracker.cinema.fapi.model.HallViewModel;
import com.netcracker.cinema.fapi.model.MovieViewModel;
import com.netcracker.cinema.fapi.model.TicketViewModel;

import java.sql.Date;
import java.sql.Time;
import java.util.List;

public class FullSessionViewModel {
    private Long id;
    private Date date;
    private Time time;
    private double cost;
    private HallViewModel hall;
    private FullMovieViewModel movie;
    private List<TicketViewModel> tickets;

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

    public HallViewModel getHall() {
        return hall;
    }

    public void setHall(HallViewModel hall) {
        this.hall = hall;
    }

    public FullMovieViewModel getMovie() {
        return movie;
    }

    public void setMovie(FullMovieViewModel movie) {
        this.movie = movie;
    }

    public List<TicketViewModel> getTickets() {
        return tickets;
    }

    public void setTickets(List<TicketViewModel> tickets) {
        this.tickets = tickets;
    }
}

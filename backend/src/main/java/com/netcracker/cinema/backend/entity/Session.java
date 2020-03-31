package com.netcracker.cinema.backend.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.sql.Date;
import java.sql.Time;
import java.util.List;


@Entity
public class Session {
    private Long id;
    private Date date;
    private Time time;
    private String mode;
    private Hall hall;
    private Movie movie;
    private List<Ticket> tickets;

    @Id
    @Column(name = "id")
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @Basic
    @Column(name = "date")
    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    @Basic
    @Column(name = "time")
    public Time getTime() {
        return time;
    }

    public void setTime(Time time) {
        this.time = time;
    }

    @Basic
    @Column(name = "mode")
    public String getMode() {
        return mode;
    }

    public void setMode(String mode) {
        this.mode = mode;
    }

    @ManyToOne
    @JoinColumn(name= "hall_id")
    @JsonBackReference(value = "hall-session")
    public Hall getHall() {
        return hall;
    }

    public void setHall(Hall idHall) {
        this.hall = idHall;
    }

    @ManyToOne
    @JoinColumn(name= "movie_id")
    @JsonManagedReference(value = "session-movie")
    public Movie getMovie() {
        return movie;
    }

    public void setMovie(Movie idMovie) {
        this.movie = idMovie;
    }

    @OneToMany(mappedBy = "session")
    @JsonManagedReference(value = "session-ticket")
    public List<Ticket> getTickets() {
        return tickets;
    }

    public void setTickets(List<Ticket> tickets) {
        this.tickets = tickets;
    }
}

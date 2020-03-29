package com.netcracker.cinema.backend.entity;

import javax.persistence.*;
import java.sql.Date;
import java.sql.Time;


@Entity
public class Session {
    private Long id;
    private Date date;
    private Time time;
    private String mode;
    private Hall hall;
    private Movie movie;

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

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name= "hall_id")
    public Hall getHall() {
        return hall;
    }

    public void setHall(Hall idHall) {
        this.hall = idHall;
    }

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name= "movie_id")
    public Movie getMovie() {
        return movie;
    }

    public void setMovie(Movie idMovie) {
        this.movie = idMovie;
    }
}

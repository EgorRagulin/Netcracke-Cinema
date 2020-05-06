package com.netcracker.cinema.fapi.DTO.FullDTO;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.netcracker.cinema.backend.entity.Movie;
import com.netcracker.cinema.backend.entity.Session;
import com.netcracker.cinema.backend.enums.MovieGenre;

import java.sql.Time;
import java.util.List;

public class FullMovieDTO {
    private Long id;
    private String title;
    private byte[] picture;
    private String description;
    private int ageLimit;
    private Time duration;
    private List<String> genres;
    private List<Session> sessions;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public byte[] getPicture() {
        return picture;
    }

    public void setPicture(byte[] picture) {
        this.picture = picture;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getAgeLimit() {
        return ageLimit;
    }

    public void setAgeLimit(int ageLimit) {
        this.ageLimit = ageLimit;
    }

    public Time getDuration() {
        return duration;
    }

    public void setDuration(Time duration) {
        this.duration = duration;
    }

    public List<String> getGenres() {
        return genres;
    }

    public void setGenres(List<String> genres) {
        this.genres = genres;
    }

    public List<Session> getSessions() {
        return sessions;
    }

    public void setSessions(List<Session> sessions) {
        this.sessions = sessions;
    }
}

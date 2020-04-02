package com.netcracker.cinema.backend.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.sql.Time;
import java.util.List;

@Entity
@Table(name = "movie")
public class Movie {
    private Long id;
    private String title;
    private String picture;
    private String descriptions;
    private int ageLimit;
    private Time duration;
    private String categories;
    private List<Session> sessions;

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @Basic
    @Column(name = "title")
    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    @Basic
    @Column(name = "picture")
    public String getPicture() {
        return picture;
    }

    public void setPicture(String picture) {
        this.picture = picture;
    }

    @Basic
    @Column(name = "descriptions")
    public String getDescriptions() {
        return descriptions;
    }

    public void setDescriptions(String description) {
        this.descriptions = description;
    }

    @Basic
    @Column(name = "age_limit")
    public int getAgeLimit() {
        return ageLimit;
    }

    public void setAgeLimit(int ageLimit) {
        this.ageLimit = ageLimit;
    }

    @Basic
    @Column(name = "duration")
    public Time getDuration() {
        return duration;
    }

    public void setDuration(Time duration) {
        this.duration = duration;
    }

    @Basic
    @Column(name = "categories")
    public String getCategory() {
        return categories;
    }

    public void setCategory(String category) {
        this.categories = category;
    }

    @OneToMany(mappedBy = "movie")
    @JsonBackReference(value = "session-movie")
    public List<Session> getSessions() {
        return sessions;
    }

    public void setSessions(List<Session> sessions) {
        this.sessions = sessions;
    }
}

enum category{
    Adventure,
    Action,
    Thriller,
    Horror,
    Comedy,
    Musical,
    Romance,
    Drama,
    Fantasy
}
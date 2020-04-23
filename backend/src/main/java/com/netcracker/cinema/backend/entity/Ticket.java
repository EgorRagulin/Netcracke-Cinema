package com.netcracker.cinema.backend.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;

@Entity
@Table(name = "ticket2")
public class Ticket {
    private Long id;
    private int rowNumber;
    private int placeNumber;
    private int cost;
    private int session;
    private int user;

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
    @Column(name = "place_number")
    public int getPlaceNumber() {
        return placeNumber;
    }

    public void setPlaceNumber(int placeNumber) {
        this.placeNumber = placeNumber;
    }

    @Basic
    @Column(name = "row_number")
    public int getRowNumber() {
        return rowNumber;
    }

    public void setRowNumber(int rowNumber) {
        this.rowNumber = rowNumber;
    }

    @Basic
    @Column(name = "cost")
    public int getCost() {
        return cost;
    }

    public void setCost(int cost) {
        this.cost = cost;
    }

//    @ManyToOne
//    @JoinColumn(name= "session_id")
//    @JsonManagedReference(value = "ticket-session")
//    @JsonIgnore
    @Basic
    @Column(name = "session_id")
    public int getSession() {
        return session;
    }

    public void setSession(int session) {
        this.session = session;
    }

//    @ManyToOne
//    @JoinColumn(name= "user_id")
//    @JsonManagedReference(value = "ticket-user")
//    @JsonIgnore
    @Basic
    @Column(name = "user_id")
    public int getUser() {
        return user;
    }

    public void setUser(int user) {
        this.user = user;
    }
}

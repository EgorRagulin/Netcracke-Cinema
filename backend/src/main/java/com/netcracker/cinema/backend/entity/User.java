package com.netcracker.cinema.backend.entity;

import javax.persistence.*;
import java.util.List;

@Entity
public class User {
    private Long id;
    private String firstName;
    private String secondName;
    private String role;
//    private Wallet idWallet;
//    private List<Ticket> tickets;

    @Id
    @Column(name = "id")
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @Basic
    @Column(name = "first_name")
    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    @Basic
    @Column(name = "second_name")
    public String getSecondName() {
        return secondName;
    }

    public void setSecondName(String secondName) {
        this.secondName = secondName;
    }

    @Basic
    @Column(name = "role")
    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

//    @OneToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
//    @JoinColumn(name= "wallet_id")
//    public Wallet getIdWallet() {
//        return idWallet;
//    }
//
//    public void setIdWallet(Wallet idWallet) {
//        this.idWallet = idWallet;
//    }
//
//    @OneToMany
//    @JoinColumn(name = "user_id", referencedColumnName = "id")
//    public List<Ticket> getTickets() {
//        return tickets;
//    }
//
//    public void setTickets(List<Ticket> tickets) {
//        this.tickets = tickets;
//    }
}

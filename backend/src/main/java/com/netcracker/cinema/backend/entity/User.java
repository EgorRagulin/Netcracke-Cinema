package com.netcracker.cinema.backend.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "user")
public class User {
    private Long id;
    private String firstName;
    private String secondName;
    private String role;
    private Login login;
    private Wallet wallet;
    private List<Ticket> tickets;

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

    @OneToOne
    @JoinColumn(name = "login_id")
    @JsonManagedReference(value = "user-login")
    @JsonIgnore
    public Login getLogin() {
        return login;
    }

    public void setLogin(Login login) {
        this.login = login;
    }

    @OneToOne(mappedBy = "user")
    @JsonBackReference(value = "wallet-user")
    public Wallet getWallet() {
        return wallet;
    }

    public void setWallet(Wallet idWallet) {
        this.wallet = idWallet;
    }

    @OneToMany(mappedBy = "user")
    @JsonBackReference(value = "ticket-user")
    public List<Ticket> getTickets() {
        return tickets;
    }

    public void setTickets(List<Ticket> tickets) {
        this.tickets = tickets;
    }
}

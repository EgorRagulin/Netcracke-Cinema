package com.netcracker.cinema.backend.entity.full;

import com.netcracker.cinema.backend.entity.Login;
import com.netcracker.cinema.backend.entity.Ticket;
import com.netcracker.cinema.backend.entity.User;
import com.netcracker.cinema.backend.entity.Wallet;

import java.util.List;

public class FullUser {
    private Long id;
    private String firstName;
    private String secondName;
    private String email;
    private String phoneNumber;
    private byte[] avatar;
    private Login login;
    private Wallet wallet;
    private List<Ticket> tickets;

    public FullUser(User user) {
        this.id = user.getId();
        this.firstName = user.getFirstName();
        this.secondName = user.getSecondName();
        this.email = user.getEmail();
        this.phoneNumber = user.getPhoneNumber();
        this.avatar = user.getAvatar();
        this.login = user.getLogin();
        this.wallet = user.getWallet();
        this.tickets = user.getTickets();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getSecondName() {
        return secondName;
    }

    public void setSecondName(String secondName) {
        this.secondName = secondName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public byte[] getAvatar() {
        return avatar;
    }

    public void setAvatar(byte[] avatar) {
        this.avatar = avatar;
    }

    public Login getLogin() {
        return login;
    }

    public void setLogin(Login login) {
        this.login = login;
    }

    public Wallet getWallet() {
        return wallet;
    }

    public void setWallet(Wallet wallet) {
        this.wallet = wallet;
    }

    public List<Ticket> getTickets() {
        return tickets;
    }

    public void setTickets(List<Ticket> tickets) {
        this.tickets = tickets;
    }
}
